'use strict';
import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../../base/BaseApiAction';
import {settings} from '../../../base/settings';
import {submitTransaction} from '../../../base/RippleManagement';

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI(

  {server:settings().Ripple}

);

export const xrpPayment = 'SendXrp';

 
export  function  sendTransaction(obj) {
    

  return dispatch => {

        dispatch(fetchApiPending(xrpPayment));
        
        createTransaction(obj).then(response=>{
         //debugger;
         //console.log("Tentative result code:", response.result.resultCode);
         //console.log("Tentative result message:", response.result.resultMessage);
         
      
          dispatch(fetchApiSuccess(xrpPayment,response));    
        
     });



 

  }



}


async function  createTransaction(obj)
{

 

var amountM= (obj.amount).toString();

 
//"tag":obj.destTag,

  var payement={
   
source: {
address: obj.sourceAddress,
maxAmount: {
value: amountM,
currency: "XRP"
}
},
destination: {

address: obj.destWallet,
amount: {
value: amountM,
currency: "XRP"
}
}
};
debugger;
if( obj.destTag != 0)
{
  payement.destination.tag= obj.destTag;
}
 
await api.connect();
const preparedTx =await api.preparePayment( obj.sourceAddress,
payement
, {
"maxLedgerVersionOffset": 100

} 
);

 

const response =api.sign(preparedTx.txJSON, obj.privatekey);
const txID = response.id;
const txBlob = response.signedTransaction;
debugger;
// go for socket
debugger;
 return submitTransaction(txBlob) ;



  

};

 


         
     
    


 