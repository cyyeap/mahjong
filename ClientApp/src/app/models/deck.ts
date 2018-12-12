import { Tile } from "./tile";
import { Suit } from "./suit";
import { SuitFlag } from '../enums/suit-flag.enum';
import { NumberFlag } from '../enums/number-flag.enum';

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
                let NUMBEROFTILE_PERSUITNUMBER = 4;
                let tileNo = 0;
                for (tileNo = 0; tileNo < NUMBEROFTILE_PERSUITNUMBER; tileNo++) {
                    this.allTiles.push(newTile);
                }
            });
        });
    }

    public printDeck() {

    }
}
