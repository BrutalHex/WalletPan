import { creatAction, ActoinTypes } from '../../../Types/ActionTypes';
import { New_Xrp_Wallet } from '../../../Types/INewXrpWalletAction';
import { WalletThunkResult, WalletThunkDispatch } from '../../../base/BaseTypes';

export function NewXrpWallet(): WalletThunkResult<ActoinTypes> {
  return (dispatch: WalletThunkDispatch) => {
    dispatch(creatAction(New_Xrp_Wallet, false));
    return dispatch(creatAction(New_Xrp_Wallet, true));
  };
}
