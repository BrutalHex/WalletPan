import { IGeneralAction } from './IGeneralAction';
import XrpTransaction from '../Pages/CryptoOPeration/ExploreWallet/XrpTransaction';

export const Xrp_Transaction = 'Xrp_Transaction';

export interface IWalletTransactionsAction
  extends IGeneralAction<typeof Xrp_Transaction, Array<XrpTransaction>> {}
