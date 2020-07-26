import React, { FunctionComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SharedLayout: FunctionComponent<any> = ({ children }) => (
  <div className="row">{children}</div>
);

export default SharedLayout;
