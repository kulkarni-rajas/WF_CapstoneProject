using BankAuthAPI.Models;

namespace BankAuth.UnitTests;

[TestFixture]
public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        // Arrange
        var user = new User();

        // Act
        user.Username = "test.user";

        // Assert
        Assert.That(false);
    }
}
