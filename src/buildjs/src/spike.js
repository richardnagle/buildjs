export class Spike {

    constructor(){
        this.selectedColour = this.makeColour(8,8,8);

        this.rows = new Array(16*16);
                
        for (var b=0;b<16; b++) {
            for (var g=0; g<16; g++){
                var swabs = new Array(16);
            
                for(var r=0; r<16; r++){
                    var c = this.makeColour(r*16,g*16,b*16);
                    swabs[r] = new ColourViewModel(c, this);
                }
            
                this.rows[(b*16)+g] = swabs;
            }
        }
    }

    makeColour(r,g,b)
    {
        return (r*256*256)+(g*256)+b;
    }
}

export class ColourViewModel
{
    constructor(c, parent){
        this.value = c;
        this.parent = parent;
    }

    colourClicked()
    {
        this.parent.selectedColour = this.value;
    }
}