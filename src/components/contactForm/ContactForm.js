import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-input" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-input" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="form-textarea" name="message"></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
