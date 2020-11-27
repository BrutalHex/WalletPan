'use strict';

import { Setting } from '../../../base/settings';
import { submitTransaction } from '../../../base/RippleManagement';
import { WalletThunkDispatch, WalletThunkResult } from '../../../base/BaseTypes';
import { creatAction } from '../../../Types/ActionTypes';
import { Xrp_Payment } from '../../../Types/ISendXrpWalletAction';
import XrpPayment from './XrpPayment';
import { fetchApiPending } from '../../../base/BaseApiAction';
import { Spinner_Change } from '../../../Types/ISpinnerChangeAction';
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({ server: Setting.Ripple });

async function createTransaction(obj: XrpPayment) {
  let dropsValue = (obj.amount * 1000000).toString();

  let payement: { [k: string]: any } = {};

  payement = {
    source: {
      address: obj.sourceAddress,
      maxAmount: {
        currency: 'drops',
        value: dropsValue,
      },
    },
    destination: {
      address: obj.destWallet,
      amount: {
        currency: 'drops',
        value: dropsValue,
      },
    },
  };

  if (obj.destTag != 0 && obj.destTag != null) {
    payement.destination.tag = obj.destTag;
  }

  await api.connect();
  const preparedTx = await api.preparePayment(obj.sourceAddress, payement, {
    maxLedgerVersionOffset: 100,
  });

  const response = await api.sign(preparedTx.txJSON, obj.privatekey);
  //preparedTx.id;
  const txBlob = response.signedTransaction;

  return await submitTransaction(txBlob);
}

export function SendTransaction(obj: XrpPayment): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) => {
    dispatch(creatAction(Spinner_Change, false));

    createTransaction(obj).then((response) => {
      //time out happens but the send will be done
      debugger;
      dispatch(creatAction(Spinner_Change, true));
      dispatch(creatAction(Xrp_Payment, true));
    });
  };
}
