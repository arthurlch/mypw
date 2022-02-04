import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import '../../styles/Components/About.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Container fluid className='about-container'>
        <Row className='about-row'>
          <Col md={6} className='about-col'>
            <div className='about-wrapper'>
              <div className='about-wrapper-text about-wrapper-1'>
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(500).typeString('Who am I?').start();
                  }}
                />
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        "My name is Arthur, I'm an Engineer/Philomath/Developer."
                      )
                      .start();
                  }}
                />
              </div>
              <div className='about-wrapper-text about-wrapper-2'>
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(500).typeString('What I do?').start();
                  }}
                />
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        'I do Web Development and Ethical Hacking. My stack: JS/TS, Ruby, Python, Go, Rails, React, Bash, C/C++.'
                      )
                      .start();
                  }}
                />
              </div>
              <div className='about-wrapper-text about-wrapper-3'>
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(500).typeString('What I like?').start();
                  }}
                />
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        'I like Technology, Ethical Hacking, Healthy Food, Books, Stargate, Sushi.'
                      )
                      .start();
                  }}
                />
              </div>
              <div className=' about-wrapper-text about-wrapper-4'>
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString('Little more about me?')
                      .start();
                  }}
                />
                <Typewriter
                  options={{
                    cursor: '',
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        'I am a very temperate person. I value: Knowledge, Critical Thinking, Curiosity.'
                      )
                      .start();
                  }}
                />
              </div>
              <div className=' about-wrapper-text about-wrapper-5'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        'Access Denied: For more data, send a request'
                      )
                      .start();
                  }}
                />
              </div>
              <div className='about-request-wrapper'>
                <Nav.Link as='li'>
                  <Link className='about-request' to='/contact'>
                    Request data
                  </Link>
                </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
