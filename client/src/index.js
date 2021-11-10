import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './resources/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <style>{'#root {width: 100%} '}</style>
  </Provider>,
  document.getElementById('root')
);
