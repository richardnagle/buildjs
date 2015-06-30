export class TeamViewModel{
    constructor(teamJson)
    {
        if (teamJson) {
            
            this.Id = teamJson.Id;
            this.Name = teamJson.Name;
            this.SubTitle = teamJson.SubTitle;
            this.ForegroundColour = teamJson.ForegroundColour;
            this.BackgroundColour = teamJson.BackgroundColour;
            this.IsVisible = teamJson.IsVisible;
        }
    }

    SwapColours(){
        var tmp = this.BackgroundColour;
        this.BackgroundColour = this.ForegroundColour;
        this.ForegroundColour = tmp;
    }
}