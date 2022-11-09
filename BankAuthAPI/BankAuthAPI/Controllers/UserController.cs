using BankAuthAPI.Context;
using BankAuthAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            if(userObj == null)
                    return BadRequest();

            var user = await _authContext.Users.FirstOrDefaultAsync(x => x.Username == userObj.Username && x.Password == userObj.Password);
            if (user == null)
                return NotFound(new { Message = "User Not Found!" });

            if (user.IsLocked)
                return NotFound(new { Message = "Account Locked, Please Contact Admin!" });

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

            userObj.IsLocked = false;
            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered!"
            });
        }
    }
}
