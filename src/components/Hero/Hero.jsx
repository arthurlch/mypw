import { Container, Row, Col, Button } from 'react-bootstrap';
import ThreeJs from '../../Animated/Threejs';
import './../../styles/Components/Hero.scss';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

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
                  <Nav.Link as='li'>
                    <Link className='btn-link' to='/about'>
                      Let's imagine together
                    </Link>
                  </Nav.Link>
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
