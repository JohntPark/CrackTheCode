using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManPurse
{
    public class SignUp
    {
        [Key]
        public int SignUp_Id {get; set;}
        public string name {get; set;}
        public string email {get; set;}

        public string password {get; set;}
 
        public string confirmpassword {get; set;}

        public SignUp()
        {
            
        }
    }
}