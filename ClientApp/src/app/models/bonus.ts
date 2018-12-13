import { Tile } from './tile';
import { SpecialTileFlag } from '../enums/special-tile-flag.enum';
import { TileType } from '../enums/tile-type.enum';

export class Bonus extends Tile {
    private specialTileFlag: SpecialTileFlag;

    constructor(specialTileFlag: SpecialTileFlag) {
        super(TileType.Special);
        this.specialTileFlag = specialTileFlag;
    }

    public getName() {
        return '';
    }

    public getTileClass() {
        return SpecialTileFlag[this.specialTileFlag].toString().toLowerCase();
    }
}
