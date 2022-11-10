using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace ProjectAPI.Models
{
    public class AdminModel
    {
        //[Required(ErrorMessage ="Enter email")]
        [Key]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        //[Required(ErrorMessage ="Enter Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        //[Required(ErrorMessage ="Enter Password and should be same as above password")]
        [DataType(DataType.Password)]
        //[Compare("Password")]
        public string ConfirmPass { get; set; }

    }
}
