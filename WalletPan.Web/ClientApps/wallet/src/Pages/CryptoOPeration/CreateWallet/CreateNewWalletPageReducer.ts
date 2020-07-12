import { BaseReducer, initialState } from '../../../base/BaseReducer';
import * as actionType from '../../../base/actionTypes';
import { INewXrpWalletAction } from '../../../Types/INewXrpWalletAction';

const newXrpWallet = (initstate: boolean, action: INewXrpWalletAction): boolean => {
  return action.payload;
};

const newXrpWalletReducer = createReducer(false, {
  New_Xrp_Wallet: newXrpWallet,
});

export default newXrpWalletReducer;
