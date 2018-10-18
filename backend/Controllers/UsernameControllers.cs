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
    [Route("api/username")]
    [ApiController]
    public class UsernameController : ControllerBase
    {

        private ApiContext _context;

        public UsernameController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.username.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.username.ToList());
        }
    }



}