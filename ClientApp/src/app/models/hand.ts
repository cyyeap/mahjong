import { Tile } from "./tile";

export class Hand {
    MAX_NUMBER_OF_TILES: number = 13;
    tiles: Array<Tile> = [];

    getNewTile(newTile: Tile) {
        if (this.tiles.length >= this.MAX_NUMBER_OF_TILES)
        {
            console.log('hand has more than 13 titles');
            return;
        }

        this.tiles.push(newTile);
    }
}
