import { creatAction, New_Xrp_Wallet } from '../../Types/ActionTypes';
import { WalletThunkResult, WalletTThunkDispatch } from '../../../base/BaseTypes';
import { ActoinTypes } from '../../../Types/ActionTypes';

export function NewXrpWallet(): WalletThunkResult<ActoinTypes> {
  return (dispatch: WalletTThunkDispatch) => {
    dispatch(creatAction(New_Xrp_Wallet, false));
    dispatch(creatAction(New_Xrp_Wallet, true));
  };
}
