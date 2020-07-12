import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TeeterTotterThunkResult, TeeterTotterThunkDispatch } from '../../../src/base/BaseTypes';
import { InitializeGame } from '../../../src/Pages/Play/TeeterTotterPageAction';
import {
  creatAction,
  ActoinTypes,
  Initialize_APP,
  Game_Timer_Handle,
  Reset_Game,
  Game_Over,
  Disable_Move,
  New_Game_Time,
  New_Left_Side_Shape,
  New_Right_Side_Shape,
  Change_Handle,
} from '../../../src/Types/ActionTypes';
import { IInitializeAction } from '../../../src/Types/IInitializeAction';
import { RootState } from '../../../src/base/reducers';

const middlewares = [thunk];
const mockStore = configureStore<RootState, TeeterTotterThunkDispatch>(middlewares);
const reduxStore = mockStore();

describe('game start', () => {
  beforeEach(() => {
    reduxStore.clearActions();
  });

  describe('initialize user action', () => {
    it('should dispatch the initialize action', () => {
      let init: IInitializeAction = {
        error: false,
        meta: null,
        payload: true,
        type: Initialize_APP,
      };

      const expectedActions = [init];
      reduxStore.dispatch(InitializeGame(true));
      expect(reduxStore.getActions()).toEqual(expectedActions);
    });
  });
});
