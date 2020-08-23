using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesInvoice.Model
{
    public class DatabaseContext:DbContext
    {
        public DatabaseContext(DbContextOptions options): base(options)
        {

        }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Product> Product { get; set; }
    }
}
