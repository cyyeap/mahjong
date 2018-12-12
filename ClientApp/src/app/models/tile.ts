import { Suit } from "./suit";
import { TileType } from '../enums/tile-type.enum';

export class Tile {
    private tileType: TileType;

    constructor(tileType: TileType) {
        this.tileType = tileType;
    }

    getName() {
        return '';
    }

    getTileClass() {
        return '';
    }
}
