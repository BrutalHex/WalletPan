export interface IGenericAction<TType, TPayload, TMETA> {
  type: TType;
  payload: TPayload;
  error: boolean;
  meta: TMETA;
}
