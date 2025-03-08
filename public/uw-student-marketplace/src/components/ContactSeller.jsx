// src/pages/ContactSeller.js

import React from 'react';
import './ContactSeller.css'; // Create ContactSeller.css

function ContactSeller() {
  return (
    
    <div className="contact-seller-container">
      <h1>Contact Seller</h1>
      <p>To Purchase Items</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Value" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No</label>
          <input type="tel" id="phone" name="phone" placeholder="Value" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Value" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Value"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactSeller;