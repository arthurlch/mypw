import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/Home/Project.css";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";
import { Railsbnb } from "../../data/Homepage/projectsData";
// https://placeholder.com/
const Project = () => {
  // Desconstructing Object here is useless since data are available locally.
  return (
    <Container fluid className='project'>
      <Row>
        <Col className='d-flex my-5 '>
          <h4 className='projects-title'>Things I do..</h4>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <Card className=' card h-100'>
              <Card.Img variant='top' src='https://i.imgur.com/hcrPsdJ.png' />
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
                <Button className='card-btn' size='sm' variant='outline-dark'>
                  More
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card className=' card h-100'>
              <Card.Img variant='top' src='https://i.imgur.com/hcrPsdJ.png' />
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
                <Button className='card-btn' size='sm' variant='outline-dark'>
                  More
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card className=' card h-100'>
              <Card.Img variant='top' src='https://i.imgur.com/hcrPsdJ.png' />
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
                <Button className='card-btn' size='sm' variant='outline-dark'>
                  More
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Project;
