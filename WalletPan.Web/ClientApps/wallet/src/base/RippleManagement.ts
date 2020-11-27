import Setting from './settings';
import WebSocketAsPromised from 'websocket-as-promised';

export function submitTransaction(blob: any) {
  return baseConnector({
    id: '1000',
    command: 'submit',
    tx_blob: blob,
  });
}
export function directSubmitTransaction(blob: any) {
  return baseConnector(blob);
}
export async function getRippleAccountTransactions(address: string) {
  return baseConnector({
    command: 'account_tx',
    account: address,
    ledger_index_min: -1,
    limit: 100,
  });
}

export function getRippleAccountInfo(address: string) {
  return baseConnector({
    command: 'account_info',
    account: address,
  });
}

export function baseConnector(objectToSend: any) {
  let wsp: WebSocketAsPromised = new WebSocketAsPromised(Setting.Ripple, {
    packMessage: (data) => JSON.stringify(data),
    unpackMessage: (message: string | ArrayBuffer | Blob): any =>
      JSON.parse(message as string) as object,
    attachRequestId: (data, requestId) => Object.assign({ id: requestId }, data), // attach requestId to message as `id` field
    extractRequestId: (data) => data && data.id,
    timeout: 12000,
  });

  return wsp
    .open()
    .then(() => wsp.sendRequest(objectToSend))
    .then((response) => {
      wsp.close();
      return response;
    })
    .catch((e) => {
      return e;
    });
}
