using BankAuthAPI.Context;
using BankAuthAPI.Helper;
using BankAuthAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BankAuth.UnitTests;

[TestFixture]
public class UserTests
{
    private readonly AppDbContext _authContext;

    public UserTests(AppDbContext authContext)
    {
        _authContext = authContext;
    }

    [SetUp]
    public void Setup()
 {
        // Add DB connection here
 }

    [Test]
    public async Task InvalidUsername_ReturnsFalse()
    {
        // Arrange
        var user = new User();

        // Act
        user.Username = "new.user";
        var result = await _authContext.Users.AnyAsync(x => x.Username == user.Username);

        // Assert
        Assert.That(result, Is.False);
    }

    [Test]
    public async Task CorrectCredentials_ReturnsTrue()
    {
        // Arrange
        var user = new User();

        // Act
        user.Username = "john";
        user.Password = "1234";

        var dbUser = await _authContext.Users.FirstOrDefaultAsync(x => x.Username == user.Username);

        var result = PasswordHasher.VerifyPassword(dbUser.Password, user.Password);

        // Assert
        Assert.That(result, Is.True);
    }

    [Test]
    public async Task InvalidPassword_ReturnsFalse()
    {
        // Arrange
        var user = new User();

        // Act
        user.Username = "jane";
        user.Password = "1234";

        var dbUser = await _authContext.Users.FirstOrDefaultAsync(x => x.Username == user.Username);

        var result = PasswordHasher.VerifyPassword(dbUser.Password, user.Password);

        // Assert
        Assert.That(result, Is.False);
    }
}