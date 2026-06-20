import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 'healing-spa',
    name: 'Healing Spa & Massage Bali',
    type: 'Home & Hotel Service Spa',
    location: 'Bali, Indonesia',
    desc: 'Complete brand redesign and booking integration. We transformed a static, slow template builder page into a premium Balinese Zen experience.',
    before: {
      platform: 'Hostinger Website Builder',
      vibe: 'Static template, kaku, warna kurang serasi.',
      booking: 'WhatsApp link biasa, tamu harus mengetik manual.',
      speed: 'Standard'
    },
    after: {
      platform: 'React + Vite (Custom Dev)',
      vibe: 'Premium Zen dengan warna & tipografi mewah.',
      booking: 'Interactive Booking Planner + Kalkulator Harga & WhatsApp Form.',
      speed: 'Memuat kurang dari 1 detik (Lolos Core Web Vitals)'
    },
    liveLink: 'https://healingspamassage.vercel.app',
    tag: 'Case Study #1'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Showcase Portfolio</span>
          <h2 className="title">Proven Redesign Results</h2>
          <p className="description">
            Explore how we convert generic templates into professional sales machines. We focus on elevating local Bali brands to appeal to high-spending customers.
          </p>
        </div>

        <div className="portfolio-showcase">
          {projects.map(p => (
            <div key={p.id} className="showcase-container">
              
              {/* Left Column: Project Details */}
              <div className="showcase-details">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.name}</h3>
                <span className="project-sub">{p.type} &bull; {p.location}</span>
                <p className="project-desc">{p.desc}</p>
                
                <div className="project-actions">
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                    View Live Redesign Demo
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Before vs After Neobrutalist Table */}
              <div className="comparison-card">
                <h4 className="comparison-title">Redesign Impact</h4>
                
                <div className="comparison-columns">
                  
                  {/* Before */}
                  <div className="comparison-col before-col">
                    <span className="badge badge-before">Before (Hostinger AI)</span>
                    <ul className="comparison-list">
                      <li>
                        <span>Layout Vibe</span>
                        <strong>{p.before.vibe}</strong>
                      </li>
                      <li>
                        <span>Booking System</span>
                        <strong>{p.before.booking}</strong>
                      </li>
                      <li>
                        <span>Load Speed</span>
                        <strong>{p.before.speed}</strong>
                      </li>
                      <li>
                        <span>Platform</span>
                        <strong>{p.before.platform}</strong>
                      </li>
                    </ul>
                  </div>

                  {/* Divider Line */}
                  <div className="comparison-divider"></div>

                  {/* After */}
                  <div className="comparison-col after-col">
                    <span className="badge badge-after">After (Kriya Redesign)</span>
                    <ul className="comparison-list">
                      <li>
                        <span>Layout Vibe</span>
                        <strong className="text-light">{p.after.vibe}</strong>
                      </li>
                      <li>
                        <span>Booking System</span>
                        <strong className="text-light">{p.after.booking}</strong>
                      </li>
                      <li>
                        <span>Load Speed</span>
                        <strong className="text-light">{p.after.speed}</strong>
                      </li>
                      <li>
                        <span>Platform</span>
                        <strong className="text-light">{p.after.platform}</strong>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
