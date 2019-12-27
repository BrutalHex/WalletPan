import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import LandingLayoutRoute  from  "./Layout/LandingLayout";
import DashboardLayoutRoute from "./Layout/DashboardLayout";

/** Components **/
import UserPage from './Pages/UserPage';
import LoginPage from './Pages/LoginPage'  

function App() {
  return (
    

 
      <Switch>

          <Route exact path="/">
              <Redirect to="/landing" />
          </Route>  

          <Route path={["/landing"]}>
              <LandingLayoutRoute>
                  <Switch>
                      <Route path="/landing" component={UserPage} />
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
  );
}

export default App;
