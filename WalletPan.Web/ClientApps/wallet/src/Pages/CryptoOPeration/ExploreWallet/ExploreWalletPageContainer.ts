import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../base/reducers';
import ExploreWalletPage from './ExploreWalletPage';
import { GetwalletTransactions, GetAccountInfo } from './ExploreWalletPageAction';
import { WalletThunkDispatch } from '../../../base/BaseTypes';
import XrpWalletInformation from './XrpWalletInformation';
import XrpTransaction from './XrpTransaction';

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    walletInformation: state.walletInformation,
    transactionList: state.transactionList,
    currentPage: 1,
    error: '',
    pagesize: 5,
  };
};

const mapDispatchToProps = (dispatch: WalletThunkDispatch, ownProps: any) => {
  return {
    pageChanged: (currentPageNumber: number, pagesize: number) => {},

    handleChange: (values: string) => {
      dispatch(GetAccountInfo(values));
      dispatch(GetwalletTransactions(values));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface ExploreWalletPageProps extends PropsFromRedux {
  walletInformation: XrpWalletInformation;
  transactionList: Array<XrpTransaction>;
  currentPage: number;
  error: string;
  pagesize: number;
  handleChange(values: string): void;

  pageChanged(currentPageNumber: number, pagesize: number): void;
}

const ExploreWalletPageContainer = connector(ExploreWalletPage);

export default ExploreWalletPageContainer;
