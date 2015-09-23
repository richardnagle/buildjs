import * as S from 'string';

export class HexColourValueConverter
{
    toView(rgbInt: number)
    {
        if(rgbInt == null){
            return null;
        }
        
        var hex=rgbInt.toString(16);
        hex = S(hex).padLeft(6,'0');
        return '#'+hex;        
    }

    fromView(rgbHexString: string)
    {
        if(rgbHexString == null) {
            return null;
        }

        var hex = rgbHexString.substring(1);
        return Number.parseInt(hex, 16);
    }
}