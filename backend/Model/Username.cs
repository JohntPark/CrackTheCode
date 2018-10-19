using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace ManPurse
{
    public class Username
    {
        [Key]
        public int name_id { get; set; }
        public string name { get; set; }
        public string password { get; set;}

        public string email { get; set; }
        public string confirmpassword { get; set;}

        public Username()
        {

        }
    }


}