using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManPurse
{
    public class Algorithms
    {
        [Key]
        public int algorithms_id { get; set; }
        public string question {get; set;}

        public string answer {get; set;}

        public Algorithms()
        {
            
        }
    }
}