export class Spike {

    constructor(){
        this.selectedColour = 0;
        this.buildColours();
    }


    buildColours(){

        var colourJumpFactor = 4; // needs to be a factor of 16
        var elementCount = 16 / colourJumpFactor;
        var colourJump = 16 * colourJumpFactor;

        var rows = new Array(elementCount*elementCount);
                
        for (var b=0;b<elementCount; b++) {
            for (var g=0; g<elementCount; g++){
                var swabs = new Array(elementCount);
            
                for(var r=0; r<elementCount; r++){
                    swabs[r] = new ColourViewModel(r*colourJump,g*colourJump,b*colourJump, this);
                }
            
                rows[(b*elementCount)+g] = swabs;
            }
        }

        this.rows = rows;
    }  
}

export class ColourViewModel
{
    constructor(r,g,b,parent){
        this.value = (r*256*256)+(g*256)+b;
        this.parent = parent;
    }

    colourClicked()
    {
        this.parent.selectedColour = this.value;
    }
}