import { creatAction, New_Xrp_Wallet } from '../../Types/ActionTypes';
import { WalletThunkResult, WalletTThunkDispatch } from '../../../base/BaseTypes';
import { ActoinTypes } from '../../../Types/ActionTypes';
import { Xrp_Wallet_Info } from '../../../Types/IXrpWalletInfoAction';
import { Xrp_Transaction } from '../../../Types/IWalletTransactionsAction';
import { getRippleAccountInfo, getRippleAccountTransactions } from '../../../base/RippleManagement';

export function GetwalletTransactions(address: string): WalletThunkResult<void> {
  return (dispatch: WalletTThunkDispatch) => {
    getRippleAccountTransactions(address).then((response) => {
      dispatch(creatAction(Xrp_Transaction, response));
    });
  };
}

export function GetAccountInfo(address: string): WalletThunkResult<void> {
  return (dispatch: WalletTThunkDispatch) =>
    getRippleAccountInfo(address).then((response) =>
      dispatch(creatAction(Xrp_Wallet_Info, response))
    );
}
