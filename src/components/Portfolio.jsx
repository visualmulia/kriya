import React from 'react';
import './Portfolio.css';

const showcaseProjects = [
  {
    id: 1,
    name: "Healing Spa & Massage Bali",
    category: "Home & Hotel Spa Booking",
    status: "Live Demo",
    isLive: true,
    color: "#E2F6F0", // Mint
    emoji: "💆‍♂️",
    link: "https://healingspamassage.vercel.app"
  },
  {
    id: 2,
    name: "Ubud Sanctuary Villas",
    category: "Premium Villa Rentals",
    status: "In Development",
    isLive: false,
    color: "#E8E0FF", // Lilac
    emoji: "🏡"
  },
  {
    id: 3,
    name: "Canggu Surf Academy",
    category: "Surf School & Booking",
    status: "In Development",
    isLive: false,
    color: "#FFEAE5", // Soft Salmon
    emoji: "🏄‍♂️"
  },
  {
    id: 4,
    name: "Seminyak Specialty Coffee",
    category: "Cafe & Table Ordering",
    status: "In Development",
    isLive: false,
    color: "#FFF9E6", // Soft Yellow
    emoji: "☕"
  },
  {
    id: 5,
    name: "Sanur Scuba Diving",
    category: "PADI Course & Guide Booking",
    status: "In Development",
    isLive: false,
    color: "#E1F5FE", // Soft Sky Blue
    emoji: "🤿"
  },
  {
    id: 6,
    name: "Bali Premium Cruiser",
    category: "Yacht & Boat Charter",
    status: "In Development",
    isLive: false,
    color: "#F1F8E9", // Soft Lime
    emoji: "⛵"
  }
];

// Duplicate projects list for seamless scrolling marquee
const marqueeProjects = [...showcaseProjects, ...showcaseProjects];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Showcase Portfolio</span>
          <h2 className="title">Upcoming Project Showcases</h2>
          <p className="description">
            Explore our pipeline of premium digital products. We build custom-crafted, conversion-optimized websites specifically engineered for Bali's finest local brands.
          </p>
        </div>

      </div>

      {/* Full-width Marquee Container */}
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeProjects.map((p, index) => (
            <div key={`${p.id}-${index}`} className="showcase-card">
              <div className="card-top">
                <div 
                  className="card-emoji-box" 
                  style={{ backgroundColor: p.color }}
                >
                  {p.emoji}
                </div>
                <span className={`card-status ${p.isLive ? 'live' : ''}`}>
                  {p.status}
                </span>
              </div>
              
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <p className="card-category">{p.category}</p>
              </div>

              <div className="card-bottom">
                {p.isLive ? (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-btn"
                  >
                    View Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                ) : (
                  <span className="card-placeholder-text">⚡ Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
