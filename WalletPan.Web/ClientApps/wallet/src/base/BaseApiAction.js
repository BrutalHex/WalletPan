

export function fetchApiPending( entity) {
    return {
        type: 'FETCH_PENDING_'+entity
    }
}

export function fetchApiSuccess(entity,records) {
   
    return {
        type: 'FETCH_SUCCESS_'+entity,
        records: records
    }
}

export function fetchApiError(error,entity) {
    return {
        type: 'FETCH_ERROR_'+entity,
        
        error: error
    }
}