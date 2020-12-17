import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from 'styled-components';

const Styles = styles.div`
    .navbar {
        background-color: #d4e6f8;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #666;
        &:hover { color: #999; }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
              <img
                src="https://openehr.org/static/img/Logo.svg"
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="OpenEHR logo"
             />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Text><h3>OpenEHRCare</h3></Navbar.Text>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
           </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NavigationBar;