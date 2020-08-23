using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesInvoice.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string UnitPrice { get; set; }
        public string Description { get; set; }
    }
}
