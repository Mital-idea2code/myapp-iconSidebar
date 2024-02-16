// Testimonials.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "../assets/css/testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company XYZ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.",
  },
  {
    name: "John Doe",
    role: "CEO, Company XYZ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.",
  },
  {
    name: "John Doe",
    role: "CEO, Company XYZ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.",
  },
  {
    name: "John Doe",
    role: "CEO, Company XYZ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id gravida felis.",
  },
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 animated">
      <Container className="">
        <h2 className="text-center  textContainer">
          <span className="borderEffect">Testimonials</span>
        </h2>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Card className="testimonial-card">
                <Card.Body className="testimmonial-cardBody">
                  <Card.Text>{testimonial.content}</Card.Text>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle className="mb-2 ">{testimonial.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
