import { Container, Row, Col, Button } from 'react-bootstrap';
import ThreeJs from '../../Animated/Threejs';
import './../../styles/Components/Hero.scss';
import { Link } from 'react-router-dom';

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
                <Button className='button'>
                  <Link to='about'>
                    <a href='/about' className='btn-link'>
                      Let's imagine together
                    </a>
                  </Link>
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
