using System.Collections.Generic;
using System.Linq;

namespace buildjs.Model
{
    public class TeamRepo
    {
        private readonly IList<Team> allTeams = new List<Team>
        {
            new Team { Id = 1, Name="Arsenal", SubTitle="The Gunners", BackgroundColour=0xff0000, ForegroundColour=0xffffff  },
            new Team { Id = 2, Name="Preston North End", SubTitle="The Lillywhites", BackgroundColour=0xffffff, ForegroundColour=0x000000 },
            new Team { Id = 3, Name="Southend Utd", SubTitle="Sea, sea, seasiders", BackgroundColour=0x2a3c97, ForegroundColour=0xffffff },
            new Team { Id = 4, Name="Wycombe Wanderers", SubTitle="The Pride of Buckinghamshire", BackgroundColour=0x33bbec, ForegroundColour=0x2a3c97 }
        };

        public IEnumerable<Team> All()
        {
            return allTeams;
        }

        public Team ById(int id)
        {
            return allTeams.FirstOrDefault(team => team.Id == id);
        }
        public void Add(Team newTeam)
        {
            newTeam.Id = allTeams.Max(x => x.Id) + 1;
            allTeams.Add(newTeam);
        }
    }
}
