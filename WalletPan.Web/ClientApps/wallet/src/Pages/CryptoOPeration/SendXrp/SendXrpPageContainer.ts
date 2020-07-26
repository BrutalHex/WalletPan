import { connect } from 'react-redux';
import SendXrpPage from './SendXrpPage';
import { SendTransaction } from './SendXrpPageAction';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSendClick: (values) => {
      dispatch(SendTransaction(values));
    },
  };
};

const SendXrpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SendXrpPage);
export default SendXrpPageContainer;
