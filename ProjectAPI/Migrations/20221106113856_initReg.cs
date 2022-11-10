using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectAPI.Migrations
{
    public partial class initReg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "adminModels",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    ConfirmPass = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_adminModels", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "policyRegistrationModels",
                columns: table => new
                {
                    PolicyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1000, 1"),
                    PolicyName = table.Column<string>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    Duration = table.Column<int>(nullable: false),
                    CompanyName = table.Column<string>(nullable: false),
                    InitialDeposit = table.Column<double>(nullable: false),
                    PolicyType = table.Column<string>(nullable: false),
                    UserTypes = table.Column<string>(nullable: false),
                    Term = table.Column<int>(nullable: false),
                    TermAmount = table.Column<double>(nullable: false),
                    Interest = table.Column<double>(nullable: false),
                    MaturityAmount = table.Column<double>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_policyRegistrationModels", x => x.PolicyId);
                });

            migrationBuilder.CreateTable(
                name: "userModels",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Fname = table.Column<string>(nullable: false),
                    Lname = table.Column<string>(nullable: false),
                    DOB = table.Column<DateTime>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    ContactNo = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    CPassword = table.Column<string>(nullable: false),
                    Salary = table.Column<long>(nullable: false),
                    PANNo = table.Column<string>(nullable: false),
                    EmployerType = table.Column<string>(nullable: false),
                    Employer = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userModels", x => x.Email);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "adminModels");

            migrationBuilder.DropTable(
                name: "policyRegistrationModels");

            migrationBuilder.DropTable(
                name: "userModels");
        }
    }
}
