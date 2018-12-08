import { Tile } from "./tile";
import { SuitFlag } from "../suit-flag.enum";
import { NumberFlag } from "../number-flag.enum";
import { Suit } from "./suit";

export class Deck {
    allTiles: Array<Tile> = [];

    constructor() {
        this.createNewDeck()
    }

    createNewDeck() {
        Object.values(SuitFlag).filter(value => !isNaN(Number(value))).forEach(suit => {
            Object.values(NumberFlag).filter(value => !isNaN(Number(value))).forEach(number => {
                let newSuit = new Suit(suit, number);
                let newTile = new Tile(newSuit);
                this.allTiles.push(newTile);
            });
        });
    }

    public printDeck() {

    }
}
