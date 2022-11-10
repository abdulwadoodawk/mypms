using Microsoft.EntityFrameworkCore;
using ProjectAPI.DataAccessLayer;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public class UserRepository : IUser
    {
        public readonly PMSDbContext dbContext = null;
        public UserRepository(PMSDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<string> DeleteUser(string emailid)
        {
            var user = await dbContext.userModels.Where(x => x.Email == emailid).FirstOrDefaultAsync();
            if(user!=null)
            {
                dbContext.userModels.Remove(user);
            }
            await dbContext.SaveChangesAsync();
            return emailid;
        }

        public async Task<List<PolicyRegistrationModel>> GetbyType(string Policytype)
        {
            var policy = await dbContext.policyRegistrationModels.Where(x => x.PolicyType ==Policytype).ToListAsync();
            return policy;
        }

        public async Task<string> Register(UserModel userModel)
        {
            dbContext.userModels.Add(userModel);
            await dbContext.SaveChangesAsync();
            return userModel.Email;
        }

        public async Task<List<PolicyRegistrationModel>> ShowPolicies()
        {
            var policies = await dbContext.policyRegistrationModels.ToListAsync();
            return policies;
        }

        public async Task<string> UpdateUser(string emailid, UserModel userModel)
        {
            var user = await dbContext.userModels.Where(x => x.Email == userModel.Email).FirstOrDefaultAsync();
            if(user!=null)
            {
                user.Password = userModel.Password;
                user.CPassword = userModel.CPassword;
                user.Address = userModel.Address;
                user.ContactNo = userModel.ContactNo;
                user.DOB = userModel.DOB;
                user.Fname = userModel.Fname;
                user.Lname = userModel.Lname;
                user.Salary = userModel.Salary;
                user.PANNo = userModel.PANNo;
            }
            await dbContext.SaveChangesAsync();
            return userModel.Email ;
        }

        public async Task<string> UserLogin(UserModel userModel)
        {
            //var ar = await dbContext.userModels.Where(x => x.Email == userModel.Email && x.Password == userModel.Password).FirstOrDefaultAsync();

            //if (string.IsNullOrEmpty(userModel.Email) || string.IsNullOrEmpty(userModel.Password))
            //{
            //    return null;
            //}
            //return ar.Email;
        //}
        var user = await dbContext.userModels.Where(x => x.Email == userModel.Email && x.Password == userModel.Password).FirstOrDefaultAsync();
                if (user == null)
                {
                    return null;
                }
                 return (user.Email);
            }
        public async Task<string> ForgotPassword(string email)
        {
            var user = await dbContext.userModels.Where(x => x.Email == email).FirstOrDefaultAsync();
            if (user == null)
            {
                return null;
            }
            else
            {
                return user.Password;
            }
        }
    }
}
