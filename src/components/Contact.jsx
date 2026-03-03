import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or want to collaborate? Reach out to us! We love hearing from our community and are always here to help you on your healthy food journey.
        </p>


      </div>
      <ul className="contact-details">
        <li><strong>Email:</strong> <a href="mailto:mitaharafoods@gmail.com">mitaharafoods@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:9012345678">9012345678</a></li>
        <li><strong>Address:</strong> LB Nagar, Hyderabad</li>
      </ul>
      <div className="contact-map">
        <iframe
          title="Mitahara Location"
          src="https://www.google.com/maps?q=LB+Nagar,+Hyderabad&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;