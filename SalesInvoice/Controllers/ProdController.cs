using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SalesInvoice.Model;

namespace SalesInvoice.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProdController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProdController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<Product>> Get()
        {
            return Ok(_context.Product.ToList());
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Product> Get(int id)
        {
            var product = _context.Product.FirstOrDefault(a => a.ProductId == id);
            return Ok(product);
        }

        [HttpPost]
        public ActionResult<Product> post(Product product)
        {
            _context.Product.Add(product);
            _context.SaveChanges();
            return Ok(product);
        }

        [HttpPut]
        public ActionResult<Product> put(Product product)
        {
            var productInDb = _context.Product.FirstOrDefault(a => a.ProductId == product.ProductId);
            productInDb.ProductName = product.ProductName;
            productInDb.UnitPrice = product.UnitPrice;
            productInDb.Description = product.Description;
            _context.SaveChanges();
            return Ok(product);
        }

        [Route("{id}")]
        [HttpDelete]
        public ActionResult<Product> delete(int id)
        {
            var productInDb = _context.Product.FirstOrDefault(a => a.ProductId == id);
            _context.Remove(productInDb);
            _context.SaveChanges();
            return Ok(productInDb);
        }
    }
}
