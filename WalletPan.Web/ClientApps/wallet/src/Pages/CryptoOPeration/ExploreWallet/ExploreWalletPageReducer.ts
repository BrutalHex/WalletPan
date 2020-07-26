import { BaseReducer, initialState } from '../../../base/BaseReducer';
import * as actionType from '../../../base/actionTypes';
import { xrpTransaction, xrpWalletInfo } from './ExploreWalletPageAction';

const walletInfo = (initstate: object, action: IXrpWalletInfoAction): boolean => {
  return action.payload;
};

export const walletInfoReducer = createReducer(null, {
  Xrp_Wallet_Info: walletInfo,
});

const exploreWallet = (initstate: object, action: INewXrpWalletAction): boolean => {
  return action.payload;
};

export const exploreWalletReducer = createReducer(null, {
  Xrp_Transaction: exploreWallet,
});
