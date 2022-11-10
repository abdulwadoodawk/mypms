using Microsoft.EntityFrameworkCore;
using ProjectAPI.DataAccessLayer;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public class PolicyRepository : IPolicy
    {
        public readonly PMSDbContext dbContext = null;
        public PolicyRepository(PMSDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<string> RegisterPolicy(PolicyRegistrationModel policyRegistrationModel)
        {
            dbContext.policyRegistrationModels.Add(policyRegistrationModel);
          //  policyRegistrationModel.EndDate = policyRegistrationModel.StartDate.AddYears(policyRegistrationModel.Duration);
          //  var b = policyRegistrationModel.EndDate;
           // await dbContext.SaveChangesAsync();
            await dbContext.SaveChangesAsync();
   ;
            return policyRegistrationModel.PolicyName;

        }
        public async Task<List<PolicyRegistrationModel>> ShowAllPolicy()
        {
            var ar = await dbContext.policyRegistrationModels.ToListAsync();
            return ar;
        }

        
    }
}
