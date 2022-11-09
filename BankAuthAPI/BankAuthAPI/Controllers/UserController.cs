using BankAuthAPI.Context;
using BankAuthAPI.Helper;
using BankAuthAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.Text;
using System.Text.RegularExpressions;

namespace BankAuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authContext;
        public UserController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();

            var user = await _authContext.Users.FirstOrDefaultAsync(x => x.Username == userObj.Username);

            if (user == null)
                return NotFound(new { Message = "User Not Found!" });

            if (user.IsLocked >= 3)
                return NotFound(new { Message = "Account Locked, Please Contact Admin!" });

            if (!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
            {
                user.IsLocked += 1;
                _authContext.Users.Update(user);
                await _authContext.SaveChangesAsync();
                if (user.IsLocked >= 3)
                    return NotFound(new { Message = "Account Locked, Please Contact Admin!" });
                return NotFound(new { Message = string.Format("Wrong Password, Try again you have {0} more tries",3 - user.IsLocked,1)});
            }

            user.IsLocked = 0;
            _authContext.Users.Update(user);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "Login Success"
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();
            //Check Username
            if (await CheckUserNameExistAsync(userObj.Username))
                return BadRequest(new { Message = "Username Already Exists!" });

            //Check Email
            if (await CheckEmailExistAsync(userObj.Email))
                return BadRequest(new { Message = "Email Already Exists!" });

            //Check for Valid Email
            if(!CheckValidEmail(userObj.Email))
                return BadRequest(new { Message = "Please Enter Valid Email ID" });

            //Check Password Strength
            var pass = CheckPasswordStrength(userObj.Password);
            if (!string.IsNullOrEmpty(pass))
                return BadRequest(new { Message = pass });

            userObj.IsLocked = 0;
            userObj.Password = PasswordHasher.HashPassword(userObj.Password);
            userObj.Role = "User";
            userObj.Token = "";
            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered!"
            });
        }

        private Task<bool> CheckUserNameExistAsync(string username)
            => _authContext.Users.AnyAsync(x => x.Username == username);

        private Task<bool> CheckEmailExistAsync(string email)
            => _authContext.Users.AnyAsync(x => x.Email == email);

        private static string CheckPasswordStrength(string pasasword)
        {
            StringBuilder sb = new StringBuilder();
            if ((Regex.IsMatch(pasasword, "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,15}$")))
                sb.Append("Min 8 Char, One upper case, one lower case, one number, one special character");
            return sb.ToString();
        }

        private bool CheckValidEmail(string email)
        {
            bool isEmail = Regex.IsMatch(email, @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z", RegexOptions.IgnoreCase);
            return isEmail;
        }
    }
}
