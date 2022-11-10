using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public interface IUser
    {
        Task<string> Register(UserModel userModel);
        Task<string> UpdateUser(string emailid, UserModel userModel);
        Task<string> DeleteUser(string emailid);
        Task<string> UserLogin(UserModel userModel);
        //Task<List<PolicyRegistrationModel>> ShowPolicies();
        Task <List<PolicyRegistrationModel>> GetbyType(string Policytype);
        Task<string> ForgotPassword(string email);

    }
}
