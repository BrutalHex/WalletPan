import { IGeneralAction } from './IGeneralAction';

export const Spinner_Change = 'Spinner_Change';

export interface ISpinnerChangeAction extends IGeneralAction<typeof Spinner_Change, boolean> {}
