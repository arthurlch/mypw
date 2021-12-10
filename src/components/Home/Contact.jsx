import "../../styles/Home/Contact.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Contact = () => {
  const data = "https://formsubmit.co/a4cd2264c6b501c3f41c5f3d1e2e0518";
  return (
    <Container>
      <Row>
        <Col md={3} />
        <Col>
          <h3 className='contact-headline'>Get in touch:</h3>
          <Form action={data} method='POST'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Your name:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                required
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Subject:</Form.Label>
              <Form.Control as='textarea' rows={2} name='subject' required />
            </Form.Group>
            <Button className='btn' variant='outline-dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={3} />
      </Row>
    </Container>
  );
};

export default Contact;
