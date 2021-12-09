import React, { useState, useEffect } from "react";
import "../../styles/Home/Blog.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Blog = () => {
  // Set state for loading more
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(3);
  // fetch dev.to API
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=arthurdav")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <Container className='blog'>
      <Row>
        <Col>
          <h3 className='blog-heading'>My writings:</h3>
          <div className='articles'>
            {articles.slice(0, visible).map((article) => {
              return (
                <div key={article.id} className='article'>
                  <a href={article.url} className='article-title'>
                    {article.title}
                  </a>
                  <p>
                    {article.description} <a href={article.url}>Read More.</a>
                  </p>
                  <p>
                    {article.readable_publish_date} | {article.tags}
                  </p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
      <Button className='btn' variant='outline-dark' onClick={showMoreItems}>
        Load more
      </Button>
    </Container>
  );
};

export default Blog;
