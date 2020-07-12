import {BaseReducer,initialState} from '../../../base/BaseReducer'
import * as  actionType from '../../../base/actionTypes'
import {xrpPayment} from './SendXrpPageAction';
export function SendXrpPageReducer(state={...initialState,globalSentCoinCounter:0,
   SentCoins:[]},action)
{

   
        var obj=BaseReducer(state,action);
        


     
           if(action.type.indexOf(actionType.fetchPendingType)>-1)
           {
            return {
               ...obj ,
               globalSentCoinCounter:obj.globalSentCoinCounter+1
              }
           }

           if(action.type== actionType.fetchSuccessType+'_'+xrpPayment)
           { 

              var item={
               ...obj 
              }
              item.SentCoins.push({transactionLocalIdentifier:item.globalSentCoinCounter,...action.recievedData})


            return item;

           }


          

      

    return {
      ...obj
    
        
     }

        


}

export default SendXrpPageReducer;