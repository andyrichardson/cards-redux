import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const testRender = TestRenderer.create(<App />);
  expect(testRender).to.be.an('object');
});

it('renders deck', () => {
  const testRender = TestRenderer.create(<App />);
  const deck = testRender.root.findAllByType('img')[0];
  expect(deck).to.be.an('object');
});

it('renders cards after deck is clicked', () => {
  const testRender = TestRenderer.create(<App />);
  const deck = testRender.root.findAllByType('img')[0];

  deck.props.onClick();

  const table = testRender.root.findAllByProps({ className: 'table' })[0];
  expect(table.children.length).to.equal(1);
});
