using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectAPI.DI;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser user = null;
        public UserController(IUser user)
        {
            this.user = user;
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserModel usermodel)
        {
            string newuser = await user.Register(usermodel);
            return Ok(newuser);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateUser(string emailid, UserModel usermodel)
        {
            string updateduser = await user.UpdateUser(emailid, usermodel);
            return Ok(updateduser);
        }
        [HttpDelete]
        public async Task<IActionResult> DeleteUser(string emailid)
        {
            string usr = await user.DeleteUser(emailid);
            return Ok(usr);
        }
        [HttpPost("Userlogin")]
        public async Task<IActionResult> UserLogin(UserModel userModel)
        {
            string userlog = await user.UserLogin(userModel);
            return Ok(userlog);

        }
        [HttpGet("GetPolicyByType/{policytype}")]
        public async Task<IActionResult> GetByPolicyType(string policytype)
        {
            var policy = await user.GetbyType(policytype);
            if (policy != null)
            {
                return Ok(policy);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpGet("Forgotpassword")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var password = await user.ForgotPassword(email);
            return Ok(password);
        }
        //public async Task<IActionResult> ShowPolicies()
        //{
        //    var a = await PolicyRegistrationModel.Showpolicies();
        //    return Ok(a);
        //}


    }
}
