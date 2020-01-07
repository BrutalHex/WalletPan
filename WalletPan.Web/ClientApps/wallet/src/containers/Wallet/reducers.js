 
import {
    Request_GetWalletInfo,
    Receive_GetWalletInfo
} from './actions'


const initialState = {


    Address:'',
    Records:[]


}

function walletInformation(state = {}, action) {
    switch (action.type) {

        case Request_GetWalletInfo:
       
            return Object.assign({}, state, {
                Address: action.Address
            });
        case Request_GetWalletInfo:

            return Object.assign({}, state, {
               
                Records: Information
            });
        default:
            return state
    }
}
function walletTransactions(state = {}, action) {
    return state;
}



 