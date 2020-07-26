import { BaseReducer, initialState } from '../../../base/BaseReducer';
import * as actionType from '../../../base/actionTypes';
import { createReducer } from '../../../base/reducerUtils';

const sendXrp = (initstate: boolean, action: ISendXrpWalletAction): boolean => {
  return action.payload;
};

const sendXrpWalletReducer = createReducer(false, {
  Xrp_Payment: sendXrp,
});

export default sendXrpWalletReducer;
