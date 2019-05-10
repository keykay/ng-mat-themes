import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  suits = {
    clubs: '\u2663',
    diamonds: '\u2666',
    hearts: '\u2665',
    spades: '\u2660'
  };

  cardSuits = [
    'clubs', 'diamonds', 'hearts', 'spades'
  ];

  cardNumbers = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
  ];

  cardNumber: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
  cardSuit: 'clubs' | 'diamonds' | 'hearts' | 'spades';

  get cardSuitIcon() {
    return this.suits[this.cardSuit];
  }
  constructor() {
    this.cardNumber = '1';
    this.cardSuit = 'clubs';
  }

  ngOnInit() {
  }
}
