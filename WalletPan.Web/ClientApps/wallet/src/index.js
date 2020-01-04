import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import Root from './base/Root';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {initialState,productsReducer} from './base/Ajax/reducer';
import './index.css';
import * as serviceWorker from './serviceWorker';

const middlewares = [thunk];
debugger;
const store = createStore(combineReducers({
    productsReducer
}), initialState, applyMiddleware(...middlewares));



ReactDOM.render(
     
    
        <Root store={store} />
 
   


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
