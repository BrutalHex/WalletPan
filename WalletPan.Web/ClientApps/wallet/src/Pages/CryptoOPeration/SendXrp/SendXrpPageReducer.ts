import { createReducer } from '../../../base/reducerUtils';
import { ISendXrpWalletAction } from '../../../Types/ISendXrpWalletAction';

const sendXrp = (initstate: boolean, action: ISendXrpWalletAction): boolean => {
  return action.payload;
};

const sendXrpWalletReducer = createReducer(false, {
  Xrp_Payment: sendXrp,
});

export default sendXrpWalletReducer;
