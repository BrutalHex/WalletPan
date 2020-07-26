'use strict';
import { creatAction } from '../../Types/ActionTypes';
import { WalletThunkResult, WalletTThunkDispatch } from '../../../base/BaseTypes';
import { ActoinTypes } from '../../../Types/ActionTypes';
import { settings } from '../../../base/settings';
import { submitTransaction } from '../../../base/RippleManagement';

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({ server: settings().Ripple });

export function SendTransaction(obj): WalletThunkResult<ActoinTypes> {
  return (dispatch: WalletTThunkDispatch) => {
    //  dispatch(fetchApiPending(Xrp_Payment));
    createTransaction(obj).then((response) => {
      return dispatch(creatAction(Xrp_Payment, true));
    });
  };
}

async function createTransaction(obj) {
  var amountM = obj.amount.toString();

  //"tag":obj.destTag,

  var payement = {
    source: {
      address: obj.sourceAddress,
      maxAmount: {
        value: amountM,
        currency: 'XRP',
      },
    },
    destination: {
      address: obj.destWallet,
      amount: {
        value: amountM,
        currency: 'XRP',
      },
    },
  };
  debugger;
  if (obj.destTag != 0) {
    payement.destination.tag = obj.destTag;
  }

  await api.connect();
  const preparedTx = await api.preparePayment(obj.sourceAddress, payement, {
    maxLedgerVersionOffset: 100,
  });

  const response = api.sign(preparedTx.txJSON, obj.privatekey);
  const txID = response.id;
  const txBlob = response.signedTransaction;
  debugger;
  // go for socket
  debugger;
  return submitTransaction(txBlob);
}
