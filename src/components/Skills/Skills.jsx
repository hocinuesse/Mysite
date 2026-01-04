import React from 'react';
import './Skills.css';
import { skills } from '../../data';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
