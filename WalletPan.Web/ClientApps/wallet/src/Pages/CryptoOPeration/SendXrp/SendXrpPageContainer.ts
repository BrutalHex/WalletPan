import { connect } from 'react-redux'
import SendXrpPage from './SendXrpPage'
import {sendTransaction} from './SendXrpPageAction'


   
  

const mapStateToProps = (state, ownProps) => {
  
    return {};

 
}




const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
   
 
handleSendClick:(values)=> {

dispatch( sendTransaction(values));
 
}



  }
}






const SendXrpPageContainer =  (connect(
  mapStateToProps,
  mapDispatchToProps
)(SendXrpPage))
export default SendXrpPageContainer