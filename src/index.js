import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'state-template';

import 'state-template/dist/style/style.scss';
import './style/style.scss';

import App from './components/App';
import { stage1Reducer, stage1Saga } from './components/Stage1';

const reducers = {
  stage1Reducer,
};

const sagas = [
  stage1Saga,
];

const store = configureStore({ reducers, sagas });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
