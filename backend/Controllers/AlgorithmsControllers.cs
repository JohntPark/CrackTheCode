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
    [Route("api/algorithms")]
    [ApiController]
    public class AlgorithmsController : ControllerBase
    {

        private ApiContext _context;

        public AlgorithmsController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.algorithms.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.algorithms.ToList());
        }

         [HttpPost]
        public IActionResult Post ([FromBody]Algorithms algorithms)
        {
            if(algorithms == null)
            {
                return BadRequest();

            }
            _context.algorithms.Add(algorithms);
            _context.SaveChanges();
            return Ok(algorithms);
        }
    }
}