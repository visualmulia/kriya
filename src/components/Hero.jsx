import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [businessName, setBusinessName] = useState('');

  const handleStartTrial = (e) => {
    e.preventDefault();
    if (!businessName) {
      alert('Please enter your business name first!');
      return;
    }
    // Set form value and scroll to form section
    const trialForm = document.getElementById('trial');
    const businessNameInput = document.getElementById('businessName');
    if (businessNameInput) {
      businessNameInput.value = businessName;
      // Trigger native change event so React state in TrialForm updates
      const event = new Event('input', { bubbles: true });
      businessNameInput.dispatchEvent(event);
    }
    if (trialForm) {
      trialForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-fade-in">
        
        {/* Left Side: Pitch and Search Bar */}
        <div className="hero-content">
          <span className="hero-studio-tag">KRIYA WEB STUDIO</span>
          <h1 className="hero-title">
            One Link to Turn <span className="highlight-green">Bali Tourists</span> Into Customers
          </h1>
          <p className="hero-description">
            We build modern, lightweight websites with interactive booking planners that simplify your WhatsApp bookings. Spas, rentals, or villas—get a live demo running in 3 days.
          </p>
          
          {/* Linktree style Domain Bar */}
          <form className="hero-domain-form" onSubmit={handleStartTrial}>
            <div className="domain-input-wrapper">
              <span className="domain-prefix">kriya.web.id/</span>
              <input
                type="text"
                placeholder="yourbusiness"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              />
            </div>
            <button type="submit" className="btn btn-primary hero-submit">
              Claim 14-Day Free Trial
            </button>
          </form>
          
          <span className="hero-helper-text">💡 No credit card required. Cancel anytime.</span>
        </div>

        {/* Right Side: Smartphone Simulator (Linktree representation) */}
        <div className="hero-visual">
          <div className="phone-wrapper animate-float">
            <div className="phone-notch"></div>
            
            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-avatar">🌿</span>
                <h3>kriya web studio</h3>
                <p>Helping Bali businesses grow online</p>
              </div>
              
              <div className="phone-links">
                
                <a href="https://healingspamassage.vercel.app" target="_blank" rel="noopener noreferrer" className="phone-link-btn">
                  <span className="link-icon">💆‍♂️</span>
                  <span className="link-title">Live Demo: Healing Spa Bali</span>
                </a>

                <a href="#portfolio" className="phone-link-btn highlight-link">
                  <span className="link-icon">📈</span>
                  <span className="link-title">View Before & After Showcase</span>
                </a>

                <a href="#trial" className="phone-link-btn">
                  <span className="link-icon">🎁</span>
                  <span className="link-title">Claim Your Free 14-Day Website</span>
                </a>

                <a href="https://ardyan.web.id" target="_blank" rel="noopener noreferrer" className="phone-link-btn">
                  <span className="link-icon">💼</span>
                  <span className="link-title">Visit Ardyan's Web Portfolio</span>
                </a>

              </div>
              
              <div className="phone-footer">
                <span>kriya.web.id</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
