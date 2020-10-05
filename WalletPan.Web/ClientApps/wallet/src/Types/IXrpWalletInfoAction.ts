import XrpWalletInformation from '../Pages/CryptoOPeration/ExploreWallet/XrpWalletInformation';
import { IGeneralAction } from './IGeneralAction';

export const Xrp_Wallet_Info = 'Xrp_Wallet_Info';

export interface IXrpWalletInfoAction
  extends IGeneralAction<typeof Xrp_Wallet_Info, XrpWalletInformation> {}
