import React from 'react';
import './Portfolio.css';

const showcaseProjects = [
  {
    id: 1,
    name: "Healing Spa & Massage Bali",
    category: "Home & Hotel Spa Booking",
    status: "Live Demo",
    isLive: true,
    color: "#E8E0FF", // Lilac
    emoji: "💆‍♂️",
    link: "https://healingspamassage.vercel.app"
  },
  {
    id: 2,
    name: "Ufresh Family Spa Denpasar",
    category: "Tropical Wellness & Day Spa",
    status: "Live Demo",
    isLive: true,
    color: "#E2F6F0", // Soft Sage/Mint
    emoji: "🌿",
    link: "https://ufreshspa.vercel.app"
  },
  {
    id: 3,
    name: "Bali Private Driver (FM Prabowo)",
    category: "Travel Charter & Day Tour",
    status: "Live Demo",
    isLive: true,
    color: "#E1F5FE", // Soft Sky Blue
    emoji: "🚗",
    link: "https://balidriver.kriya.web.id"
  },
  {
    id: 4,
    name: "Canggu Surf Academy",
    category: "Surf School & Booking",
    status: "In Development",
    isLive: false,
    color: "#FFEAE5", // Soft Salmon
    emoji: "🏄‍♂️"
  },
  {
    id: 5,
    name: "Ubud Sanctuary Villas",
    category: "Premium Villa Rentals",
    status: "In Development",
    isLive: false,
    color: "#FFF9E6", // Soft Yellow
    emoji: "🏡"
  },
  {
    id: 6,
    name: "Seminyak Specialty Coffee",
    category: "Cafe & Table Ordering",
    status: "In Development",
    isLive: false,
    color: "#F1F8E9", // Soft Lime
    emoji: "☕"
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
          <h2 className="title">Client Project Showcases</h2>
          <p className="description">
            Explore our collection of high-converting, premium digital products. Click any live demo to experience the pixel-perfect design, Google Calendar syncs, and interactive booking flows.
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
