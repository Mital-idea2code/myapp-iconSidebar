import React from "react";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaFolder, FaComments, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <Col md={2} lg={2} className="p-0" style={{ background: "#000000" }}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary d-flex flex-column align-items-center sticky-top min-vh-100 big-screen-navber"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="#home">
              <FaHome />
            </Nav.Link>
            <Nav.Link href="#about-me">
              <FaUser />
            </Nav.Link>
            <Nav.Link href="#skills">
              <FaCogs />
            </Nav.Link>
            <Nav.Link href="#experience_education">
              <FaBriefcase />
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <FaFolder />
            </Nav.Link>
            <Nav.Link href="#testimonials">
              <FaComments />
            </Nav.Link>
            <Nav.Link href="#contact">
              <FaEnvelope />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        expand="lg"
        className="bg-body-tertiary d-flex flex-column align-items-center sticky-top  small-screen-navber"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="background-white" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="#home">
              <FaHome />
            </Nav.Link>
            <Nav.Link href="#about-me">
              <FaUser />
            </Nav.Link>
            <Nav.Link href="#skills">
              <FaCogs />
            </Nav.Link>
            <Nav.Link href="#experience_education">
              <FaBriefcase />
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <FaFolder />
            </Nav.Link>
            <Nav.Link href="#testimonials">
              <FaComments />
            </Nav.Link>
            <Nav.Link href="#contact">
              <FaEnvelope />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
}

export default Header;
