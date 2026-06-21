import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-grid">
          
          {/* Column 1: Studio info */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-icon">🌿</span>
              <div className="logo-text">
                <span className="logo-main">KRIYA</span>
                <span className="logo-sub">WEB STUDIO</span>
              </div>
            </a>
            <p className="brand-desc">
              We build high-speed, beautiful landing pages and interactive booking planners that connect Bali's finest local businesses with global travelers.
            </p>
            <div className="founder-badge">
              <span className="founder-avatar">👨‍💻</span>
              <div className="founder-info">
                <h4>Lead Engineer</h4>
                <p>Designed by <a href="https://ardyan.web.id" target="_blank" rel="noopener noreferrer" className="founder-link">Ardyan</a></p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#portfolio">Our Showcase</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#trial">Start Free Trial</a></li>
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Contact Studio</h3>
            <p className="contact-desc">Have questions or want to discuss a custom design project? Get in touch:</p>
            
            <div className="contact-items">
              <a href="https://wa.me/6281289653355" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon">💬</span>
                <div className="contact-info">
                  <h4>WhatsApp (24/7)</h4>
                  <p>+62 812-8965-3355</p>
                </div>
              </a>
              
              <a href="mailto:hello@kriya.web.id" className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-info">
                  <h4>Email Address</h4>
                  <p>hello@kriya.web.id</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p>&copy; {currentYear} Kriya Web Studio. All Rights Reserved.</p>
            <p>Designed & Engineered in Bali, Indonesia.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
