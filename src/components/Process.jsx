import React from 'react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Submit Google Maps',
    description: 'Send us your Google Maps business link and basic details. No upfront payment, no credit card required.',
    icon: '📍',
    bgColor: '#E2F6F0' // Soft Mint
  },
  {
    number: '02',
    title: 'We Build The Demo',
    description: 'Our design team builds a beautiful custom landing page on a subdomain, e.g., yourname.kriya.web.id, in just 3 days.',
    icon: '💻',
    bgColor: '#E8E0FF' // Soft Lilac
  },
  {
    number: '03',
    title: 'Try Free for 14 Days',
    description: 'Put the link on your Instagram or WhatsApp. Observe how the easy booking planner increases your guest bookings.',
    icon: '🚀',
    bgColor: '#FFEAE5' // Soft Peach
  }
];

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Risk-Free Process</span>
          <h2 className="title">Get a Live Website in 3 Days</h2>
          <p className="description">
            We don't sell promises. We build the website first, you test it live in your real business operations, and you pay only if you love the results.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="process-card" style={{ backgroundColor: s.bgColor }}>
              <div className="process-header">
                <span className="process-step-num">{s.number}</span>
                <span className="process-icon-bg">{s.icon}</span>
              </div>
              <h3 className="process-card-title">{s.title}</h3>
              <p className="process-card-desc">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="process-cta-banner">
          <div className="banner-content">
            <h3>Ready to see your business grow?</h3>
            <p>We are currently accepting a limited number of free trial redesigns this week.</p>
          </div>
          <a href="#trial" className="btn btn-primary banner-btn">
            Claim Your Free Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default Process;
