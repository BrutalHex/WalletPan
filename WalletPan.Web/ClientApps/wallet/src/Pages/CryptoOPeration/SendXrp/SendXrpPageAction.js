'use strict';
import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../../base/BaseApiAction';
import {getApiUrl} from '../../../base/settings';
import {getRippleAccountTransactions,getRippleAccountInfo} from '../../../base/RippleManagement';

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();

export const xrpPayment = 'SendXrp';

 
export  function  sendTransaction(obj) {
    

  return dispatch => {

        dispatch(fetchApiPending(xrpPayment));

        createTransaction(obj).then(response=>{
         debugger;
          dispatch(fetchApiSuccess(xrpPayment,response));    
        
     });



 

  }



}


async function  createTransaction(obj)
{


  var payement= {
    "TransactionType": "Payment",
    "Account": obj.privatekey,
    "Amount": obj.amount*(1000000),
    "Destination": obj.destWallet,

  };

var amountM=api.xrpToDrops(obj.amount);

  var payement={
    "TransactionType": "Payment",
"source": {
"address": obj.sourceAddress,
"maxAmount": {
"value": amountM,
"currency": "XRP"
}
},
"destination": {
"tag":obj.destTag,
"address": obj.destWallet,
"amount": {
"value": amountM,
"currency": "XRP"
}
}
};

const preparedTx =await api.prepareTransaction( 
payement
, {
"maxLedgerVersionOffset": 100
});

var txJSON=JSON.stringify(preparedTx.txJSON);

const response =api.sign(txJSON, obj.privatekey);
const txID = response.id;
const txBlob = response.signedTransaction;

// go for socket
const result = await api.submit(txBlob);

console.log("Tentative result code:", result.resultCode);
console.log("Tentative result message:", result.resultMessage);

  return result;

};

 


         
     
    


 