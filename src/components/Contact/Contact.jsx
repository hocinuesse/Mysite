import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data
    Swal.fire({
      title: "Thank you for contacting me! I will get back to you soon.",
      icon: "success",
      draggable: true,
    });
    
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-up">
            <h3>Contact Information</h3>
            <p>
              I am available for freelance work. Connect with me via phone or
              email.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>hocinebouhalab@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>+213 671 704 995</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Sidi Bel Abbes, Algeria</span>
              </div>
            </div>

            {/* <div className="social-links">
              <a href="#" className="social-icon">Li</a>
              <a href="#" className="social-icon">Gi</a>
              <a href="#" className="social-icon">Tw</a>
            </div> */}
          </div>

          <form
            className="contact-form"
            data-aos="fade-up"
            data-aos-delay="200"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
