
'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;


export const Request_GenerateWallet = 'Request_GenerateWallet';

export function RequestGenerateWallet() {
    return {
        type: Request_GenerateWallet
        
    }
}

export const Request_GetWalletInfo = 'Request_GetWalletInfo';
export const Receive_GetWalletInfo = 'Receive_GetWalletInfo';

export function RequestWalletInformation(address) {
    return {
        type: Request_GenerateWallet,
        Address: address
    }
}


export function ReceiveWalletInfo(info) {
    return {
        type: Request_GenerateWallet,
        Information: info
    }
}

