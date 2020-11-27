import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../base/reducers';
import { WalletThunkDispatch } from '../../base/BaseTypes';
export interface ISpinner extends PropsFromRedux {
  show: boolean;
  children: any;
}

export const Spinner: FunctionComponent<ISpinner> = (props: ISpinner) => {
  return (
    <div className="container-fluid p-0 overlayContainer">
      <div className={'spinner-overlay ' + (props.show ? 'd-flex d-block' : 'd-none')}>
        <div className="spinner-border text-primary center align-self-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {props.children}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    show: state.pending,
  };
};

const mapDispatchToProps = (dispatch: WalletThunkDispatch) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const SpinnerContainer = connector(Spinner);
export default SpinnerContainer;
