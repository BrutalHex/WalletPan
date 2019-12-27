import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/landing.scss';

const SharedLayout = ({ children }) => (
    <div>
            {children}
    </div>
);

export default SharedLayout;