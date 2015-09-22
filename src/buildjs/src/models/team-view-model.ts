export class TeamViewModel{
    
    id: number;
    name: string;
    subTitle: string;
    foregroundColour: number;
    backgroundColour: number;
    isVisible: boolean;
    
    constructor(teamJson: any)
    {
        if (teamJson) {
            
            this.id = teamJson.Id;
            this.name = teamJson.Name;
            this.subTitle = teamJson.SubTitle;
            this.foregroundColour = teamJson.ForegroundColour;
            this.backgroundColour = teamJson.BackgroundColour;
            this.isVisible = teamJson.IsVisible;
        }
    }

    swapColours(){
        var tmp = this.backgroundColour;
        this.backgroundColour = this.foregroundColour;
        this.foregroundColour = tmp;
    }
}