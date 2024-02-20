// Counter.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/counter.css";

const Counter = () => {
  return (
    <section className="py-5 counterbg animated" data-aos="fade-right">
      <Container className="counter-container">
        <Row className="counters">
          <Col lg={3} md={6} sm={12}>
            <div className="counter-item">
              <p className="count">250</p>
              <p className="count_description">Projects Working</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="counter-item">
              <p className="count">950</p>
              <p className="count_description">Projects Done</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="counter-item">
              <p className="count">150</p>
              <p className="count_description">Awards Received</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="counter-item">
              <p className="count">299</p>
              <p className="count_description">Happy Clients</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
