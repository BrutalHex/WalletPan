 
import * as actions from './actionTypes';

export const initialState = {
    pending: false,
    isInit:true,
    transactionList:[],
    walletInformation: {result:{account_data:{Sequence:0,
        Balance:0}}},
    error: null
    
}

export function BaseReducer(state=initialState,action,entity)
{
    
    
    switch(action.baseType) {
        case actions.fetchPendingType: 
            return {
                ...state,
                error:null,
                records:null,
                pending: true
            }
        case actions.fetchSuccessType:
            return {
                ...state,
                pending: false,
                records: action.recievedData
            }
        case actions.fetchErrorType:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return  {   ...state};
    }
}
export default BaseReducer;