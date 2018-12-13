import { Tile } from "./tile";

export class Hand {
    MAX_NUMBER_OF_TILES: number = 134
    public tiles: Array<Tile> = [];

    public addNewTile(newTile: Tile) {
        if (this.tiles.length >= this.MAX_NUMBER_OF_TILES) {
            console.log('hand has more than 14 tites');
            return;
        }

        this.tiles.push(newTile);
    }

    public removeTile(position: Tile) {

    }

}
