import { Component, OnInit } from '@angular/core';
import { Deck } from '../models/deck';

@Component({
  selector: 'app-board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public deck: Deck;
  constructor() {
    this.deck = new Deck();
  }

  ngOnInit() {
  }

}
