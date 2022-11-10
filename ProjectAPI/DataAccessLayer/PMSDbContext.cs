using Microsoft.EntityFrameworkCore;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DataAccessLayer
{
    public class PMSDbContext:DbContext
    {
        public PMSDbContext(DbContextOptions<PMSDbContext> options) : base(options)
        {

        }
        public DbSet<UserModel> userModels { get; set; }
        public DbSet<AdminModel> adminModels { get; set; }
        public DbSet<PolicyRegistrationModel> policyRegistrationModels { get; set; }
    }
}
