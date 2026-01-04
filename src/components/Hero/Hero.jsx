import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div data-aos="fade-up" className="hero-content">
          {/* Greeting Text */}
          <span className="greeting">Hello, I'm</span>
          {/* Name */}
          <h1 className="name">HOCINE</h1>
          {/* Professional Title */}
          <h2 className="title">Professional Frontend Developer</h2>
          {/* Description */}
          <p className="description">I am a passionate developer specializing in building modern, responsive web applications using React. I focus on delivering excellent user experiences and writing clean, maintainable code.</p>
          {/* Call to Action Buttons */}
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-delay="200">
          {/* Abstract Animated Shape */}
          <div className="blob"></div>
        </div>
      </div>
      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
