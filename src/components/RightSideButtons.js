// RightSideButtons.js
import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaFolder, FaComments, FaEnvelope } from "react-icons/fa";

const RightSideButtons = () => {
  return (
    <Container className="fixed-buttons">
      <Button href="#home" variant="outline-light" className="mb-2">
        <FaHome />
      </Button>
      <Button href="#about-me" variant="outline-light" className="mb-2">
        <FaUser />
      </Button>
      <Button href="#skills" variant="outline-light" className="mb-2">
        <FaCogs />
      </Button>
      <Button href="#experience_education" variant="outline-light" className="mb-2">
        <FaBriefcase />
      </Button>
      <Button href="#portfolio" variant="outline-light" className="mb-2">
        <FaFolder />
      </Button>
      <Button href="#testimonials" variant="outline-light" className="mb-2">
        <FaComments />
      </Button>
      <Button href="#contact" variant="outline-light" className="mb-2">
        <FaEnvelope />
      </Button>
    </Container>
  );
};

export default RightSideButtons;
