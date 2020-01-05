import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from "./Layout/SharedLayout";
import LandingLayoutRoute  from  "./Layout/LandingLayout";
import {DashboardLayoutRoute,DashboardLayout} from "./Layout/DashboardLayout";


/** Components **/
import MainLandingPage from './Pages/MainLandingPage';
import LoginPage from './Pages/UserPublicSection/LoginPage'  
import RegistrationPage from './Pages/UserPublicSection/RegistrationPage'  
import CryptoCurrencyView from './Pages/CryptoCurrencyView';

/***dashboards* */
import CreateNewWallet from './Pages/CryptoOPeration/CreateNewWallet';
import ExploreWallet from './Pages/CryptoOPeration/ExploreWallet';
import SendCurrency from './Pages/CryptoOPeration/SendCurrency';

function App() {
  return (
    

      <SharedLayout>
      <Switch>

          <Route exact path="/">
              <Redirect to="/landing" />
          </Route>  
        
              <Route path={["/landing", "/login","/RegisterPage","/CryptoCurrencyView"]}>
                  <LandingLayoutRoute className="row">
                      <Switch>

                          <Route path="/landing" component={MainLandingPage} />
                          <Route path="/login" component={LoginPage} />
                          <Route path="/RegisterPage" component={RegistrationPage} />
                          <Route path="/CryptoCurrencyView" component={CryptoCurrencyView} />
                  </Switch>
              </LandingLayoutRoute>
          </Route>

          <Route exact path="/dashboard">
              <Redirect to="/explore" />
          </Route>  

          <Route path={["/Dashboard","/Dashboard/CreateNewWallet"]}>
              <DashboardLayoutRoute>
                  <Switch>
                      <Route   path="/Dashboard/CreateNewWallet" component={CreateNewWallet} />
                      <Route   path="/Dashboard/explore" component={ExploreWallet} />
                      <Route   path="/Dashboard/SendXRP" component={SendCurrency} />
                  </Switch>
              </DashboardLayoutRoute>
          </Route>



      

          
          </Switch>  
          </SharedLayout>
  );
}

export default App;
