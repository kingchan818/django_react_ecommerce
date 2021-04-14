import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers

import { productReducer } from './reducer/productReducer';
import { productDetialReducer } from './reducer/productDetial';
import { cartReducer } from './reducer/cartReducer';
const reducer = combineReducers({
    productList: productReducer,
    productDetial: productDetialReducer,
    cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
};

const middelWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelWare)));

export default store;
