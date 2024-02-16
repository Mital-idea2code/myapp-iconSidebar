// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/footer.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="site-footer animated">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mt-10 text-left">© Idea2codeInfotech. All rights reserved.</p>
          </Col>

          <Col md={6} className="">
            <div className="mt-10 text-right">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <FaGoogle className="social-icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
