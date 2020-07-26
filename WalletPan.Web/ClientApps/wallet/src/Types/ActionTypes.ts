import { INewXrpWalletAction } from './INewXrpWalletAction';
import { IWalletTransactionsAction } from './IWalletTransactionsAction';
import { ISendXrpWalletAction } from './ISendXrpWalletAction';
import { IGeneralAction } from './IGeneralAction';

export const fetchPendingType = 'FETCH_PENDING';
export const fetchSuccessType = 'FETCH_SUCCESS';
export const fetchErrorType = 'FETCH_ERROR';

export function creatAction<TType, TPayload>(
  inputType: TType,
  inputPayload: TPayload
): IGeneralAction<TType, TPayload> {
  const result: IGeneralAction<TType, TPayload> = {
    type: inputType,
    payload: inputPayload,
    error: false,
    meta: null,
  };

  return result;
}

export type ActoinTypes = INewXrpWalletAction | IWalletTransactionsAction | ISendXrpWalletAction;
