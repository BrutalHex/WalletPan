import { IXrpWalletInfoAction } from '../../../Types/IXrpWalletInfoAction';
import { createReducer } from '../../../base/reducerUtils';
import { IWalletTransactionsAction } from '../../../Types/IWalletTransactionsAction';
import XrpTransaction from './XrpTransaction';
import XrpWalletInformation from './XrpWalletInformation';

const walletInfo = (
  initstate: XrpWalletInformation,
  action: IXrpWalletInfoAction
): XrpWalletInformation => {
  return action.payload;
};

export const walletInfoReducer = createReducer(new XrpWalletInformation(0, 0), {
  Xrp_Wallet_Info: walletInfo,
});

const exploreWallet = (
  initstate: object,
  action: IWalletTransactionsAction
): Array<XrpTransaction> => {
  return action.payload;
};

export const exploreWalletReducer = createReducer<ReturnType<typeof exploreWallet>>([], {
  Xrp_Transaction: exploreWallet,
});
