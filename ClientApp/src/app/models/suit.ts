import { NumberFlag } from '../enums/number-flag.enum';
import { SuitFlag } from '../enums/suit-flag.enum';
import { TileType } from '../enums/tile-type.enum';
import { Tile } from './tile';

export class Suit extends Tile {
    number: NumberFlag;
    suitFlag: SuitFlag;

    constructor(number: NumberFlag, suitFlag: SuitFlag) {
        super(TileType.Suit);
        this.number = number;
        this.suitFlag = suitFlag;
    }

    public getName() {
        let fullSuitName = this.getNumberString() + this.getSuitString();
        return fullSuitName;
    }

    public getTileClass() {
        let tile = this.getNumberClass() + '-' + this.getUnicodeClass();
        return tile;
    }

    private getUnicodeClass(): string {
        switch (this.suitFlag) {
            case (SuitFlag.Bamboo): return 'bamboo';
            case (SuitFlag.Character): return 'char';
            case (SuitFlag.Dot): return 'circle';
            default: console.log('unexpected behaviour in getSuitString()' + this.suitFlag + ' and ' + this.number);
        }
    }

    private getSuitString(): string {
        switch (this.suitFlag) {
            case (SuitFlag.Bamboo): return '條';
            case (SuitFlag.Character): return '萬';
            case (SuitFlag.Dot): return '筒';
            default: console.log('unexpected behaviour in getSuitString()' + this.suitFlag + ' and ' + this.number);
        }
    }

    private getNumberString(): string {
        switch (this.number) {
            case (NumberFlag.One): return '一';
            case (NumberFlag.Two): return '二';
            case (NumberFlag.Three): return '三';
            case (NumberFlag.Four): return '四';
            case (NumberFlag.Five): return '五';
            case (NumberFlag.Six): return '六';
            case (NumberFlag.Seven): return '七';
            case (NumberFlag.Eight): return '八';
            case (NumberFlag.Nine): return '九';
            default: console.log('unexpected behaviour in getNumberString()' + this.suitFlag + ' and ' + this.number);
        }
    }

    private getNumberClass(): string {
        return NumberFlag[this.number].toLowerCase();
    }
}

