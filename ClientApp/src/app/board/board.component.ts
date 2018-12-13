import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck';
import { Hand } from '../models/hand';

@Component({
  selector: 'app-board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public deck: Deck;
  public hand: Hand;
  constructor() {
    this.deck = new Deck();
    this.hand = new Hand();
    this.dealCardsToHand();
  }

  private dealCardsToHand() {
    for (var index = 0; index < 13; index++) {
      this.hand.addNewTile(this.deck.dealTile());
    }
  }

  ngOnInit() {
  }

}
