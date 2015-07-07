export class Spike {

    constructor(){
        this.rows = new Array(16*16);
                
        for (var b=0;b<16; b++) {
            for (var g=0; g<16; g++){
                var swabs = new Array(16);
            
                for(var r=0; r<16; r++){
                    swabs[r] = (r*256*256*16)+(g*256*16)+(b*16);
                }
            
                this.rows[(b*16)+g] = swabs;
            }
        }
    }
}