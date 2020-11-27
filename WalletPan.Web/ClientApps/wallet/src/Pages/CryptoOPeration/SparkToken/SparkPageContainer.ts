import { connect, ConnectedProps } from 'react-redux';
import { WalletThunkDispatch } from '../../../base/BaseTypes';
import { RootState } from '../../../base/reducers';
import SparkPage from './SparkPage';
import { SendTransaction } from './SparkPageAction';
import SparkMessage from './SparkMessage';

const mapStateToProps = (state: RootState) => {
  return { SentPayments: state.SentPayments };
};

const mapDispatchToProps = (dispatch: WalletThunkDispatch) => {
  return {
    handleSendClick: (values: SparkMessage) => {
      dispatch(SendTransaction(values));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface SparkPageProps extends PropsFromRedux {
  error: string | null;
  SentMessage: boolean;
  handleSendClick(values: SparkMessage): void;
}

const SparkPageContainer = connector(SparkPage);
export default SparkPageContainer;
