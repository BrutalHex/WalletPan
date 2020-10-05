import { createReducer } from '../../../base/reducerUtils';

const sendXrp = (initstate: boolean, action: ISendXrpWalletAction): boolean => {
  return action.payload;
};

const sendXrpWalletReducer = createReducer(false, {
  Xrp_Payment: sendXrp,
});

export default sendXrpWalletReducer;
