import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from "./Layout/SharedLayout";
import LandingLayoutRoute  from  "./Layout/LandingLayout";
import {DashboardLayoutRoute,DashboardLayout} from "./Layout/DashboardLayout";


/** Components **/
import MAinLandingPage from './Pages/MAinLandingPage';
import LoginPage from './Pages/LoginPage'  
import RegistrationPage from './Pages/RegistrationPage'  
import CryptoCurrencyView from './Pages/CryptoCurrencyView';

/***dashboards* */
import CreateNewWallet from './Pages/CreateNewWallet';
import ExploreWallet from './Pages/ExploreWallet';


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

                          <Route path="/landing" component={MAinLandingPage} />
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
                  </Switch>
              </DashboardLayoutRoute>
          </Route>



      

          
          </Switch>  
          </SharedLayout>
  );
}

export default App;
