import { combineReducers } from 'redux'
import exploreWalletReducer from  '../Pages/CryptoOPeration/ExploreWallet/ExploreWalletPageReducer'
import CreateNewWalletPageReducer from  '../Pages/CryptoOPeration/CreateWallet/CreateNewWalletPageReducer'
import SendXrpPageReducer from '../Pages/CryptoOPeration/SendXrp/SendXrpPageReducer'
import BaseReducer from  '../base/BaseReducer'



const rootReducer = combineReducers({
    base:BaseReducer,
    exploreWallet:exploreWalletReducer,
    CreateNewWallet:CreateNewWalletPageReducer,
    
    SendXrp: SendXrpPageReducer

  })
  export default rootReducer