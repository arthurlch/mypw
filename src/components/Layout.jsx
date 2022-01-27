import React, { useEffect, useState } from 'react';
import '../styles/Layout.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiVercel, SiReact } from 'react-icons/si';

//Layout
const Layout = ({ children }) => {
  return (
    <>
      <Navbar className='navbar' bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>A.L</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as='li'>
                <Link to='/'>HOME</Link>
              </Nav.Link>
              <Nav.Link as='li'>
                <Link to='about'>ABOUT</Link>
              </Nav.Link>
              <Nav.Link as='li'>
                <Link to='project'>PROJECT</Link>
              </Nav.Link>
              <Nav.Link as='li'>
                <Link to='blog'>BLOG</Link>
              </Nav.Link>
              <Nav.Link as='li'>
                <Link to='contact'>CONTACT</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <footer className=' footer text-center text-lg-start'>
        <div className='text-center p-3'>
          Made with
          <span>
            <SiReact className=' icon react-icon' />
          </span>
          and hosted on
          <span>
            <SiVercel className=' icon vercel-icon' />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
