import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { ActionButtons } from './ActionButtons';

const mock = {
  reset: jest.fn(),
  shuffle: jest.fn(),
  sortTable: jest.fn(),
  table: [] as any,
};

beforeEach(() => {
  mock.reset.mockClear();
  mock.shuffle.mockClear();
  mock.sortTable.mockClear();
});

describe('creation', () => {
  it('constructs', () => {
    // @ts-ignore
    expect(new ActionButtons()).to.be.an('object');
  });

  it('renders', () => {
    const testRender = TestRenderer.create(
      // @ts-ignore
      <ActionButtons deckStore={mock} />,
    );

    expect(testRender.toJSON()).to.be.an('object');
  });
});

describe('shuffle', () => {
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    testRender = TestRenderer.create(
      // @ts-ignore
      <ActionButtons deckStore={mock} />,
    );
  });

  it('creates button', () => {
    const icon = testRender.toJSON().children[0];
    expect(icon.type).to.equal('img');
  });

  it('shuffles when clicked', () => {
    const icon = testRender.toJSON().children[0];
    icon.props.onClick();
    expect(mock.shuffle.mock.calls.length).to.equal(1);
  });
});

describe('reset', () => {
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    testRender = TestRenderer.create(
      // @ts-ignore
      <ActionButtons deckStore={mock} />,
    );
  });
  it('creates button', () => {
    const icon = testRender.toJSON().children[1];
    expect(icon.type).to.equal('img');
  });

  it('resets on click', () => {
    const icon = testRender.toJSON().children[1];
    icon.props.onClick();
    expect(mock.reset.mock.calls.length).to.equal(1);
  });
});

describe('sort', () => {
  let testRender: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    testRender = TestRenderer.create(
      // @ts-ignore
      <ActionButtons deckStore={mock} />,
    );
  });

  it('creates button', () => {
    const icon = testRender.toJSON().children[2];
    expect(icon.type).to.equal('img');
  });

  it('does not shuffle on click with 0 table cards', () => {
    const icon = testRender.toJSON().children[2];
    icon.props.onClick();
    expect(mock.sortTable.mock.calls.length).to.equal(0);
  });

  it('shuffles on click when 2 table cards present', () => {
    mock.table = ['', ''];
    const icon = testRender.toJSON().children[2];
    icon.props.onClick();
    expect(mock.sortTable.mock.calls.length).to.equal(1);
  });
});
