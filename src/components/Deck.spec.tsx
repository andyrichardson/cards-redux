import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { DeckStore } from '../stores';
import { Deck } from './Deck';

describe('construction', () => {
  it('constructs without error', () => {
    // @ts-ignore
    expect(new Deck()).to.be.an('object');
  });
});

describe('render', () => {
  let deckStore: DeckStore;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    deckStore = new DeckStore();
    testRender = TestRenderer.create(<Deck deckStore={deckStore} />);
  });

  it('renders root image element', () => {
    // @ts-ignore
    expect(testRender.toJSON().type).to.equal('img');
  });
});

describe('interaction', () => {
  let deckStore: DeckStore;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    deckStore = new DeckStore();
    testRender = TestRenderer.create(<Deck deckStore={deckStore} />);
  });

  it('draws card when clicked', () => {
    const initialLength = deckStore.deck.length;

    testRender.toJSON().props.onClick();
    expect(deckStore.deck.length).to.equal(initialLength - 1);
  });
});
