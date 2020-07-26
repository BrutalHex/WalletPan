import { fetchPendingType, fetchSuccessType, fetchErrorType } from '../Types/ActionTypes';

export function fetchApiPending(entity: any) {
  return {
    type: fetchPendingType + '_' + entity,
    baseType: fetchPendingType,
  };
}

export function fetchApiSuccess(entity: any, recievedData: any) {
  return {
    type: fetchSuccessType + '_' + entity,
    baseType: fetchSuccessType,
    recievedData: recievedData,
  };
}

export function fetchApiError(error: any, entity: any) {
  return {
    type: fetchErrorType + '_' + entity,
    baseType: fetchErrorType,
    error: error,
  };
}
