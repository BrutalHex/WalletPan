import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

class MNav extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { top: true };
  }

  componentDidMount() {}

  render() {
    return (
      <Navbar bg="transparent" className="navbar" id="mainNav" collapseOnSelect expand="lg">
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#wallet">Wallet</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#FAQs">FAQs</NavLink>
          </Nav>

          <Nav className="diparted-nav-section">
            <NavLink href="/login" className="mt-3">
              Login
            </NavLink>
            <Button href="/RegisterPage" variant="outline-primary mt-3">
              Register
            </Button>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}

export default MNav;
