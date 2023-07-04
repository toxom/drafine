import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-rows">
        <div className="footer-row">
          <div className="footer-column">
            <h4>SOFTA</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Partners</p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h4>Product</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h4>© SOFTA. All Rights Reserved. <a href="/terms" className="terms-link">Terms of Service</a> | <a href="/privacy" className="privacy-link">Privacy</a></h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
