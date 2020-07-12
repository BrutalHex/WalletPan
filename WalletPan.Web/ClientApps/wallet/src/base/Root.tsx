﻿import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './reducers';
import { Route } from 'react-router-dom';
import App from '../App';

const Root: FunctionComponent<any> = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
