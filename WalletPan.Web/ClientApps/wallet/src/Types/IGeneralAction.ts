import { IGenericAction } from './IGenericAction';

export interface IGeneralAction<TType, TPayload> extends IGenericAction<TType, TPayload, any> {}
