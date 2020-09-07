import { createReducer } from '../../base/reducerUtils';
import { ISpinnerChangeAction } from '../../Types/ISpinnerChangeAction';

const spinnerChange = (initstate: boolean, action: ISpinnerChangeAction): boolean => {
  return action.payload;
};

const spinnerReducer = createReducer(false, {
  spinner_change: spinnerChange,
});

export default spinnerReducer;
