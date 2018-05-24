import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const testRender = TestRenderer.create(<App />);
  expect(testRender).to.be.an('object');
});
