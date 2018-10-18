using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManPurse
{
    public class ComputerScience
    {
        [Key]
        public int computerscience_id { get; set; }
        public string question {get; set;}

        public string answer {get; set;}


        public ComputerScience()
        {
            
        }
    }
}


 