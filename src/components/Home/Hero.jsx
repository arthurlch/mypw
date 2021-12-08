import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/Home/Hero.css";

const Hero = () => {
  return (
    <Container className='hero-container' fluid>
      <Row>
        <Col className='hero' id='hero'>
          <div className='hero-text'>
            <h1 className='hero-title'>Hi, I'm Arthur</h1>
            <h2 className='hero-subtitle'>Web Developer & Maker</h2>
            <p className='hero-description'>
              I'm a Developer based in Tokyo,
              <br /> I love learning and making things. <br />
              I'm passionate about Science, Technology, Finance.
            </p>
          </div>
          <div className='hero-icons'>
            <a href='https://twitter.com/arthurlch'>
              <FaTwitter className='hero-icon twitter animate__pulse' />
            </a>
            <a href='https://github.com/arthurlch'>
              <FaGithub className='hero-icon github animate__pulse' />
            </a>
            <a href='https://www.linkedin.com/in/arthurdav/'>
              <FaLinkedin className='hero-icon linkedin' />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
