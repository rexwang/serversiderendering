import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './index';
import reducers from './reducers';

const initialState = window.__APP_INITIAL_STATE__;
const store = createStore(reducers, initialState);

function run() {
  const state = store.getState();
  console.log(state);
  render(
    <Provider store={store}>
      <App state={state} />
    </Provider>,
    document.getElementById('root')
  );
}

run();
store.subscribe(run);
window.add = () => {
  store.dispatch({ type: 'INCREMENT', data: 1 });
};
window.decrement = () => {
  store.dispatch({ type: 'DECREMENT', data: 2 });
};
