// Contact.js
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../assets/css/contact.css"; // Import your custom CSS
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5 animated">
      <Container>
        <h2 className="text-center mb-4 textContainer">
          <span className="borderEffect">Contact Me</span>
        </h2>
        <Row>
          <Col md={9} className="mx-auto">
            <Card className="contact-card">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="formName" className="form-input">
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>

                      <Form.Group controlId="formEmail" className="form-input">
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>

                      <Form.Group controlId="formMessage" className="form-input">
                        <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                      </Form.Group>

                      <Button className="theme-btn br-5 ">SEND MESSAGE</Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    {" "}
                    <p>
                      <span className="contact-headerSpan">
                        <FaMapMarker />
                        &nbsp; ADDRESS
                      </span>{" "}
                      <br />
                      <span className="contact-detailSpan">
                        140, City Center, <br />
                        New York, U.S.A
                      </span>
                    </p>
                    <p>
                      <span className="contact-headerSpan">
                        <FaEnvelope /> &nbsp;EMAIL ID{" "}
                      </span>
                      <br />
                      <span className="contact-detailSpan">
                        <a href="mailto:hello@janny.com" className="a-color">
                          hello@janny.com
                        </a>
                        <br />
                        <a href="mailto:janny@company.com" className="a-color">
                          janny@company.com
                        </a>
                      </span>
                    </p>
                    <p>
                      <span className="contact-headerSpan">
                        {" "}
                        <FaPhoneAlt /> &nbsp; CONTACT NUMBER
                      </span>
                      <br />
                      <span className="contact-detailSpan">
                        + (00) 1718-568-9875
                        <br />+ (00) 1223-898-9515
                      </span>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
