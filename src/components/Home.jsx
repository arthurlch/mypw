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
            <h1 className='title'>Hi, I'm Arthur</h1>
            <h1 className='subtitle'>Web Developer & Maker</h1>
            <hr className='hero-separator' />
            <div className='hero-icon'>
              <FaTwitter className='icon' />
              <FaGithub className='icon' />
              <FaLinkedin className='icon' />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
