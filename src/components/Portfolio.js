import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import portfolio1 from "../assets/images/portfolio/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio/portfolio-5.jpg";
const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project goes here. It can include key features, technologies used, etc.",
    imageUrl: portfolio1,
    url: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of the project goes here. It can include key features, technologies used, etc.",
    imageUrl: portfolio2,
    url: "https://example.com/project1",
  },
  {
    title: "Project 3",
    description: "A brief description of the project goes here. It can include key features, technologies used, etc.",
    imageUrl: portfolio3,
    url: "https://example.com/project1",
  },
  {
    title: "Project 4",
    description: "A brief description of the project goes here. It can include key features, technologies used, etc.",
    imageUrl: portfolio4,
    url: "https://example.com/project1",
  },
  {
    title: "Project 5",
    description: "A brief description of the project goes here. It can include key features, technologies used, etc.",
    imageUrl: portfolio5,
    url: "https://example.com/project1",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 animated" data-aos="fade-up">
      <Container className="portfolio-container">
        <h2 className="text-center mb-4 textContainer">
          <span className="borderEffect">Portfolio</span>
        </h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="portfolio-card">
                <Card.Img variant="top" src={project.imageUrl} />
                <div className="portfolio_overlay">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="url-icon" />
                    <p className="url-icon">{project.title}</p>
                    <p className="url-icon">{project.description}</p>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
