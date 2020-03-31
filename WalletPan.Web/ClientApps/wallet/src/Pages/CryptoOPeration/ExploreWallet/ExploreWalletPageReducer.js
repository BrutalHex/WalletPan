import {BaseReducer,initialState} from '../../../base/BaseReducer'
import * as  actionType from '../../../base/actionTypes'
import {xrpTransaction,xrpWalletInfo} from './ExploreWalletPageAction';
export function exploreWalletReducer(state=initialState,action)
{

   
        var obj=BaseReducer(state,action);
   
     
           if(action.type.indexOf(actionType.fetchPendingType)>-1)
           {
            return {
               ...obj 
                 
              }
           }

           if(action.type== actionType.fetchSuccessType+'_'+xrpTransaction)
           {
              
            return {
               ...obj ,
               transactionList:action.recievedData
              }
           }


          

           if(action.type== actionType.fetchSuccessType+'_'+xrpWalletInfo)
           {
            
            return {
               ...obj ,
               walletInformation:action.recievedData
              }
           }

    return {
      ...obj
    
        
     }

        


}

export default exploreWalletReducer;