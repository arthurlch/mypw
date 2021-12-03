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
              <h1 className='title'>Hi, I'm Arthur</h1>
              <h2 className='subtitle'>Web Developer & Maker</h2>
              <p className='description'>
                I'm a Developer based in Tokyo,
                <br /> I love learning and making things. <br />
                I'm passionate about Science, Technology, Finance.
              </p>
            </div>
            <hr className='hero-separator' />
            <div className='hero-icon'>
              <FaTwitter className='icon twitter' />
              <FaGithub className='icon github' />
              <FaLinkedin className='icon linkedin' />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
