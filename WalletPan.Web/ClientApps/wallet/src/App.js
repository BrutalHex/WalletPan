import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import SharedLayout from "./Layout/sharedLayout";
import LandingLayoutRoute  from  "./Layout/landingLayout";
import DashboardLayoutRoute from "./Layout/dashboardLayout";

/** Components **/
import MAinLandingPage from './Pages/MAinLandingPage';
import LoginPage from './Pages/LoginPage'  

function App() {
  return (
    

      <SharedLayout>
      <Switch>

          <Route exact path="/">
              <Redirect to="/landing" />
          </Route>  

          <Route path={["/landing"]}>
              <LandingLayoutRoute>
                  <Switch>
                          <Route path="/landing" component={MAinLandingPage} />
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
