import { Tile } from './tile';
import { TileType } from '../enums/tile-type.enum';
import { WindFlag } from '../enums/wind-flag.enum';

export class Wind extends Tile {
    private windFlag: WindFlag;
    constructor(windFlag: WindFlag) {
        super(TileType.Wind);
        this.windFlag = windFlag;
    }

    public getName() {
        return '';
    }

    public getTileClass() {
        return '';
    }
}
