import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import '../../styles/Components/About.css';

export const About = () => {
  return (
    <>
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
                      .pauseFor(2500)
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
                    typewriter.pauseFor(1000).typeString('What I do?').start();
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
                      .pauseFor(3500)
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
                    typewriter
                      .pauseFor(2000)
                      .typeString('What I like?')
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
                      .pauseFor(4500)
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
                      .pauseFor(2500)
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
                      .pauseFor(6000)
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
                      .pauseFor(10000)
                      .typeString(
                        'Access Denied: For more data, send a request'
                      )
                      .start();
                  }}
                />
              </div>
              <div className='about-request-wrapper'>
                <a className='about-request' href='contact'>
                  Request data
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
