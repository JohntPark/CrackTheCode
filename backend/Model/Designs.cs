using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManPurse
{
    public class Designs
    {
        [Key]
        public int designs_id { get; set; }

        public string question {get; set;}

        public string answer {get; set;}

        public Designs()
        {
            
        }
    }
}