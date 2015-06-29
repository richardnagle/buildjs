import S from 'stringjs';

export class HexColourValueConverter
{
    toView(rgbInt)
    {
        if(rgbInt) {
            console.info('toValue:rgbInt='+rgbInt);
            var hex=rgbInt.toString(16);
            hex = S(hex).padLeft(6,'0');
            var result='#'+hex;
            console.info('toValue:result='+result);
            return result;        
        }

        return null;
    }

    fromView(rgbHexString)
    {
        if(rgbHexString) {
            var hex = rgbHexString.substring(1);
            return Number.parseInt(hex, 16);
        }

        return null;
    }
}