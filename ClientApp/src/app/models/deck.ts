import { Tile } from "./tile";
import { SuitFlag } from "../suit-flag.enum";
import { NumberFlag } from "../number-flag.enum";
import { Suit } from "./suit";

export class Deck {
    allTiles: Array<Tile>;

    constructor() {
        this.createNewDeck()
    }

    createNewDeck() {
        Object.keys(SuitFlag).forEach(suit => {
            Object.keys(NumberFlag).forEach(number => {
                let newSuit = new Suit(<SuitFlag>SuitFlag[suit], <NumberFlag>NumberFlag[number]);
                let newTile = new Tile(newSuit);
                this.allTiles.push(newTile);
            });
        });
    }

    public printDeck() {

    }
}
