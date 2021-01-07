import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { weatherReducer } from './reducers/weatherReducer';

const reducer = combineReducers({ weather: weatherReducer });

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
