
import React, { Component } from 'react';
import settings from './settings';
import WebSocketAsPromised from 'websocket-as-promised';





 




export function getRippleAccountTransactions(address)
{
   return baseConnector({

        command: "account_tx",
        account: address,
        ledger_index_min: -1,
        limit:100
    });
}

export function getRippleAccountInfo(address)
{


return baseConnector({

        command: "account_info",
        account: address

    });
  
  
  }



  export  function baseConnector(objectToSend)
{
    const wsp = new WebSocketAsPromised(settings().Ripple,{
        packMessage: data => JSON.stringify(data),
      unpackMessage: message => JSON.parse(message),
      attachRequestId: (data, requestId) => Object.assign({id: requestId}, data), // attach requestId to message as `id` field
      extractRequestId: data => data && data.id,   
        timeout:8000
      });
     
    return  wsp.open()
        .then(() => wsp.sendRequest(objectToSend))
        .then(response   => {
         
               wsp.close();
            return response;
           
       
     
        })
        .catch(e => {return e});
}
 

 






