import { Suit } from "./suit";

export class Tile {
    private suit: Suit;
    private isSuit: boolean = false;

    constructor(suit: Suit) {
        this.suit = suit;
        this.isSuit = true;
    }

    getName() {
        if (this.isSuit) {
            return this.suit.getName();
        }
    }
}
