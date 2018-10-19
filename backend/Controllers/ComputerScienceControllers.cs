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
    [Route("api/computerscience")]
    [ApiController]
    public class ComputerScienceController : ControllerBase
    {

        private ApiContext _context;

        public ComputerScienceController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.computerscience.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.computerscience.ToList());
        }

         [HttpPost]
        public IActionResult Post ([FromBody]ComputerScience computerscience)
        {
            if(computerscience == null)
            {
                return BadRequest();

            }
            _context.computerscience.Add(computerscience);
            _context.SaveChanges();
            return Ok(computerscience);
        }
    }
}