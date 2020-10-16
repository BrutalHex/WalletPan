import { connect, ConnectedProps } from 'react-redux';
import { WalletThunkDispatch } from '../../../base/BaseTypes';
import { RootState } from '../../../base/reducers';
import SendXrpPage from './SendXrpPage';
import { SendTransaction } from './SendXrpPageAction';
import XrpPayment from './XrpPayment';

const mapStateToProps = (state: RootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: WalletThunkDispatch) => {
  return {
    handleSendClick: (values: XrpPayment) => {
      dispatch(SendTransaction(values));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface SendXrpPageProps extends PropsFromRedux {
  error: string | null;

  handleSendClick(values: XrpPayment): void;
}

const SendXrpPageContainer = connector(SendXrpPage);
export default SendXrpPageContainer;
