import { combineReducers, Reducer } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import newXrpWalletReducer from '../Pages/CryptoOPeration/CreateWallet/CreateNewWalletPageReducer';
import {
  walletInfoReducer,
  exploreWalletReducer,
} from '../Pages/CryptoOPeration/ExploreWallet/ExploreWalletPageReducer';
import sendXrpWalletReducer from '../Pages/CryptoOPeration/SendXrp/SendXrpPageReducer';

import spinnerReducer from '../components/Spinner/spinnerReducer';
import XrpWalletInformation from '../Pages/CryptoOPeration/ExploreWallet/XrpWalletInformation';
import XrpTransaction from '../Pages/CryptoOPeration/ExploreWallet/XrpTransaction';
import { ActoinTypes } from '../Types/ActionTypes';
import { IGeneralAction } from '../Types/IGeneralAction';
import { ActionType } from 'typesafe-actions';

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
/*

 

*/
export type Act = ActionType<ActoinTypes>;

export type RootState1 = {
  genKey: Reducer<boolean>;
  walletInformation: XrpWalletInformation;
  transactionList: Array<XrpTransaction>;
  SentPayments: boolean;
  pending: boolean;
  router: ReturnType<typeof connectRouter>;
};

const rootReducer = combineReducers({
  genKey: newXrpWalletReducer,

  walletInformation: walletInfoReducer,
  transactionList: exploreWalletReducer,
  SentPayments: sendXrpWalletReducer,
  pending: spinnerReducer,

  router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
