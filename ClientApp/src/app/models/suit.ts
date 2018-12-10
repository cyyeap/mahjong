import { SuitFlag } from "../suit-flag.enum";
import { NumberFlag } from "../number-flag.enum";

export class Suit {
    number: NumberFlag;
    suitFlag: SuitFlag;

    constructor(suitFlag: SuitFlag, number: NumberFlag) {
        this.number = number;
        this.suitFlag = suitFlag;
    }

    private getSuitClass(): string {
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

    public getName() {
        let fullSuitName = this.getNumberString() + this.getSuitString();
        return fullSuitName;
    }

    private getNumberClass(): string {
        return NumberFlag[this.number].toLowerCase();
    }

    public getTileClass() {
        let tile = this.getNumberClass() + '-' + this.getSuitClass();
        return tile;
    }
}

