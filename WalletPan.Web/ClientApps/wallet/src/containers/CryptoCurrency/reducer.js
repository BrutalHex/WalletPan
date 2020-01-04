import {entity} from './action';
import { combineReducers } from 'redux';
import {BaseReducer,initialState} from '../../base/BaseReducer';
import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../base/BaseApiAction';
 

export function cryptoCurrencyReducer(state = initialState, action) {
   
   
  

    switch(action.type) {
        case fetchApiPending(entity).type: 
            return {
                ...state,
                pending: true
            }
        case fetchApiSuccess(entity).type:
            return {
                ...state,
                pending: false,
                records: action.records.data.records
            }
        case fetchApiError(entity).type:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
 
    return BaseReducer(state,action,entity,function (state){return state;});

 
}

export const     getRecords        = state => state.records;
export const     getRecordsPending = state => state.pending;
export const      getRecordsError   = state => state.error;
 
export default cryptoCurrencyReducer;

