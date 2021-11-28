import React from "react";
import "../styles/Layout.css";
import { Nav, Navbar, Container } from "react-bootstrap";
//Layout

const Layout = ({ children }) => {
  return (
    <Navbar className='.nav-font' bg='dark' variant='dark' expand='lg' as='ul'>
      <Container>
        <Navbar.Brand href='/'>Arthur Lachat</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#link' as='li'>
              Blog
            </Nav.Link>
            <Nav.Link href='#link' as='li'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Layout;
