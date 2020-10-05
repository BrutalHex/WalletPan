import { WalletThunkResult, WalletThunkDispatch } from '../../../base/BaseTypes';
import { Xrp_Wallet_Info } from '../../../Types/IXrpWalletInfoAction';
import { Xrp_Transaction } from '../../../Types/IWalletTransactionsAction';
import { getRippleAccountInfo, getRippleAccountTransactions } from '../../../base/RippleManagement';
import { creatAction } from '../../../Types/ActionTypes';
import XrpTransaction from './XrpTransaction';
import XrpNewWalletInformation from './XrpWalletInformation';

export function GetAccountInfo(address: string): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) =>
    getRippleAccountInfo(address).then((response) =>
      dispatch(creatAction(Xrp_Wallet_Info, receivedAccountInfo(response)))
    );
}

const receivedAccountInfo = (information: any): XrpNewWalletInformation =>
  new XrpNewWalletInformation(
    information.result.account_data.Sequence,
    information.result.account_data.Balance
  );

export function GetwalletTransactions(address: string): WalletThunkResult<void> {
  return (dispatch: WalletThunkDispatch) => {
    getRippleAccountTransactions(address).then((response) => {
      dispatch(creatAction(Xrp_Transaction, recievedTransactions(response)));
    });
  };
}

const getTransactions = (
  index: number,
  type: string,
  amount: string | number,
  walletOwner: string,
  transactionDate: Date,
  destTag: number,
  fee: number,
  transactionHash: string
): XrpTransaction => {
  const obj = new XrpTransaction(
    index,
    type,
    amount,
    walletOwner,
    transactionDate,
    destTag,
    fee,
    transactionHash
  );

  return obj;
};

const recievedTransactions = (trx: any): Array<XrpTransaction> => {
  const transactionList: Array<XrpTransaction> = [];

  if (trx.result !== undefined) {
    trx.result.transactions.map((item: any, index: number) => {
      if (item.tx.TransactionType === 'Payment' && item.meta.TransactionResult === 'tesSUCCESS') {
        transactionList.push(
          getTransactions(
            item.tx.ledger_index,
            item.tx.Destination === trx.result.account ? 'INCOME' : 'EXPENSE',
            item.tx.Amount.value !== undefined
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
};
