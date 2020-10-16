import { IGeneralAction } from './IGeneralAction';

export const New_Xrp_Wallet = 'New_Xrp_Wallet';

export interface INewXrpWalletAction extends IGeneralAction<typeof New_Xrp_Wallet, boolean> {}
