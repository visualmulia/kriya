import React from 'react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Submit Google Maps',
    description: 'Provide us with your Google Maps business link and basic details. No upfront payment, no credit card required.',
    icon: '📍'
  },
  {
    number: '02',
    title: 'We Build The Demo',
    description: 'Our team designs a bespoke, premium landing page on a subdomain, e.g., yourname.kriya.web.id, in just 3 days.',
    icon: '💻'
  },
  {
    number: '03',
    title: 'Try Free for 14 Days',
    description: 'Put the link on your Instagram or WhatsApp. Observe how the easy booking planner boosts your guest conversions.',
    icon: '🚀'
  }
];

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Risk-Free Strategy</span>
          <h2 className="title">Our 14-Day Free Trial Process</h2>
          <p className="description">
            We don't ask you to buy promises. We build the website first, you test it live in your real business operations, and you pay only if you love the results.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="process-card glass">
              <div className="process-header">
                <span className="process-step-num">{s.number}</span>
                <span className="process-icon-bg">{s.icon}</span>
              </div>
              <h3 className="process-card-title">{s.title}</h3>
              <p className="process-card-desc">{s.description}</p>
              
              {idx < steps.length - 1 && (
                <div className="process-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-cta-banner glass">
          <div className="banner-content">
            <h3>Ready to see your business transformed?</h3>
            <p>We are currently accepting a limited number of free trial redesigns this month.</p>
          </div>
          <a href="#trial" className="btn btn-primary">
            Claim Your Free Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;
