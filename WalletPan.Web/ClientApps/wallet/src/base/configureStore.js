import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from './middlewares'

import rootReducer from './reducers'


export default function configureStore(preloadedState) {
  
    const definedMiddlewares = [logger, thunkMiddleware];

  const middlewareEnhancer = ( applyMiddleware(...definedMiddlewares));
 
 
  const store = createStore(rootReducer, middlewareEnhancer);
  return store
}