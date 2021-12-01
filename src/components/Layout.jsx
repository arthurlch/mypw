import React from "react";
import "../styles/Layout.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//Layout
const Layout = ({ children }) => {
  return (
    <>
      <Navbar
        className='.nav-font'
        bg='dark'
        variant='dark'
        expand='lg'
        id='navbar'>
        <Container>
          <Navbar.Brand href='/'>Arthur Lachat</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as='li'>
                <Link to='/Blog'>Blog</Link>
              </Nav.Link>
              <Nav.Link as='li'>
                <Link to='/Contact'>Contact</Link>
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
