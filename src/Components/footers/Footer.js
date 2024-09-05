// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>FQ BY C.H.ROBINSON</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#carriers">For Carriers</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SUPPORT</h4>
        <ul>
          <li><a href="#customer-service">Customer Service</a></li>
          <li><a href="#faqs">FAQ's</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>FOLLOW US</h4>
        <ul>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>STAY UP TO DATE</h4>
        <ul>
          <li><a href="#blog">Freightquote Blog</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
