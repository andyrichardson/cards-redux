import { expect } from 'chai';
import { Rank, Suit } from '../typings';
import { DeckStore } from './Deck';

describe('construction', () => {
  it('constructs', () => {
    expect(new DeckStore()).to.be.an('object');
  });

  it('creates a 52 card deck on construction', () => {
    const deckStore = new DeckStore();
    expect(deckStore.deck.length).to.equal(52);
  });

  it('starts without any cards on table', () => {
    const deckStore = new DeckStore();
    expect(deckStore.table.length).to.equal(0);
  });

  it('creates a unique deck', () => {
    const deckStore = new DeckStore();
    const uniques = new Set(deckStore.deck);
    expect(uniques.size).to.equal(52);
  });
});

describe('draw', () => {
  let deckStore: DeckStore;

  beforeEach(() => {
    deckStore = new DeckStore();
  });

  it('reduces deck size by one', () => {
    deckStore.draw();
    expect(deckStore.deck.length).to.equal(51);
  });

  it('adds a card to table', () => {
    deckStore.draw();
  });

  it('wont contain table cards in deck', () => {
    Array.from({ length: 3 }, () => deckStore.draw());
    expect(deckStore.deck).to.not.contain(deckStore.table);
  });
});

describe('reset', () => {
  let deckStore: DeckStore;

  beforeEach(() => {
    deckStore = new DeckStore();
    Array.from({ length: 3 }, () => deckStore.draw());
  });

  it('removes all cards from table', () => {
    deckStore.reset();
    expect(deckStore.table.length).to.equal(0);
  });

  it('all cards are in deck', () => {
    deckStore.reset();
    expect(deckStore.deck.length).to.equal(52);
  });
});

describe('shuffle', () => {
  let deckStore: DeckStore;

  beforeEach(() => {
    deckStore = new DeckStore();
  });

  it('changes deck order', () => {
    const old = deckStore.deck.splice(0);
    deckStore.shuffle();
    expect(deckStore.deck).to.not.deep.equal(old);
  });

  it('keeps deck size the same', () => {
    deckStore.shuffle();
    expect(deckStore.deck.length).to.equal(52);
  });

  it('keeps deck cards unique', () => {
    deckStore.shuffle();
    const uniques = new Set(deckStore.deck);
    expect(uniques.size).to.equal(52);
  });
});

describe('sort', () => {
  let deckStore: DeckStore;

  beforeEach(() => {
    deckStore = new DeckStore();
  });

  it('sorts deck suits in order Club, Spade, Hearts, Diamond', () => {
    // @ts-ignore
    deckStore.pTable = [
      { suit: Suit.DIAMOND, rank: Rank.ACE },
      { suit: Suit.CLUB, rank: Rank.ACE },
      { suit: Suit.SPADE, rank: Rank.ACE },
      { suit: Suit.HEART, rank: Rank.ACE },
    ];

    deckStore.sortTable();

    const sorted = [
      { suit: Suit.CLUB, rank: Rank.ACE },
      { suit: Suit.SPADE, rank: Rank.ACE },
      { suit: Suit.HEART, rank: Rank.ACE },
      { suit: Suit.DIAMOND, rank: Rank.ACE },
    ];
    expect(deckStore.table).to.deep.equal(sorted);
  });

  it('sorts ranked numbers', () => {
    const suit = Suit.CLUB;
    // @ts-ignore
    deckStore.pTable = [
      { suit, rank: Rank.FIVE },
      { suit, rank: Rank.NINE },
      { suit, rank: Rank.TWO },
      { suit, rank: Rank.EIGHT },
    ];

    deckStore.sortTable();

    const sorted = [
      { suit, rank: Rank.NINE },
      { suit, rank: Rank.EIGHT },
      { suit, rank: Rank.FIVE },
      { suit, rank: Rank.TWO },
    ];
    expect(deckStore.table).to.deep.equal(sorted);
  });

  it('sorts ranked pictures', () => {
    const suit = Suit.CLUB;
    // @ts-ignore
    deckStore.pTable = [
      { suit, rank: Rank.JACK },
      { suit, rank: Rank.KING },
      { suit, rank: Rank.ACE },
      { suit, rank: Rank.QUEEN },
    ];

    deckStore.sortTable();

    const sorted = [
      { suit, rank: Rank.ACE },
      { suit, rank: Rank.KING },
      { suit, rank: Rank.QUEEN },
      { suit, rank: Rank.JACK },
    ];
    expect(deckStore.table).to.deep.equal(sorted);
  });

  it('sorts ranked pictures and numbers', () => {
    const suit = Suit.CLUB;
    // @ts-ignore
    deckStore.pTable = [
      { suit, rank: Rank.TEN },
      { suit, rank: Rank.THREE },
      { suit, rank: Rank.KING },
      { suit, rank: Rank.JACK },
    ];

    deckStore.sortTable();

    const sorted = [
      { suit, rank: Rank.KING },
      { suit, rank: Rank.JACK },
      { suit, rank: Rank.TEN },
      { suit, rank: Rank.THREE },
    ];
    expect(deckStore.table).to.deep.equal(sorted);
  });
});
