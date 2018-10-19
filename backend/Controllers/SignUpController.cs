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
    [Route("api/signup")]
    [ApiController]
    public class SignUpController : ControllerBase
    {

        private ApiContext _context;

        public SignUpController(ApiContext context)
        {
            _context = context;
        }


        
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (_context.signup.ToList().Count == 0)
            {
                return NotFound();
            }

            
            return Ok(_context.signup.ToList());
        }
         [HttpPost]
        public IActionResult Post ([FromBody]SignUp signUp)
        {
            if(signUp == null)
            {
                return BadRequest();

            }
            _context.signup.Add(signUp);
            _context.SaveChanges();
            return Ok(signUp);
        }
    }



}