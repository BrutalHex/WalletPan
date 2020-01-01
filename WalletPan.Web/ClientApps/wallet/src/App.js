import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from "./Layout/SharedLayout";
import LandingLayoutRoute  from  "./Layout/LandingLayout";
import DashboardLayoutRoute from "./Layout/DashboardLayout";

/** Components **/
import MAinLandingPage from './Pages/MAinLandingPage';
import LoginPage from './Pages/LoginPage'  
import RegistrationPage from './Pages/RegistrationPage'  

function App() {
  return (
    

      <SharedLayout>
      <Switch>

          <Route exact path="/">
              <Redirect to="/landing" />
          </Route>  

              <Route path={["/landing", "/login","/RegisterPage"]}>
                  <LandingLayoutRoute className="row">
                      <Switch>

                          <Route path="/landing" component={MAinLandingPage} />
                          <Route path="/login" component={LoginPage} />
                          <Route path="/RegisterPage" component={RegistrationPage} />

                  </Switch>
              </LandingLayoutRoute>
          </Route>

          <Route path={["/Dashboard"]}>
              <DashboardLayoutRoute>
                  <Switch>
                      <Route path="/Dashboard" component={LoginPage} />
                  </Switch>
              </DashboardLayoutRoute>
          </Route>



      

          
          </Switch>  
          </SharedLayout>
  );
}

export default App;
