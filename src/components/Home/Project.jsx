import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Home.css";

const Project = () => {
  return (
    <Container fluid className='project'>
      <Row>
        <Col className='d-flex my-5 '>
          <h4 className='projects-title'>Things I do..</h4>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Project;
