using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectAPI.DataAccessLayer;
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
    public class PolicyController : ControllerBase
    {

        public readonly PMSDbContext dbContext = null;
        //public PolicyController(PMSDbContext dbContext)
        //{
        //    this.dbContext = dbContext;
        //}
        private readonly IPolicy policy = null;
        public PolicyController(IPolicy policy,PMSDbContext dbContext)
        {
            this.policy = policy;
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> ShowAllPolicy()
        {
            var policies = await policy.ShowAllPolicy();
            return Ok(policies);
        }
        [HttpPost]
        public async Task<IActionResult> CreatePolicy([FromBody] PolicyRegistrationModel policyRegistrationModel)
        {
            var a = await policy.RegisterPolicy(policyRegistrationModel);
            policyRegistrationModel.EndDate = policyRegistrationModel.StartDate.AddYears(policyRegistrationModel.Duration);
            
            policyRegistrationModel.MaturityAmount = (policyRegistrationModel.InitialDeposit) + (policyRegistrationModel.Duration
                * policyRegistrationModel.Term * policyRegistrationModel.TermAmount) +
((policyRegistrationModel.Duration * policyRegistrationModel.Term * policyRegistrationModel.TermAmount)
* (policyRegistrationModel.Interest / 100));
            await dbContext.SaveChangesAsync();


            //            // var startDate = policymodel.StartDate;
            // var Duration = policymodel.Duration;
            ////// var numWeekendDays = NumberOfWeekendDays(startDate, duration);
            //// //var endDate = startDate.AddYears(Duration + startDate);
            //// string year = DateTime.Parse(DateTime.Now.ToString()).Year.ToString();
            ////int ae = int.Parse(year);
            //// var endDate = startDate.AddYears(Duration + ae);
            //// policymodel.EndDate = endDate;
            //DateTime endDate = startDate.AddYears(Duration);

            return Ok(a);
        }
    }
}
