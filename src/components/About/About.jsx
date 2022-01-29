import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

export const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='about-wrapper'>
              <Typewriter
                options={{
                  cursor: '',
                  autoStart: true,
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Who are you?').pauseFor(2500).start();
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
