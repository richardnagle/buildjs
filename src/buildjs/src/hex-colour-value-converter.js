export class HexColourValueConverter
{
    toView(rgbInt)
    {
        if(rgbInt) {
            return '#'+rgbInt.toString(16);
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