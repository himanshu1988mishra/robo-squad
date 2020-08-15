import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './Components/reducers';
import { createLogger } from 'redux-logger';
import App from '../src/Components/App/app';
import './index.css';
import 'tachyons';

const logger = createLogger()

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

