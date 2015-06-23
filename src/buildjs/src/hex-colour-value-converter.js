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
            return Number.parseInt(rgbHexString, 16);
        }

        return null;
    }
}