using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public interface IAdmin
    {
        Task<string> AdminRegister(AdminModel adminModel);
        Task<string> DeleteAdmin(string emailid);
        Task<string> UpdateAdmin(string emailid, AdminModel adminModel);
        //Task<List<UserModel>> Showusers();
        Task<int> UpdatePolicy(int policyid, PolicyRegistrationModel policyRegistrationModel);
        Task<int> DeletePolicy(int policyid);
        Task<string> AdminLogin(AdminModel adminModel);
        Task<string> ForgotPassword(string email);

    }
}
