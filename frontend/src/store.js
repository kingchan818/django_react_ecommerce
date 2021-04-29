import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers

import { productReducer } from './reducer/productReducer';
import { productDetialReducer } from './reducer/productDetial';
import { cartReducer } from './reducer/cartReducer';
import { userLoginReducer } from './reducer/userReducer';
const reducer = combineReducers({
    productList: productReducer,
    productDetial: productDetialReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
};

const middelWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middelWare)));

export default store;
