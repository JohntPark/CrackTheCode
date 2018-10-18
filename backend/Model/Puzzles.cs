using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ManPurse
{
    public class Puzzles
    {
        [Key]
        public int puzzles_id { get; set; }

        public string question {get; set;}

        public string answer {get; set;}

        public Puzzles()
        {

        }
    }
}



