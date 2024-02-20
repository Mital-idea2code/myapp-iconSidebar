// About.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/about.css";
import ProfilePic from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section id="about-me" className="py-5">
      <Container>
        <h2 className="text-center mb-4 textContainer">
          <span className="borderEffect">About Me</span>
        </h2>
        <Row>
          {/* Left side - User image */}
          <Col lg={6}>
            <div className="about-me-text" data-aos="flip-left">
              <p>
                <b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </b>
              </p>
              <p className="bb">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="info-block">
                <p>
                  <b>AGE:</b> 24
                </p>
              </div>
              <div className="info-block">
                <p>
                  <b>EMAIL:</b> janny@company.com
                </p>
              </div>
              <div className="info-block">
                <p>
                  <b>PHONE:</b> +1718-568-9875
                </p>
              </div>
              <div className="info-block">
                <p>
                  <b>ADDRESS:</b> 140, City Center, New York, U.S.A
                </p>
              </div>
              <div className="info-block">
                <p>
                  <b>LANGUAGE:</b> English, German, French
                </p>
              </div>
            </div>
          </Col>
          {/* Right side - User description */}
          <Col lg={6} className="mb-4">
            <div className="user-image-container" data-aos="flip-left">
              <img src={ProfilePic} alt="User" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
