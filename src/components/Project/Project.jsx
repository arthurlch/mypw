import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './../../styles/Components/Project.css';
import { GoMarkGithub, GoLinkExternal, GoArrowRight } from 'react-icons/go';
import { Railsbnb, PyMaze, RubyCRUD } from '../../data/Homepage/projectsData';

export const Project = () => {
  // Desconstructing Object here is useless since data are available locally.
  return (
    <Container fluid className='project'>
      <Row>
        <Col className='d-flex my-5 '>
          <h2 className='projects-title'>Some of my latest work:</h2>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col md={4} className='card-col'>
            <Card className=' card h-60'>
              <Card.Body>
                <Card.Title className='card-title'>
                  {Railsbnb.CardTitle}
                </Card.Title>
                <Card.Text className='card-description'>
                  {Railsbnb.CardDescription}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href={Railsbnb.CardGithubLink} target='_blank'>
                  <GoMarkGithub className='project-icon' />
                </a>
                <a href={Railsbnb.CardLink}>
                  <GoLinkExternal className='project-icon' />
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4} className='card-col'>
            <Card className=' card h-100'>
              <Card.Body>
                <Card.Title className='card-title'>
                  {PyMaze.CardTitle}
                </Card.Title>
                <Card.Text className='card-description'>
                  {PyMaze.CardDescription}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href={PyMaze.CardGithubLink} target='_blank'>
                  <GoMarkGithub className='project-icon' />
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={4} className='card-col'>
            <Card className=' card h-100'>
              <Card.Body>
                <Card.Title className='card-title'>
                  {RubyCRUD.CardTitle}
                </Card.Title>
                <Card.Text className='card-description'>
                  {RubyCRUD.CardDescription}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href={RubyCRUD.CardGithubLink} target='_blank'>
                  <GoMarkGithub className='project-icon' />
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <br className='bottom-spacing' />
      </Container>
    </Container>
  );
};
