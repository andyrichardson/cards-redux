import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { ActionButtons } from './ActionButtons';

const mock = {
  reset: jest.fn(),
  shuffle: jest.fn(),
};

beforeEach(() => {
  mock.reset.mockClear();
  mock.shuffle.mockClear();
});

describe('construction', () => {
  it('constructs without error', () => {
    // @ts-ignore
    expect(new ActionButtons()).to.be.an('object');
  });
});

describe('basic render', () => {
  const testRender = TestRenderer.create(
    // @ts-ignore
    <ActionButtons deckStore={mock} />,
  );

  expect(testRender.toJSON()).to.be.an('object');
});

describe('shuffle button calls deckStore', () => {
  const testRender = TestRenderer.create(
    // @ts-ignore
    <ActionButtons deckStore={mock} />,
  );

  const icon = testRender.toJSON().children[0];
  icon.props.onClick();
  expect(mock.shuffle.mock.calls.length).to.equal(1);
});

describe('reset button calls deckStore', () => {
  const testRender = TestRenderer.create(
    // @ts-ignore
    <ActionButtons deckStore={mock} />,
  );

  const icon = testRender.toJSON().children[1];
  icon.props.onClick();
  expect(mock.reset.mock.calls.length).to.equal(1);
});
