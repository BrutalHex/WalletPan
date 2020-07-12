import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import newXrpWalletReducer from '../Pages/CryptoOPeration/CreateWallet/CreateNewWalletPageReducer';

/*
const rootReducer = combineReducers({
    base:BaseReducer,
    exploreWallet:exploreWalletReducer,
    CreateNewWallet:CreateNewWalletPageReducer,
    
    SendXrp: SendXrpPageReducer

  })
  export default rootReducer
*/

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  genKey: newXrpWalletReducer,
  router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
