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
                        <NavbarToggle aria-controls="basic-navbar-nav" />
                        <NavbarBrand href="/landing/#home" 
                        className="col-9 col-sm-3 col-lg-3 col-xl-2 pl-lg-3 ml-lg-3 ml-md-1 ml-xl-5 pl-xl-5 navbar-brand 
                        navbar-brand mx-sm-auto align-self-sm-center navbar-brand navbar-brand navbar-brand">
                        
                             <img
                                src={`${process.env.PUBLIC_URL}/landing_assets/logo.svg`}

                                className="d-inline-block align-top"
                                
                            />
                           
                        </NavbarBrand>
                        
                        <NavbarCollapse className="col-12 col-sm-5 col-lg-6 
                        justify-content-end ml-md-5 pl-md-5 ml-lg-2 navbar-collapse collapse" id="basic-navbar-nav">

                            <Nav className="" >

                                <NavLink className="mr-md-4" href="/landing/#home">Home</NavLink>
                                <NavLink className="mr-md-4" href="/Dashboard/CreateNewWallet">New wallet</NavLink>
                                <NavLink className="mr-md-4" href="/Dashboard/Explore">Explore</NavLink>
                                <NavLink className="" href="/Dashboard/SendXRP">Send XRP</NavLink>

                            </Nav>

                        </NavbarCollapse>
                        <NavbarCollapse className="col-12 col-sm-3 justify-content-end mr-md-5 pr-md-5">
                        <NavDropdown.Divider className="d-block d-sm-none" />
                            <NavDropdown className="nav-bar-dropdown" title="Hi,Guest" id="collasible-nav-dropdown">
                               <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>   
                                <NavDropdown.Divider />
                              <NavDropdown.Item href="/RegisterPage">Register</NavDropdown.Item>
                            </NavDropdown>
                        </NavbarCollapse>
                    </Navbar>


                </div>
                <div className="row children-area px-2 py-4 p-md-4 d-flex">
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