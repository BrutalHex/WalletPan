import { IGeneralAction } from './IGeneralAction';

export const Xrp_Payment = 'Xrp_Payment';

export interface ISendXrpWalletAction extends IGeneralAction<typeof Xrp_Payment, boolean> {}
