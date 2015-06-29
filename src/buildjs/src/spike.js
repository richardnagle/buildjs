import S from 'stringjs';

export class Spike {

    constructor(){
        this.colour = '#ffffff';
    }

    get hexOnly(){
        return this.colour.substring(1); 
    }

    get intValue(){
        return Number.parseInt(this.hexOnly, 16);
    }

    get backToHex(){
        var hex=this.intValue.toString(16);
        hex = S(hex).padLeft(6,'0');
        return '#'+hex;
    }
}