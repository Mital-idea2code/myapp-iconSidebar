// Skills.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { label: "HTML", value: 80, color: "#3498db" },
  { label: "JAVASCRIPT", value: 70, color: "#9966ff" },
  { label: "BOOTSTRAP", value: 60, color: "#2ecc71" },
  { label: "PHOTOSHOP", value: 80, color: "#ffcc00" },
  { label: "CSS", value: 75, color: "#009900" },
  { label: "SASS", value: 85, color: "#339966" },
];

const SkillItem = ({ label, value, color }) => (
  <Col lg={2}>
    <div className="skill-item">
      <p>{label}</p>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={8}
        styles={{
          text: {
            fontSize: "20px",
            fontWeight: "bold",
            fill: color,
          },
          path: {
            stroke: color,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 1s ease-in-out",
            strokeDashoffset: 251.2 * (1 - value / 100),
            strokeDasharray: 251.2,
          },
        }}
        className="progressbar-path"
      />
    </div>
  </Col>
);

const Skills = () => {
  return (
    <section id="skills" className="py-5 skills animated" data-aos="fade-right">
      <Container>
        <h2 className="text-center mb-50 textContainer">
          <span className="borderEffect">Professional Skills</span>
        </h2>
        <Row>
          {skillsData.map((skill, index) => (
            <SkillItem key={index} {...skill} data-aos="fade-right" />
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
