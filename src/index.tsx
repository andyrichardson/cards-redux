import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'typeface-roboto';
import App from './App';
import { DeckReducer } from './reducers';

const store = createStore(DeckReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
