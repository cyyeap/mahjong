import { Tile } from "./tile";
import { Suit } from "./suit";
import { SuitFlag } from '../enums/suit-flag.enum';
import { NumberFlag } from '../enums/number-flag.enum';
import { TileType } from '../enums/tile-type.enum';
import { Bonus } from './bonus';
import { SpecialTileFlag } from '../enums/special-tile-flag.enum';
import { WindFlag } from '../enums/wind-flag.enum';
import { Wind } from './wind';
import { DragonFlag } from '../enums/dragon-flag.enum';
import { Dragon } from './dragon';

export class Deck {
    allTiles: Array<Tile> = [];


    constructor() {
        this.createNewDeck()
    }

    private createNewDeck() {
        console.log(this.allTiles.length);
        this.createSuits();
        console.log(this.allTiles.length);
        this.createBonuses();
        console.log(this.allTiles.length);
        this.createWinds();
        console.log(this.allTiles.length);
        this.createDragons();
        console.log(this.allTiles.length);
    }

    private appendSameTilesFourTimes(tile: Tile) {
        let tileNo = 0;
        let NUMBER_OF_SAMETYPETILES_IN_DECK = 4;
        for (tileNo = 0; tileNo < NUMBER_OF_SAMETYPETILES_IN_DECK; tileNo++) {
            this.allTiles.push(tile);
        }
    }

    private createSuits() {
        Object.values(SuitFlag).filter(value => !isNaN(Number(value))).forEach(suitFlag => {
            Object.values(NumberFlag).filter(value => !isNaN(Number(value))).forEach(number => {
                let newSuit = new Suit(number, suitFlag);
                this.appendSameTilesFourTimes(newSuit);
            });
        });
    }

    private createBonuses() {
        Object.values(SpecialTileFlag).filter(value => !isNaN(Number(value))).forEach(specialTileFlag => {
            let newBonus = new Bonus(specialTileFlag);
            this.allTiles.push(newBonus);
        });
    }

    private createWinds() {
        Object.values(WindFlag).filter(value => !isNaN(Number(value))).forEach(windFlag => {
            let newWind = new Wind(windFlag);
            this.appendSameTilesFourTimes(newWind);
        });
    }

    private createDragons() {
        Object.values(DragonFlag).filter(value => !isNaN(Number(value))).forEach(dragonFlag => {
            let newDragon = new Dragon(dragonFlag);
            this.appendSameTilesFourTimes(newDragon);
        });
    }
}
