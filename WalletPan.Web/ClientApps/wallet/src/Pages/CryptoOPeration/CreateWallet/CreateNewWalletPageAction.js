 
import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../../base/BaseApiAction';
 



export const newXrpWallet = 'newXrpWallet';



export  function  generateKeys() {
    

  return dispatch => {

        dispatch(fetchApiSuccess(newXrpWallet,{GenKey:false}));
        dispatch(fetchApiSuccess(newXrpWallet,{GenKey:true}));

   

  }
}



 


         
     
    


 