'use strict';

import { Setting } from '../../../base/settings';
import { submitTransaction } from '../../../base/RippleManagement';
import { WalletThunkDispatch, WalletThunkResult } from '../../../base/BaseTypes';
import { creatAction } from '../../../Types/ActionTypes';
import { Xrp_Payment } from '../../../Types/ISendXrpWalletAction';
import XrpPayment from './XrpPayment';
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({ server: Setting.Ripple });

async function createTransaction(obj: XrpPayment) {
  var amountM = obj.amount.toString();

  let payement = {
    source: {
      address: obj.sourceAddress,
      maxAmount: {
        value: amountM,
        currency: 'XRP',
      },
    },
    destination: {
      address: obj.destWallet,
      tag: obj.destTag,
      amount: {
        value: amountM,
        currency: 'XRP',
      },
    },
  };

  await api.connect();
  const preparedTx = await api.preparePayment(obj.sourceAddress, payement, {
    maxLedgerVersionOffset: 100,
  });

  const response = api.sign(preparedTx.txJSON, obj.privatekey);

  const txBlob = response.signedTransaction;

  return submitTransaction(txBlob);
}

export function SendTransaction(obj: XrpPayment): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) => {
    //  dispatch(fetchApiPending(Xrp_Payment));

    createTransaction(obj).then((response) => {
      return dispatch(creatAction(Xrp_Payment, true));
    });
  };
}
