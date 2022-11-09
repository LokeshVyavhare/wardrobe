import {authReducer} from './Auth/authReducer'
import {cartReducer} from './Cart/cartReducer'
import {productReducer} from './Product/productReducer'
import { legacy_createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product : productReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));