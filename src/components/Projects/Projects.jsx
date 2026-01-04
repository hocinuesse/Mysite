import React from 'react';
import './Projects.css';
import { projects } from '../../data';

function Projects () {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="btn btn-primary" target='blanck'>View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
           <a href="#contact" className="btn btn-outline">Request Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
