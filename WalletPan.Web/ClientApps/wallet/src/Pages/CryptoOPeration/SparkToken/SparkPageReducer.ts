import { createReducer } from '../../../base/reducerUtils';
import { ISparkWalletAction } from '../../../Types/ISparkWalletAction';

const Spark = (initstate: boolean, action: ISparkWalletAction): boolean => {
  return action.payload;
};

const SparkWalletReducer = createReducer(false, {
  Xrp_spark_reg: Spark,
});

export default SparkWalletReducer;
