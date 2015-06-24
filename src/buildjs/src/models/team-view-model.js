export class TeamViewModel{
    constructor(teamJson)
    {
        if (teamJson) {
            
            this.Id = teamJson.Id;
            this.Name = teamJson.Name;
            this.ForegroundColour = teamJson.ForegroundColour;
            this.BackgroundColour = teamJson.BackgroundColour;
            this.IsVisible = teamJson.IsVisible;
        }
    }
}