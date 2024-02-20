import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import "../assets/css/home.css";

function Home() {
  return (
    <section id="home">
      {/* Full-screen Image */}
      <div className="full-screen-image order-lg-2 animated" id="home">
        <div className="overlay">
          <h1 className="text-center text-white">Hi, I'm </h1>
          <h1 className="text-center text-white headname_style"> Janny Stanbridge</h1>
          <p className="lead text-center text-white lead-font">Frontend Web Developer and Graphics Designer</p>
          {/* Social Media Links */}
          <div className="social-links text-center" data-aos="fade-up">
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
          <div className="mt-40 text-center">
            <a href="#contact" className="text-white">
              <Button className="theme-btn">Hire Me</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
