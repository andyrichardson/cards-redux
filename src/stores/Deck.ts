import { action, computed, observable } from 'mobx';

export class DeckStore {
  @observable private pDeck: any[] = [];
  @observable private pTable: any[] = [];

  constructor() {
    this.createDeck();
  }

  @computed
  public get deck() {
    return this.pDeck;
  }

  @computed
  public get table() {
    return this.pTable;
  }

  @action
  public draw() {
    const card = this.pDeck.pop();
    this.pTable.push(card);
  }

  @action
  public reset() {
    this.pDeck = [...this.pDeck, ...this.pTable];
    this.pTable = [];
  }

  @action
  public shuffle() {
    const deck = [];
    const hat = this.pDeck.slice(0);

    while (hat.length > 0) {
      const index = Math.round(Math.random() * (hat.length - 1));
      deck.push(hat.splice(index, 1)[0]);
    }

    this.pDeck = deck;
  }

  @action
  private createDeck() {
    const suits = ['heart', 'spade', 'diamond', 'club'];

    suits.forEach(suit => {
      const cards = this.createSuitCards(suit);
      this.pDeck = [...this.pDeck, ...cards];
    });
  }

  private createSuitCards(suit: string) {
    const ranks = [
      'ace',
      'king',
      'queen',
      'jack',
      ...Array.from({ length: 9 }, (v, k) => k + 2),
    ];

    return ranks.map(rank => ({ suit, rank }));
  }
}
