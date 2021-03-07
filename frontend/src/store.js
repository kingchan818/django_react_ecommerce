import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers

import { productReducer } from './reducer/productReducer';
import { productDetialReducer } from './reducer/productDetial';
const reducer = combineReducers({
    productList: productReducer,
    productDetial: productDetialReducer,
});

const initialState = {};

const middelWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelWare)));

export default store;
