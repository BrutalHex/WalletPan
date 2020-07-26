/*if (item.tx.TransactionType == 'Payment' && item.meta.TransactionResult == 'tesSUCCESS') {
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
} */

class TX {
  transactionType: string = '';
  ledger_index: number = 0;
  destination: string = '';
}

class TarnsActionResult {
  account: number = 0;
}
class TransactionMeta {
  transactionResult: string = '';
}

export default class Transaction {
  tx: TX = new TX();
  result: TarnsActionResult = new TarnsActionResult();
  meta: TransactionMeta = new TransactionMeta();
}
