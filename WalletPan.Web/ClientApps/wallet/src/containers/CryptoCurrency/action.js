import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../base/BaseApiAction';
export const entity = 'CryptoCurrency';
 

export function fetchCryptoCurrencyPending() {

    return fetchApiPending(entity);
    
}

export function fetchCryptoCurrencySuccess(records) {
   
    return  fetchApiSuccess(entity,records);
        
}

export function fetchCryptoCurrencyError(error) {

    return  fetchApiError(error,entity);
        
        
}
export default fetchCryptoCurrencyPending;