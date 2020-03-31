import {BaseReducer,initialState} from '../../../base/BaseReducer'
import * as  actionType from '../../../base/actionTypes'
 
export function CreateNewWalletPageReducer(state=initialState,action)
{

   
        var obj=BaseReducer(state,action);
   
     
           if(action.type.indexOf(actionType.fetchSuccessType)>-1)
           {
            return {
               ...obj ,
               GenKey : action.recievedData.GenKey
              }
           }
 

 

    return {
      ...obj,
      GenKey :false
        
     }

        


}

export default CreateNewWalletPageReducer;