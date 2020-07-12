import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SharedLayout = ({ children }) => (
    <div className="row">
            {children}
    </div>
);

export default SharedLayout;