import React from "react";
import "../styles/Layout.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//Layout
const Layout = ({ children }) => {
  return (
    <>
      <Navbar
        className='.nav-font'
        bg='light'
        variant='light'
        expand='lg'
        id='navbar'>
        <Container>
          <Navbar.Brand href='/'>Arthur Lachat</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as='li'>
                <NavLink to='/Blog'>Blog</NavLink>
              </Nav.Link>
              <Nav.Link as='li'>
                <NavLink to='/Contact'>Contact</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default Layout;
