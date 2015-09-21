import S from 'stringjs';

export class HexColourValueConverter
{
    toView(rgbInt)
    {
        if(rgbInt == null){
            return null;
        }
        
        var hex=rgbInt.toString(16);
        hex = S(hex).padLeft(6,'0');
        return '#'+hex;        
    }

    fromView(rgbHexString)
    {
        if(rgbHexString == null) {
            return null;
        }

        var hex = rgbHexString.substring(1);
        return Number.parseInt(hex, 16);
    }
}