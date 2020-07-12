
import teeterTotterPageReducer from '../../../src/Pages/Play/TeeterTotterPageReducer';
import
{
  creatAction,ActoinTypes,Initialize_APP,Game_Timer_Handle,Reset_Game ,Game_Over,Disable_Move,New_Game_Time,New_Left_Side_Shape, New_Right_Side_Shape, Change_Handle
}    from '../../../src/Types/ActionTypes'
import { TitterTooterState } from '../../../src/Pages/Play/TitterTooterState';
import { IInitializeAction } from '../../../src/Types/IInitializeAction';

describe('init app reducer', () => {
    it('should return the initial state', () => {

        let init:  IInitializeAction= {
			"error": false,
			"meta": null,
		   payload: true,
		   type:  Initialize_APP
	   }


      expect(teeterTotterPageReducer(undefined,  init).isInit).toEqual(
        true
      )
    });
});

