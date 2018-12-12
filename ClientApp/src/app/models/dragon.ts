import { TileType } from '../enums/tile-type.enum';
import { Tile } from './tile';
import { DragonFlag } from '../enums/dragon-flag.enum';

export class Dragon extends Tile {
    private dragonFlag: DragonFlag;

    constructor(dragonFlag: DragonFlag) {
        super(TileType.Dragon);
        this.dragonFlag = dragonFlag;
    }

    public getName() {
        return '';
    }

    public getTileClass() {
        return '';
    }
}
