import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/workexperience.css";
import "../assets/css/education.css";

const experienceData = [
  {
    text: "Started working on the app-ideas repository",
    date: "February 25 2019",
    category: {
      tag: "CREATIVE DIRECTOR",
      color: "#FFDB14",
    },
    link: {
      url: "https://google.com",
      text: "Check it out on GitHub",
    },
  },
  {
    text: "Started the Weekly Coding Challenge program",
    date: "March 04 2019",
    category: {
      tag: "SENIOR UI/UX DESIGNER",
      color: "#e17b77",
    },
    link: {
      url: "https://google.com",
      text: "Check it out here",
    },
  },
  {
    text: "Got 1.000 followers on Twitter",
    date: "March 07 2019",
    category: {
      tag: "DESIGN DIRECTOR",
      color: "#1DA1F2",
    },
    link: {
      url: "https://google.com",
      text: "See profile",
    },
  },
  {
    text: "I published my first article in the FreeCodeCamp Medium Publication",
    date: "March 18 2019",
    category: {
      tag: "UI/UX DESIGNER",
      color: "#018f69",
    },
    link: {
      url: "https://google.com",
      text: "Check it out here",
    },
  },
  {
    text: "Over 12.000 views in a single day on my Medium posts",
    date: "April 05 2019",
    category: {
      tag: "Front End Developer",
      color: "#018f69",
    },
    link: {
      url: "https://google.com",
      text: "See profile",
    },
  },
];

const ExperienceItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const WorkExperience = () => {
  return (
    <section id="experience_education" className="py-5 animated" data-aos="fade-up">
      <Container>
        <Row>
          <Col lg={5}>
            <h2 className="text-center mb-50 textContainer">
              <span className="borderEffect">Education</span>
            </h2>
            <Container>
              <Col lg={12}>
                <div className="education-item">
                  <h3>Master of Computer Science</h3>
                  <p className="university mb-0">UNIVERSITY OF NORTH CAROLINA</p>
                  <p className="date">September 2016 - May 2020</p>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis justo vel est fermentum, sed
                    tristique lectus condimentum. Donec fringilla arcu at tortor volutpat, sed consequat enim dictum.
                  </p>
                </div>
              </Col>
              <Col lg={12}>
                <div className="education-item">
                  <h3>Bachelor of Science in Computer</h3>
                  <p className="university mb-0">University of Example</p>
                  <p className="date">September 2016 - May 2020</p>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis justo vel est fermentum, sed
                    tristique lectus condimentum. Donec fringilla arcu at tortor volutpat, sed consequat enim dictum.
                  </p>
                </div>
              </Col>

              <Col lg={12}>
                <div className="education-item">
                  <h3>Bachelor of Science in Computer</h3>
                  <p className="university mb-0">University of Example</p>
                  <p className="date">September 2016 - May 2020</p>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis justo vel est fermentum, sed
                    tristique lectus condimentum. Donec fringilla arcu at tortor volutpat, sed consequat enim dictum.
                  </p>
                </div>
              </Col>
            </Container>
          </Col>
          <Col lg={7}>
            <Container>
              <h2 className="text-center mb-50 textContainer">
                <span className="borderEffect">Work Experience</span>
              </h2>
              {experienceData.length > 0 && (
                <div className="timeline-container">
                  {experienceData.map((data, idx) => (
                    <ExperienceItem data={data} key={idx} />
                  ))}
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkExperience;
