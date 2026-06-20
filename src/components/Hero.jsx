import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Ambient Gradient Background Glows */}
      <div className="glow-circle glow-cyan-bg"></div>
      <div className="glow-circle glow-gold-bg"></div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <span className="hero-studio-tag">KRIYA WEB STUDIO</span>
          <h1 className="hero-title">
            We Build Websites That Turn <br />
            <span className="highlight-cyan">Bali Tourists</span> Into <span className="highlight-gold">Customers</span>
          </h1>
          <p className="hero-description">
            Say goodbye to slow, generic templates. We design lightning-fast websites with custom interactive booking planners that automate your WhatsApp orders. Handcrafted for spas, rentals, and expat brands.
          </p>
          <div className="hero-actions">
            <a href="#trial" className="btn btn-primary pulse-glow-hover">
              Start 14-Day Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              See Our Work
            </a>
          </div>
        </div>

        {/* Interactive Code/Visual Showcase Card */}
        <div className="hero-visual glass">
          <div className="visual-header">
            <div className="dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="address-bar">healingspa.kriya.web.id</div>
          </div>
          
          <div className="visual-body">
            <div className="mock-site-card">
              <div className="mock-tag">🌿 HEALING SPA BALI</div>
              <h3>Traditional Balinese Massage</h3>
              <p>Rejuvenating therapy delivered to your private villa or hotel room.</p>
              
              <div className="mock-booking-planner">
                <div className="mock-input-row">
                  <div className="mock-input">
                    <span>Duration</span>
                    <strong>90 Minutes</strong>
                  </div>
                  <div className="mock-input">
                    <span>Guests</span>
                    <strong>2 Persons (Couple)</strong>
                  </div>
                </div>
                
                <div className="mock-summary">
                  <span>Estimated Total</span>
                  <strong>IDR 560,000</strong>
                </div>
                
                <div className="mock-btn">Send Booking to WhatsApp 💬</div>
              </div>
            </div>
            
            <div className="mock-floating-badge float-badge-left animate-float">
              <span className="badge-icon">⚡</span>
              <div>
                <h4>Speed Score</h4>
                <p>99/100 Mobile Load</p>
              </div>
            </div>
            
            <div className="mock-floating-badge float-badge-right animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="badge-icon">📈</span>
              <div>
                <h4>Conversions</h4>
                <p>+45% Bookings</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
