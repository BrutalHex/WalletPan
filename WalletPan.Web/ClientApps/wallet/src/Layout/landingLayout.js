import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const LandingLayout = ({ children }) => (
    <div>
        <p>This is the Landing Layout</p>
        {children}
    </div>
);

const LandingLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LandingLayout>
                <Component {...matchProps} />
            </LandingLayout>
        )} />
    )
};

export default LandingLayoutRoute;  