import React, { useState, useEffect } from 'react';
import '../../styles/Components/Blog.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const Blog = () => {
  // Set state for loading more
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(3);
  // fetch dev.to API
  useEffect(() => {
    fetch('https://dev.to/api/articles?username=arthurdav')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Container fluid className='blog-container'>
        <Row>
          <Col>
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
          <Col className='blog-btn' md={12}>
            <Button className=' btn button' onClick={showMoreItems}>
              Load more
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
