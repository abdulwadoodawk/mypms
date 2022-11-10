using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ProjectAPI.Models
{
    public class UserModel
    {
        //internal static readonly Task<string> userModel;

        //[Required(ErrorMessage = "Enter First Name")]

        public string Fname { get; set; }
        //[Required(ErrorMessage = "Enter Last Name")]
        public string Lname { get; set; }
        //[Required(ErrorMessage = "Enter Date of Birth")]
        public DateTime DOB { get; set; }
        //[Required(ErrorMessage = "Enter Address")]
        public string Address { get; set; }
        //[Required(ErrorMessage = "Enter Contact Name")]
        public string ContactNo { get; set; }
        [Required(ErrorMessage = "Enter Email")]
        [DataType(DataType.EmailAddress)]
        [Key]
        public string Email { get; set; }
        [Required(ErrorMessage = "Enter Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        //[Required(ErrorMessage = "Confirm Password and should match the above password")]
        [DataType(DataType.Password)]
        //[Compare("Password")]
        public string CPassword { get; set; }
        //[Required(ErrorMessage = "Enter Salary")]
        public long Salary { get; set; }
        //[Required(ErrorMessage = "Enter PAN Number")]
        public string PANNo { get; set; }
        //[Required(ErrorMessage = "Enter Employer Type")]
        public string EmployerType { get; set; }
        //[Required(ErrorMessage = "Enter Employer Name")]
        public string Employer { get; set; }

    }
}
