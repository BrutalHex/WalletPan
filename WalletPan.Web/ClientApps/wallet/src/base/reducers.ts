import { combineReducers } from 'redux';

import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import newXrpWalletReducer from '../Pages/CryptoOPeration/CreateWallet/CreateNewWalletPageReducer';
import SparkWalletReducer from '../Pages/CryptoOPeration/SparkToken/SparkPageReducer';

import {
  walletInfoReducer,
  exploreWalletReducer,
} from '../Pages/CryptoOPeration/ExploreWallet/ExploreWalletPageReducer';
import sendXrpWalletReducer from '../Pages/CryptoOPeration/SendXrp/SendXrpPageReducer';

import spinnerReducer from '../components/Spinner/spinnerReducer';
import XrpWalletInformation from '../Pages/CryptoOPeration/ExploreWallet/XrpWalletInformation';
import XrpTransaction from '../Pages/CryptoOPeration/ExploreWallet/XrpTransaction';
import { ActoinTypes } from '../Types/ActionTypes';
import { ActionType } from 'typesafe-actions';

export const history = createBrowserHistory();

export type Act = ActionType<ActoinTypes>;

export type RootState = {
  genKey: boolean;
  walletInformation: XrpWalletInformation;
  transactionList: Array<XrpTransaction>;
  SentPayments: boolean;
  spark: boolean;
  pending: boolean;
  router: ReturnType<typeof connectRouter>;
};

const rootReducer = combineReducers<RootState, Act>({
  genKey: newXrpWalletReducer as any,

  walletInformation: walletInfoReducer as any,
  transactionList: exploreWalletReducer as any,
  SentPayments: sendXrpWalletReducer as any,
  pending: spinnerReducer as any,
  spark: SparkWalletReducer as any,
  router: connectRouter(history) as any,
});

export default rootReducer;
