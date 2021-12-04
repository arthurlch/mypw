import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Home.css";
// Home
const Home = () => {
  return (
    <>
      <Container>
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
            <hr className='hero-separator' />
            <div className='hero-icons'>
              <FaTwitter className='hero-icon twitter animate__pulse' />
              <FaGithub className='hero-icon github animate__pulse' />
              <FaLinkedin className='hero-icon linkedin' />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='project'>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
