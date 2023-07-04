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
            <p>fab.ibetican</p>
            <p>Macards</p>
          </div>
          <div className="footer-column">
            <h4>Customers</h4>
            <p>Polytech Fablab</p>
            <p>FASIE</p>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <p>Instructions</p>
            <p>Articles</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h4>About</h4>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <p>Get Started</p>
            <p>Guides</p>
            <p>Forum</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <p>VK.com</p>
            <p>Telegram</p>
            <p>Discord</p>
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
