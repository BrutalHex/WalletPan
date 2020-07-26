import { IGeneralAction } from './IGeneralAction';

export const Xrp_Transaction = 'Xrp_Transaction';

export interface IWalletTransactionsAction extends IGeneralAction<typeof Xrp_Transaction, string> {}
