import {authReducer} from './Auth/authReducer'
import { legacy_createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));