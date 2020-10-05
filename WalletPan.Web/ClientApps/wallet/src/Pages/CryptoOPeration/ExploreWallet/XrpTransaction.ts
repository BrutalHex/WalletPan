export default class XrpTransaction {
  index: number;
  type: string;
  amount: string | number;
  walletOwner: string;
  transactionDateTime: Date;
  transactionDate: string;
  transactionTime: string;
  destTag: number;
  fee: number;
  transactionHash: string;

  constructor(
    index: number = 0,
    type: string,
    amount: string | number,
    walletOwner: string,
    transactionDateTime: Date,
    destTag: number,
    fee: number,
    transactionHash: string
  ) {
    this.index = index;
    this.type = type;
    this.amount = amount;
    this.walletOwner = walletOwner;
    this.transactionDateTime = transactionDateTime;
    this.transactionDate = transactionDateTime.toDateString();
    this.transactionTime = transactionDateTime.toLocaleTimeString();
    this.destTag = destTag;
    this.fee = fee;
    this.transactionHash = transactionHash;
  }
}
