using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ManPurse
{
    [Route("api/puzzles")]
    [ApiController]
    public class PuzzlesController : ControllerBase
    {

        private ApiContext _context;

        public PuzzlesController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.puzzles.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.puzzles.ToList());
        }
    }
}



