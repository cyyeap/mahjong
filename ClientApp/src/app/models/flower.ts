import { Tile } from './tile';
import { TileType } from '../enums/tile-type.enum';
import { FlowerFlag } from '../enums/flower-flag.enum';

export class Flower extends Tile {

    private flowerFlag: FlowerFlag;

    constructor(flowerFlag: FlowerFlag) {
        super(TileType.Flower);
        this.flowerFlag = flowerFlag;
    }

    public getName() {
        return '';
    }

    public getTileClass() {
        return '';
    }

}
