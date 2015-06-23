export class TeamViewModel{

    Id: Number;
    Name: String;
    ForegroundColour: Number;
    BackgroundColour: Number;
    IsVisible: Boolean;

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