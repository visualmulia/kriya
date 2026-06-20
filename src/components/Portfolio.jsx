import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 'healing-spa',
    name: 'Healing Spa & Massage Bali',
    type: 'Home Service Spa & Wellness',
    location: 'Bali, Indonesia',
    desc: 'Complete brand redesign and interactive booking system implementation. We replaced a generic website template with a luxury Balinese zen experience.',
    before: {
      platform: 'Hostinger AI Builder',
      vibe: 'Static, flat template, plain green colors.',
      booking: 'Static WhatsApp link - guests must write everything manually.',
      speed: 'Average'
    },
    after: {
      platform: 'React + Vite (Custom)',
      vibe: 'Luxury Zen design with high-end typography.',
      booking: 'Interactive Planner with live pricing calculator & formatted checkout.',
      speed: 'Under 1 second (100% Core Web Vitals)'
    },
    liveLink: 'https://healingspamassage.vercel.app',
    tag: 'Featured Redesign'
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Our Showcase</span>
          <h2 className="title">Proven Results in Bali</h2>
          <p className="description">
            Explore our latest website transformations. We focus on elevating local brands into premium experiences that convert traffic into revenue.
          </p>
        </div>

        <div className="portfolio-showcase">
          {projects.map(p => (
            <div key={p.id} className="showcase-container glass">
              
              {/* Project Intro */}
              <div className="showcase-details">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.name}</h3>
                <span className="project-sub">{p.type} &bull; {p.location}</span>
                <p className="project-desc">{p.desc}</p>
                
                <div className="project-actions">
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                    View Live Website Demo
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              {/* Before vs After Grid */}
              <div className="comparison-card">
                <h4 className="comparison-title">The Transformation</h4>
                
                <div className="comparison-columns">
                  
                  {/* Before */}
                  <div className="comparison-col before-col">
                    <span className="badge badge-before">Before (Old Web)</span>
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
