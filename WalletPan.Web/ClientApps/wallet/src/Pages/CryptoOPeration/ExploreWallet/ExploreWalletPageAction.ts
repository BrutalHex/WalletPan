import { WalletThunkResult, WalletThunkDispatch } from '../../../base/BaseTypes';
import { Xrp_Wallet_Info } from '../../../Types/IXrpWalletInfoAction';
import { Xrp_Transaction } from '../../../Types/IWalletTransactionsAction';
import { getRippleAccountInfo, getRippleAccountTransactions } from '../../../base/RippleManagement';
import { creatAction } from '../../../Types/ActionTypes';

export function GetwalletTransactions(address: string): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) => {
    getRippleAccountTransactions(address).then((response) => {
      dispatch(creatAction(Xrp_Transaction, response));
    });
  };
}

export function GetAccountInfo(address: string): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) =>
    getRippleAccountInfo(address).then((response) =>
      dispatch(creatAction(Xrp_Wallet_Info, response))
    );
}
