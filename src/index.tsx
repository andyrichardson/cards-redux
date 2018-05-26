import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
