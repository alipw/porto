import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    // In a real application, you would send this data to a backend
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:yourname@example.com">yourname@example.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Your City, Country</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
              
              {formStatus.message && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 