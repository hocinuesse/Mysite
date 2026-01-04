import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div data-aos="fade-up" className="about-text">
            <h3>Professional Frontend Developer</h3>
            <p>Welcome to my personal website. I am a passionate developer specializing in building modern, responsive web applications.</p>
            <p>I have extensive experience in turning ideas into tangible digital reality, always focusing on the latest technologies and coding best practices. I always strive to provide innovative solutions that serve my clients' goals and help them grow.</p>
            
            {/* Quick Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
          
          {/* 
            Replace Image with Code Snippet Visual 
            Designed to look like a code editor for a professional look
          */}
          <div className="about-visual" data-aos="fade-up" data-aos-delay="200">
            <div className="code-window">
              <div className="window-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                <span className="file-name">Developer.js</span>
              </div>
              <div className="window-content">
                <div className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{'{'}</span></div>
                <div className="code-line indent">  <span className="property">name</span>: <span className="string">'Hocine'</span>,</div>
                <div className="code-line indent">  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'JS'</span>, <span className="string">'CSS'</span>],</div>
                <div className="code-line indent">  <span className="property">hardWorker</span>: <span className="boolean">true</span>,</div>
                <div className="code-line indent">  <span className="property">problemSolver</span>: <span className="boolean">true</span></div>
                <div className="code-line"><span className="bracket">{'}'}</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
