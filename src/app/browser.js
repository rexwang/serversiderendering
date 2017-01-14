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
  render(
    <Provider>
      <App state={state} />
    </Provider>,
    document.getElementById('root')
  );
}

run();
store.subscribe(run);
