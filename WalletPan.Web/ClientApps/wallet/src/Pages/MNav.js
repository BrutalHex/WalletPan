
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Scrollspy from 'react-scrollspy';





class MNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = { top: false };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const top = window.scrollY < 300;

            if (top !== this.state.top) {
                this.setState({ top })
            }
        });
    }

    render() {
        return (

            <Navbar bg={this.state.selected ? 'transparent' : 'card-wrapper'} expand="lg" fixed="top" >
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">

                    <Nav className="mr-auto">

                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#wallet">Wallet</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#FAQs">FAQs</NavLink>

                    </Nav>

                    <Nav className="diparted-nav-section">
                        <NavLink href="/Login">Login</NavLink>
                        <Button variant="outline-primary">Register</Button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>

        )
    };
};

export default MNav;