'use strict';

import { Setting } from '../../../base/settings';
import { submitTransaction } from '../../../base/RippleManagement';
import { WalletThunkDispatch, WalletThunkResult } from '../../../base/BaseTypes';
import { creatAction } from '../../../Types/ActionTypes';
import { Xrp_spark_reg } from '../../../Types/ISparkWalletAction';
import SparkMessage from './SparkMessage';
import { push } from 'connected-react-router';
import { Spinner_Change } from '../../../Types/ISpinnerChangeAction';

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({ server: Setting.Ripple });

async function createTransaction(obj: SparkMessage) {
  let messageToSend = {
    TransactionType: 'AccountSet',
    Account: obj.sourceAddress,
    Fee: '12',
    MessageKey: getMessage(obj.ethWallet).toUpperCase(),
  };

  await api.connect();

  var res = await api.prepareTransaction(messageToSend);

  const response = await api.sign(res.txJSON, obj.privatekey);

  const txBlob = response.signedTransaction;

  ConnectAndSend(txBlob);
  // return await submitTransaction(txBlob);
}

function ConnectAndSend(txBlob: any) {
  const socket = new WebSocket(Setting.Ripple);

  socket.addEventListener('open', (event: any) => {
    const command = {
      id: '1000',
      command: 'submit',
      tx_blob: txBlob,
    };
    socket.send(JSON.stringify(command));
  });

  socket.addEventListener('message', (event: any) => {
    socket.close();
  });
  socket.addEventListener('close', (event: any) => {});
}

function getMessage(ethwallet: string): string {
  return `02000000000000000000000000${ethwallet.replace('0x', '')}`;
}

export function SendTransaction(obj: SparkMessage): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) => {
    dispatch(creatAction(Spinner_Change, true));

    createTransaction(obj);
  };
}
/*
export function SendTransaction(obj: SparkMessage): WalletThunkResult<void> {
  return async (dispatch: WalletThunkDispatch) => {
    dispatch(creatAction(Spinner_Change, true));
    dispatch(creatAction(Xrp_spark_reg, false));

    await createTransaction(obj).then((response) => {
      //time out happens but the send will be done
      //  dispatch(push(`/pokemon/${selectedPokemon.name}`));
      dispatch(creatAction(Spinner_Change, true));
      dispatch(creatAction(Xrp_spark_reg, true));
    });
  };
}*/
