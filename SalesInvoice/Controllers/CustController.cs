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
    public class CustController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CustController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Customer>> Get()
        {
            return Ok(_context.Customer.ToList());
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Customer> Get(int id)
        {
            var customer = _context.Customer.FirstOrDefault(a => a.CustomerId == id);
            return Ok(customer);
        }

        [HttpPost]
        public ActionResult<Customer> post(Customer customer)
        {
            _context.Customer.Add(customer);
            _context.SaveChanges();
            return Ok(customer);
        }

        [HttpPut]
        public ActionResult<Customer> put(Customer customer)
        {
            var customerInDb = _context.Customer.FirstOrDefault(a => a.CustomerId == customer.CustomerId);
            customerInDb.CustomerName = customer.CustomerName;
            customerInDb.CustomerEmail = customer.CustomerEmail;
            customerInDb.CustomerContact = customer.CustomerContact;
            customerInDb.CustomerAddress = customer.CustomerAddress;
            _context.SaveChanges();
            return Ok(customer);
        }

        [Route("{id}")] 
        [HttpDelete]
        public ActionResult<Customer> delete(int id)
        {
            var customerInDb = _context.Customer.FirstOrDefault(a => a.CustomerId == id);
            _context.Remove(customerInDb);
            _context.SaveChanges();
            return Ok(customerInDb);
        }
    }
}
