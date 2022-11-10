using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAPI.Models
{
    public class PolicyRegistrationModel
    {
       // [Required(ErrorMessage = "Enter ")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        
        public int PolicyId { get; set; }
        [Required(ErrorMessage = "Enter Policy Name")]
        public string PolicyName { get; set; }
        [Required(ErrorMessage = "Enter Start Date")]
        public DateTime StartDate { get; set; }
        [Required(ErrorMessage = "Enter Duration")]
        public int Duration { get; set; }
        [Required(ErrorMessage = "Enter Company Name")]
        public string CompanyName { get; set; }
        [Required(ErrorMessage = "Enter Initial Deposit Amount")]
        public double InitialDeposit { get; set; }
        [Required(ErrorMessage = "Enter Policy Type")]
        public string PolicyType { get; set; }
        [Required(ErrorMessage = "Enter User Types")]
        public string UserTypes { get; set; }
        [Required(ErrorMessage = "Enter Policy Term in years")]
        public int Term { get; set; }
        [Required(ErrorMessage = "Enter Term Amount")]
        public double TermAmount { get; set; }
        [Required(ErrorMessage = "Enter Interest Rate")]
        public double Interest { get; set; }
        public double MaturityAmount { get; set; }
        public DateTime EndDate { get; set; }

    }


    }

