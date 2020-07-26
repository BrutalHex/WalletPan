import { connect } from 'react-redux';
import ExploreWalletPage from './ExploreWalletPage';
import { GetwalletTransactions, GetAccountInfo } from './ExploreWalletPageAction';

function getTransactions(
  index,
  type,
  amount,
  walletOwner,
  transactionDate,
  destTag,
  fee,
  transactionHash
) {
  let obj = {
    index: index,
    type: type,
    amount: amount,
    walletOwner: walletOwner,
    transactionDate: transactionDate.toDateString(),
    transactionTime: transactionDate.toLocaleTimeString(),
    destTag: destTag,
    fee: fee,
    transactionHash: transactionHash,
  };

  return obj;
}

function recievedTransactions(trx) {
  const transactionList = [];

  if (trx.result != undefined) {
    trx.result.transactions.map((item, index) => {
      if (item.tx.TransactionType == 'Payment' && item.meta.TransactionResult == 'tesSUCCESS') {
        transactionList.push(
          getTransactions(
            item.tx.ledger_index,
            item.tx.Destination == trx.result.account ? 'INCOME' : 'EXPENSE',
            item.tx.Amount.value != undefined
              ? item.tx.Amount.value + '(' + item.tx.Amount.currency + ')'
              : item.tx.Amount / 1000000,
            item.tx.Destination,
            new Date((item.tx.date + 946684800) * 1000),
            item.tx.DestinationTag,
            item.tx.Fee,
            item.tx.hash
          )
        );
      }
    });
  }

  return transactionList;
}

const mapStateToProps = (state, ownProps) => {
  let obj = {};

  if (state.base.isInit == true) {
    state.base.isInit = false;

    return {
      currentPage: 1,
      pagesize: 5,
      walletInformation: {
        result: { account_data: { Sequence: 0, Balance: 0 } },
        income: 0,
        expense: 0,
      },
      transactionList: [],
      error: null,
      Address: 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe',
    };
  }

  var trList = recievedTransactions(state.exploreWallet.transactionList);

  var totalIncome = trList
    .filter((tr) => tr.type == 'INCOME')
    .reduce(function (result, item) {
      return result + item.amount;
    }, 0);

  var totalEXPENSE = trList
    .filter((tr) => tr.type == 'EXPENSE')
    .reduce(function (result, item) {
      return result + item.amount;
    }, 0);

  return {
    walletInformation: {
      ...state.exploreWallet.walletInformation,
      income: totalIncome,
      expense: totalEXPENSE,
    },
    transactionList: trList,
    currentPage: 1,
    error: null,
    pagesize: 5,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pageChanged: (currentPageNumber, pagesize) => {
      this.setState((state) => {
        return Object.assign({}, state, {
          ...state,
          currentPage: currentPageNumber,
          pagesize: pagesize,
        });
      });
    },

    handleChange: (values) => {
      dispatch(GetAccountInfo(values));
      dispatch(GetwalletTransactions(values));
    },
  };
};

const ExploreWalletPageContainer = connect(mapStateToProps, mapDispatchToProps)(ExploreWalletPage);
export default ExploreWalletPageContainer;
