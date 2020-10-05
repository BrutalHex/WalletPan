import { connect } from 'react-redux';
import { RootState } from '../../../base/reducers';
import ExploreWalletPage from './ExploreWalletPage';
import { GetwalletTransactions, GetAccountInfo } from './ExploreWalletPageAction';
export interface ExploreWalletPageProps extends PropsFromRedux {
  walletInformation: XrpNewWalletInformation;
  transactionList: Array<XrpTransaction>;
  currentPage: number;
  error: string;
  pagesize: number;
  handleChange(values: string): void;
  pageChanged(currentPageNumber: number, pagesize: number): void;
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    walletInformation: state.walletInformation,
    transactionList: state.transactionList,
    currentPage: 1,
    error: null,
    pagesize: 5,
  } as ExploreWalletPageProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pageChanged: (currentPageNumber: number, pagesize: number) => {
      this.setState((state) => {
        return Object.assign({}, state, {
          ...state,
          currentPage: currentPageNumber,
          pagesize: pagesize,
        });
      });
    },

    handleChange: (values: string) => {
      dispatch(GetAccountInfo(values));
      dispatch(GetwalletTransactions(values));
    },
  };
};

const ExploreWalletPageContainer = connect(mapStateToProps, mapDispatchToProps)(ExploreWalletPage);
export default ExploreWalletPageContainer;
