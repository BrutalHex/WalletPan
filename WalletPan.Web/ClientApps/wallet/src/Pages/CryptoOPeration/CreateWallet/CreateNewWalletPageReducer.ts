import { INewXrpWalletAction } from '../../../Types/INewXrpWalletAction';
import { createReducer } from '../../../base/reducerUtils';

const newXrpWallet = (initstate: boolean, action: INewXrpWalletAction): boolean => {
  return action.payload;
};

const newXrpWalletReducer = createReducer(false, {
  New_Xrp_Wallet: newXrpWallet,
});

export default newXrpWalletReducer;
