import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../Pages/style/common.scss';
import '../Pages/style/dashboard.scss';
import Footer from '../Pages/Footer';

import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';


export class DashboardLayout extends Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (


            <div className="container-fluid dashboard">

                <div className="row menu-bar">
                    <Navbar bg="transparent" collapseOnSelect expand="lg" className="w-100"
                    >
                        <NavbarBrand href="~/landing/#home" className="col-12 col-sm-3 pl-md-5 ml-md-5">
                            <img
                                src={`${process.env.PUBLIC_URL}/landing_assets/logo.svg`}

                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </NavbarBrand>
                        <NavbarToggle aria-controls="basic-navbar-nav" />
                        <NavbarCollapse className="col-12 col-sm-5 justify-content-end ml-md-5 pl-md-5" id="basic-navbar-nav">

                            <Nav className="" >

                                <NavLink className="mr-md-4" href="~/landing/#home">Home</NavLink>
                                <NavLink className="mr-md-4" href="~/Dashboard/CreateNewWallet">New wallet</NavLink>
                                <NavLink className="mr-md-4" href="~/Dashboard/Explore">Explore</NavLink>
                                <NavLink className="" href="~/Dashboard/SendXRP">Send XRP</NavLink>

                            </Nav>

                        </NavbarCollapse>
                        <NavbarCollapse className="col-12 col-sm-3 justify-content-end mr-md-5 pr-md-5">
                            <NavDropdown className="nav-bar-dropdown" title="Hi,Guest" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Sign In</NavDropdown.Item>
                            </NavDropdown>
                        </NavbarCollapse>
                    </Navbar>


                </div>
                <div className="row children-area p-4 d-flex">
                    {this.props.children}
                </div>
                <Footer />
            </div>


        )
    };




}
export const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (<DashboardLayout>
        <Route {...rest} render={(matchProps) => (


            <Component {...matchProps} />

        )} /> </DashboardLayout>
    )

}

export default DashboardLayoutRoute;  