using Microsoft.EntityFrameworkCore;
using ProjectAPI.DataAccessLayer;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public class AdminRepository : IAdmin
    {
        public readonly PMSDbContext dbContext = null;
        public AdminRepository(PMSDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public  async Task<string> AdminLogin(AdminModel adminModel)
        {
            
            var newadmin = await dbContext.adminModels.Where(x => x.Email == adminModel.Email && x.Password ==adminModel.Password).FirstOrDefaultAsync();
            if (newadmin == null)
            {
                return null;
            }
            return (newadmin.Email);
        }

        public async Task<string> AdminRegister(AdminModel adminModel)
        {
            dbContext.adminModels.Add(adminModel);
            await dbContext.SaveChangesAsync();
            return adminModel.Email;
        }
        public async Task<string> DeleteAdmin(string emailid)
        {
            var admin = await dbContext.adminModels.Where(x => x.Email == emailid).FirstOrDefaultAsync();
            if (admin != null)
            {
                dbContext.adminModels.Remove(admin);
            }
            await dbContext.SaveChangesAsync();
            return emailid;
        }

        public async Task<int> DeletePolicy(int policyid)
        {
            PolicyRegistrationModel policy = await dbContext.policyRegistrationModels.Where(
                x => x.PolicyId == policyid).FirstOrDefaultAsync();
            if(policy!=null)
            {
                dbContext.policyRegistrationModels.Remove(policy);
            }
            await dbContext.SaveChangesAsync();
            return policyid;
        }

        public async Task<string> UpdateAdmin(string emailid, AdminModel adminModel)
        {
            var admin = await dbContext.adminModels.Where(x => x.Email== emailid).FirstOrDefaultAsync();
            if (admin != null)
            {
                admin.Password = adminModel.Password;
                admin.ConfirmPass = adminModel.ConfirmPass;
            }
            await dbContext.SaveChangesAsync();
            return emailid;
        }

        public async Task<int> UpdatePolicy(int policyid, PolicyRegistrationModel policyRegistrationModel)
        {
            var policy = await dbContext.policyRegistrationModels.Where(
               x => x.PolicyId == policyid).FirstOrDefaultAsync();
            if (policy != null)
            {
                policy.PolicyName = policyRegistrationModel.PolicyName;
                policy.StartDate = policyRegistrationModel.StartDate;
                policy.Duration = policyRegistrationModel.Duration;
                policy.CompanyName = policyRegistrationModel.CompanyName;
                policy.InitialDeposit = policyRegistrationModel.InitialDeposit;
                policy.PolicyType = policyRegistrationModel.PolicyType;
                policy.UserTypes = policyRegistrationModel.UserTypes;
                policy.Term = policyRegistrationModel.Term;
                policy.TermAmount = policyRegistrationModel.TermAmount;
                policy.Interest = policyRegistrationModel.Interest;
            }
            await dbContext.SaveChangesAsync();
            return policyid;
        }
        public async Task<string> ForgotPassword(string email)
        {
            var admin = await dbContext.adminModels.Where(x => x.Email == email).FirstOrDefaultAsync();
            if (admin == null)
            {
                return null;
            }
            else
            {
                return admin.Password;
            }
        }

        //public Task UpdatePolicy(int policyid)
        //{
        //    throw new NotImplementedException();
        //}
    }
    
}
