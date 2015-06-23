using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace buildjs.Controllers
{
    public class Response
    {
        public Response()
        {
            ServerTime = DateTime.Now.ToString();
        }
        public string ServerTime { get; private set; }
    }

    [Route("[controller]")]
    public class ServerTimeController : Controller
    {
        // GET: api/values
        [HttpGet]
        public Response Get()
        {
            return new Response();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
