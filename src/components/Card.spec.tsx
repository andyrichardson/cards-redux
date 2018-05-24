import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { ThemeStore } from '../stores';
import { Rank, Suit } from '../typings';
import { Card } from './Card';

describe('construction', () => {
  it('constructs without error', () => {
    // @ts-ignore
    expect(new Card()).to.be.an('object');
  });
});

describe('basic render', () => {
  let themeStore: ThemeStore;
  let suit: Suit;
  let rank: Rank;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    themeStore = new ThemeStore();
    suit = Suit.CLUB;
    rank = Rank.JACK;

    testRender = TestRenderer.create(
      <Card themeStore={themeStore} suit={suit} rank={rank} />,
    );
  });

  it('renders', () => {
    // @ts-ignore
    expect(testRender.toJSON().type).to.equal('div');
  });
});

describe('number render', () => {
  let themeStore: ThemeStore;
  let suit: Suit;
  let rank: Rank;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    themeStore = new ThemeStore();
    suit = Suit.SPADE;
    rank = Rank.FIVE;

    testRender = TestRenderer.create(
      <Card themeStore={themeStore} suit={suit} rank={rank} />,
    );
  });

  it('displays number twice on card', () => {
    const textNodes = testRender.root.findAllByType('text');
    const numbers = textNodes.filter(node => node.children[0] === rank);
    expect(numbers.length).to.be.at.least(2);
  });
});

describe('word render', () => {
  let themeStore: ThemeStore;
  let suit: Suit;
  let rank: Rank;
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    themeStore = new ThemeStore();
    suit = Suit.SPADE;
    rank = Rank.ACE;

    testRender = TestRenderer.create(
      <Card themeStore={themeStore} suit={suit} rank={rank} />,
    );
  });

  it('displays letter twice on card', () => {
    const textNodes = testRender.root.findAllByType('text');
    const numbers = textNodes.filter(node => node.children[0] === rank[0]);
    expect(numbers.length).to.be.at.least(2);
  });
});
