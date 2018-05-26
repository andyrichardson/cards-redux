import { action, computed, observable } from 'mobx';
import { Rank, Suit } from '../typings';

interface CardEntry {
  suit: Suit;
  rank: Rank;
}

export class DeckStore {
  @observable private pDeck: CardEntry[] = [];
  @observable private pTable: CardEntry[] = [];

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
    if (this.pDeck.length > 0) {
      const card = this.pDeck.pop() as CardEntry;
      this.pTable.push(card);
    }
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
  public sortTable() {
    this.pTable = this.pTable.sort((a, b) => {
      if (a.suit !== b.suit) {
        return this.getSuitIndex(b.suit) - this.getSuitIndex(a.suit);
      }

      return this.getRankIndex(b.rank) - this.getRankIndex(a.rank);
    });
  }

  @action
  private createDeck() {
    for (const suit in Suit) {
      // tslint:disable-next-line
      const cards = this.createSuitCards(Suit[suit] as Suit);
      this.pDeck = [...this.pDeck, ...cards];
    }
  }

  private createSuitCards(suit: Suit) {
    const ranks = [];

    for (const rank in Rank) {
      // tslint:disable-next-line
      ranks.push({ suit, rank: Rank[rank] as Rank });
    }

    return ranks;
  }

  private getRankIndex(rank: Rank) {
    const pictureRank = [Rank.JACK, Rank.QUEEN, Rank.KING, Rank.ACE];

    if (isNaN(parseInt(rank))) {
      return pictureRank.indexOf(rank) + 11;
    }

    return parseInt(rank);
  }

  private getSuitIndex(suit: Suit) {
    const suitOrder = [Suit.DIAMOND, Suit.HEART, Suit.SPADE, Suit.CLUB];
    return suitOrder.indexOf(suit);
  }
}
