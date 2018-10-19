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
    [Route("api/designs")]
    [ApiController]
    public class DesignsController : ControllerBase
    {

        private ApiContext _context;

        public DesignsController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.designs.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.designs.ToList());
        }

         [HttpPost]
        public IActionResult Post ([FromBody]Designs designs)
        {
            if(designs == null)
            {
                return BadRequest();

            }
            _context.designs.Add(designs);
            _context.SaveChanges();
            return Ok(designs);
        }
    }
}



