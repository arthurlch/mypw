import React from "react";
import "../../styles/Home/Blog.css";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col className='blog-heading'>
          <h3>My articles</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
