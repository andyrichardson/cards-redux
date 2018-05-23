import { expect } from 'chai';
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
