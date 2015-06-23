using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using buildjs.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace buildjs.Controllers
{
    [Route("[controller]")]
    public class TeamController : Controller
    {
        private static readonly TeamRepo teamRepo = new TeamRepo();

        // GET: api/values
        [HttpGet]
        public IEnumerable<Team> Get()
        {
            return teamRepo.All();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Team Get(int id)
        {
            return teamRepo.ById(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Team team)
        {
            teamRepo.Add(team);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
