using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public interface IPolicy
    {
        Task<string> RegisterPolicy(PolicyRegistrationModel policyRegistrationModel);
        //Task<int> UpdatePolicy(int policyid, PolicyRegistrationModel policyRegistrationModel);
        //Task<string> DeleteUser();
        Task<List<PolicyRegistrationModel>> ShowAllPolicy();
        
    }
}
