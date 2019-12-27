import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const DashboardLayout = ({ children }) => (
    <div>
        <p>Dashboard Layout</p>
        {children}
    </div>
);

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};

export default DashboardLayoutRoute;  