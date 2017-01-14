import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import template from './template';
import reducers from './app/reducers';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const store = createStore(reducers);
  const initialState = store.getState();
  const appString = renderToString(
    <Provider store={store}>
      <App state={initialState} />
    </Provider>
  );

  res.send(template({
    body: appString,
    title: 'Hello world from the server',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8080);
