using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BankAuthAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string AccountType { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public int IsLocked { get; set; }

    }
}
