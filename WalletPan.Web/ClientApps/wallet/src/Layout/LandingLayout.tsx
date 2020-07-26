import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import '../Pages/style/common.scss';
import '../Pages/style/landing.scss';

const LandingLayout: FunctionComponent<any> = ({ children }) => (
  <div className="row">{children}</div>
);

const LandingLayoutRoute: FunctionComponent<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LandingLayout>
          <Component {...matchProps} />
        </LandingLayout>
      )}
    />
  );
};

export default LandingLayoutRoute;
