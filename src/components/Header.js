import React from "react";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaFolder, FaComments, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <Col md={2} lg={2} className="p-0" style={{ background: "#000000" }}>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top  small-screen-navber ">
        <Container className="header-container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-me">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience_education">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  );
}

export default Header;
