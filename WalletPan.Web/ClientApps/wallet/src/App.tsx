import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from './Layout/SharedLayout';
import LandingLayoutRoute from './Layout/LandingLayout';
import { DashboardLayoutRoute, DashboardLayout } from './Layout/DashboardLayout';

/** Components **/
import MainLandingPage from './Pages/MainLandingPage';
import LoginPage from './Pages/UserPublicSection/LoginPage';
import RegistrationPage from './Pages/UserPublicSection/RegistrationPage';

/** dashboards **/
import CreateNewWalletPageContainer from './Pages/CryptoOPeration/CreateWallet/CreateNewWalletPageContainer';
import ExploreWalletPageContainer from './Pages/CryptoOPeration/ExploreWallet/ExploreWalletPageContainer';
import SendXrpPageContainer from './Pages/CryptoOPeration/SendXrp/SendXrpPageContainer';

function App() {
  return (
    <SharedLayout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>

        <Route path={['/landing', '/login', '/RegisterPage']}>
          <LandingLayoutRoute className="row">
            <Switch>
              <Route path="/landing" component={MainLandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/RegisterPage" component={RegistrationPage} />
            </Switch>
          </LandingLayoutRoute>
        </Route>

        <Route exact path="/dashboard">
          <Redirect to="/explore" />
        </Route>

        <Route path={['/Dashboard', '/Dashboard/CreateNewWallet']}>
          <DashboardLayoutRoute>
            <Switch>
              <Route path="/Dashboard/CreateNewWallet" component={CreateNewWalletPageContainer} />
              <Route path="/Dashboard/explore" component={ExploreWalletPageContainer} />
              <Route path="/Dashboard/SendXRP" component={SendXrpPageContainer} />
            </Switch>
          </DashboardLayoutRoute>
        </Route>
      </Switch>
    </SharedLayout>
  );
}

export default App;
