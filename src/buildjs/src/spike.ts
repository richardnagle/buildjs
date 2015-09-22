export class Spike {

    constructor(){
        this.buildColours();
    }

    rows: Array<Array<ColourViewModel>>;
    selectedColour: number;

    buildColours(){

        var colourJumpFactor = 4; // needs to be a factor of 16
        var elementCount = 16 / colourJumpFactor;
        var colourJump = 16 * colourJumpFactor;

        var rowCount = elementCount*elementCount;
        var rows = new Array<Array<ColourViewModel>>(rowCount);
                
        for (var b=0;b<elementCount; b++) {
            for (var g=0; g<elementCount; g++){
                var swabs = new Array<ColourViewModel>(elementCount);
            
                for(var r=0; r<elementCount; r++){
                    swabs[r] = new ColourViewModel(r*colourJump,g*colourJump,b*colourJump, this);
                }
            
                rows[(b*elementCount)+g] = swabs;
            }
        }

        this.rows = rows;
        
        this.rows[rowCount-1][elementCount-1]=new ColourViewModel(255,255,255,this);
    }  
}

export class ColourViewModel
{
    value: number;
    parent: Spike;
    
    constructor(r:number, g:number, b:number, parent: Spike){
        this.value = (r*256*256)+(g*256)+b;
        this.parent = parent;
    }

    colourClicked()
    {
        this.parent.selectedColour = this.value;
    }
}