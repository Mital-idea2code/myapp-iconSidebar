// RightSideButtons.js
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaFolder, FaComments, FaEnvelope } from "react-icons/fa";

const RightSideButtons = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["about-me", "skills", "experience_education", "portfolio", "testimonials", "contact"];

    const getOffsetTop = (id) => {
      const sectionElement = document.getElementById(id);
      return sectionElement ? sectionElement.offsetTop : 0;
    };

    const handleScroll = () => {
      const padding = 300;
      const scrollPosition = window.scrollY + padding;

      let activeSection = "";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const sectionOffsetTop = getOffsetTop(sectionId);

        if (scrollPosition >= sectionOffsetTop) {
          activeSection = sectionId;
          break;
        }
      }

      setActiveSection(activeSection);
    };
    // console.log(activeSection);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="fixed-buttons">
      <Button href="#home" variant="outline-light" className={`mb-2 ${activeSection === "home" ? "active" : ""}`}>
        <FaHome /> <span>HOME</span>
      </Button>
      <Button
        href="#about-me"
        variant="outline-light"
        className={`mb-2 ${activeSection === "about-me" ? "active" : ""}`}
      >
        <FaUser />
        <span>ABOUT</span>
      </Button>
      <Button href="#skills" variant="outline-light" className={`mb-2 ${activeSection === "skills" ? "active" : ""}`}>
        <FaCogs /> <span>SKILLS</span>
      </Button>
      <Button
        href="#experience_education"
        variant="outline-light"
        className={`mb-2 ${activeSection === "experience_education" ? "active" : ""}`}
      >
        <FaBriefcase /> <span>EXPERIENCE</span>
      </Button>
      <Button
        href="#portfolio"
        variant="outline-light"
        className={`mb-2 ${activeSection === "portfolio" ? "active" : ""}`}
      >
        <FaFolder /> <span>PORTFOLIO</span>
      </Button>
      <Button
        href="#testimonials"
        variant="outline-light"
        className={`mb-2 ${activeSection === "testimonials" ? "active" : ""}`}
      >
        <FaComments /> <span>TESTIMONIALS</span>
      </Button>
      <Button href="#contact" variant="outline-light" className={`mb-2 ${activeSection === "contact" ? "active" : ""}`}>
        <FaEnvelope /> <span>CONTACT</span>
      </Button>
    </Container>
  );
};

export default RightSideButtons;
