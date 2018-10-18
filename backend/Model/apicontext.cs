using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ManPurse
{
    public class ApiContext: DbContext
    {
        public DbSet<Username> username { get; set; }

        public DbSet<Puzzles> puzzles { get; set; }
        public DbSet<ComputerScience> computerscience { get; set; }
        public DbSet<Algorithms> algorithms { get; set; }
        public DbSet<Designs> designs { get; set; }

        

        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }
    }
}