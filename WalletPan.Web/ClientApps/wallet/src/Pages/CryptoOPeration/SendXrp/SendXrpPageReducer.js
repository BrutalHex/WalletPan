import {BaseReducer,initialState} from '../../../base/BaseReducer'
import * as  actionType from '../../../base/actionTypes'
import {xrpPayment} from './SendXrpPageAction';
export function SendXrpPageReducer(state=initialState,action)
{

   
        var obj=BaseReducer(state,action);
   
     
           if(action.type.indexOf(actionType.fetchPendingType)>-1)
           {
            return {
               ...obj 
                 
              }
           }

           if(action.type== actionType.fetchSuccessType+'_'+xrpPayment)
           {
              
            return {
               ...obj ,
               transactionList:action.recievedData
              }
           }


          

      

    return {
      ...obj
    
        
     }

        


}

export default exploreWalletReducer;