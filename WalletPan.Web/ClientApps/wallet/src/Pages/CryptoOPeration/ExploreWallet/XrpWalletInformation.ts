export default class XrpWalletInformation {
  Sequence: number;
  Balance: number;

  constructor(Sequence: number, Balance: number) {
    this.Balance = Balance;
    this.Sequence = Sequence;
  }
}
