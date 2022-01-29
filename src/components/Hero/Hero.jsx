import { Container, Row, Col, Button } from 'react-bootstrap';
import ThreeJs from '../../Animated/Threejs';
import './../../styles/Components/Hero.scss';
import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='header-animation'>
        <ThreeJs />
      </div>
      <Container className='container-header'>
        <Row className='row-header'>
          <Col>
            <div className='header'>
              <h1>
                The true sign of intelligence is not knowledge but imagination
              </h1>
              <div className='btn-wrapper'>
                <Button className='btn'>
                  <a>Let's imagine together</a>
                  <span className='header-btn-icon'>
                    <BiRightArrow />
                  </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
