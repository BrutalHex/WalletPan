import * as actions from './actionTypes'

export function fetchApiPending( entity) {
   
    return {
        type: actions.fetchPendingType+'_'+entity,
        baseType:actions.fetchPendingType
    }
}

export function fetchApiSuccess(entity,recievedData) {
    
    return {
        type: actions.fetchSuccessType+'_'+entity,
        baseType:actions.fetchSuccessType,
        recievedData: recievedData
    }
}

export function fetchApiError(error,entity) {
    
    return {
        type: actions.fetchErrorType+'_'+entity,
        baseType:actions.fetchErrorType,
        error: error
    }
}