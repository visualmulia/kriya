import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Local Accelerator',
    price: 'IDR 199K',
    period: '/ Month',
    target: 'Perfect for local spas, rentals & retail shops',
    features: [
      '⚡ 14-Day Free Live Trial First',
      '💬 WhatsApp Booking Planner',
      '📱 100% Mobile-Responsive Layout',
      '🌍 Single Language (EN or ID)',
      '🌐 Subdomain Hosting (brand.kriya.web.id)',
      '🛠️ Managed Maintenance & Support'
    ],
    buyout: 'License buyout options: IDR 1.5M (self-host) or IDR 2.5M (managed)',
    cta: 'Start Free Trial',
    accent: false
  },
  {
    name: 'Premium Global',
    price: 'IDR 450K',
    period: '/ Month',
    target: 'Best for expat brands, villas & restaurants',
    features: [
      '⚡ 14-Day Free Live Trial First',
      '💬 WhatsApp Booking Planner',
      '✨ Multi-language Setup (ID / EN / RU)',
      '📅 Booking Slots Calendar Planner',
      '🔗 Custom Domain Setup (brand.id / .com)',
      '📊 Google Analytics & FB Pixel Setup',
      '⭐ Priority 24/7 Developer Support'
    ],
    buyout: 'License buyout option: IDR 3.9M (USD 249)',
    cta: 'Start Free Trial',
    accent: true
  },
  {
    name: 'Nomad Custom',
    price: 'Custom',
    period: 'Contract',
    target: 'Best for digital nomads & custom SaaS systems',
    features: [
      '💻 Custom React / Next.js Frameworks',
      '💳 Payment Gateway (Midtrans/Stripe)',
      '🗄️ Custom Database & API Integrations',
      '🎨 100% Bespoke Creative UI/UX Design',
      '🔑 Full Code Handover & Ownership',
      '💼 Work directly with Ardyan (Lead Dev)'
    ],
    buyout: 'Pricing follows custom web engineering rates',
    cta: 'Discuss My Project',
    accent: false,
    link: 'https://ardyan.web.id'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Clear Pricing</span>
          <h2 className="title">Select Your Studio Plan</h2>
          <p className="description">
            Choose the fit for your business scale. No hidden fees. Both monthly plans start with a **14-day free live trial**!
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, idx) => (
            <div key={idx} className={`pricing-card ${p.accent ? 'featured' : ''}`}>
              {p.accent && <span className="featured-ribbon">Most Popular</span>}
              
              <div className="plan-header">
                <h3>{p.name}</h3>
                <p className="plan-target">{p.target}</p>
                <div className="plan-price-box">
                  <span className="plan-price">{p.price}</span>
                  <span className="plan-period">{p.period}</span>
                </div>
              </div>

              <div className="plan-divider"></div>

              <ul className="plan-features">
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="plan-divider"></div>
              
              <p className="plan-buyout">{p.buyout}</p>

              <div className="plan-footer">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary plan-btn">
                    {p.cta}
                  </a>
                ) : (
                  <a href="#trial" className={`btn ${p.accent ? 'btn-primary' : 'btn-secondary'} plan-btn`}>
                    {p.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
