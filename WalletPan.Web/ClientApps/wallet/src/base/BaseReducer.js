
import {fetchApiPending,fetchApiSuccess,fetchApiError} from './BaseApiAction';
export const initialState = {
    pending: false,
    records: [],
    error: null
}

export function BaseReducer(state,action,entity,nextReducer)
{
    debugger;
    switch(action.type) {
        case fetchApiPending(entity).type: 
            return {
                ...state,
                pending: true
            }
        case fetchApiSuccess(entity):
            return {
                ...state,
                pending: false,
                records: action.records.data.records
            }
        case fetchApiError(entity):
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return nextReducer();
    }
}
export default BaseReducer;