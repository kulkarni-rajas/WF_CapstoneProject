using BankAuthAPI.Controllers;
using BankAuthAPI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;

namespace UnitTests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public async Task TestUserLogin()
        {
           
            using var application = new WebApplicationFactory<Program>();
            var client = application.CreateClient();



            var activity = await client.GetAsync($"/authenticate");
            Assert.NotNull(activity);
            



        }
        
    }
}