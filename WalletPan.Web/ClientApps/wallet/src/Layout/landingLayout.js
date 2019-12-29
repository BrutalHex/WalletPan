import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../Pages/style/landing.scss';

const LandingLayout = ({ children }) => (
    <div className="row">
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