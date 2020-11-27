import { IGeneralAction } from './IGeneralAction';

export const Xrp_spark_reg = 'Xrp_spark_reg';

export interface ISparkWalletAction extends IGeneralAction<typeof Xrp_spark_reg, boolean> {}
