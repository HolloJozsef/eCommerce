import {createStore, combineReducers, compose,applyMiddleware} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk'
const initialState={};
const reducer= combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const composeEnhancer=compose;
const store=createStore(reducer,initialState, composeEnhancer(applyMiddleware (thunk)));

export default store;