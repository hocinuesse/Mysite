import React from 'react';
import './Testimonials.css';
import {testimonials} from '../../data'
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div 
              key={item.id} 
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
