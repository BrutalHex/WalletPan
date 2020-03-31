import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../../base/BaseApiAction';
import {postData} from '../../../base/fetchService';
import {getApiUrl} from '../../../base/settings';
import {getRippleAccountTransactions,getRippleAccountInfo} from '../../../base/RippleManagement';

export const xrpTransaction = 'XrpTransaction';

export const xrpWalletInfo = 'XrpWalletInfo';







export  function  getwalletTransactions(obj) {
    

  return dispatch => {

        dispatch(fetchApiPending(xrpTransaction));

    getRippleAccountTransactions(obj.address).then(response=>{
        
      dispatch(fetchApiSuccess(xrpTransaction,response));

    
 });

  }



}

export function getAccountInfo(obj)
 {
 

  return dispatch =>{

    dispatch(fetchApiPending(xrpWalletInfo));

    getRippleAccountInfo(obj.address).then(response=>{
    
        dispatch(fetchApiSuccess(xrpWalletInfo,response));
  
      
   });

  }





 
 }


         
     
    


 