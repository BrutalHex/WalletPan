import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import UniqueRoot from './base/UniqueRoot';

import Root from './base/Root';

import './index.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(UniqueRoot);


ReactDOM.render(
     
    
        <Root store={store} />
 
   


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
