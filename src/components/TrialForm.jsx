import React, { useState } from 'react';
import './TrialForm.css';

const TrialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    mapsLink: '',
    whatsapp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.businessName || !formData.mapsLink || !formData.whatsapp) {
      alert('Please fill in all required fields.');
      return;
    }

    // Kriya Studio WhatsApp Contact Number
    const studioWA = '6281289653355';

    // Format WhatsApp message
    const msg = `Hello Kriya Web Studio ⚡
I would like to claim my 14-Day Free Redesign Trial.

*Application details:*
• Name: ${formData.name}
• Business Name: ${formData.businessName}
• Google Maps/Website: ${formData.mapsLink}
• Contact WhatsApp: ${formData.whatsapp}

Please let me know when the premium website draft is ready. Thank you!`;

    const url = `https://wa.me/${studioWA}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="trial" className="section trial-section">
      <div className="container">
        
        <div className="trial-grid">
          
          {/* Left Column: Form Card */}
          <div className="trial-form-container">
            <h3 className="form-title">Claim Your Free Website Draft</h3>
            <p className="form-subtitle">Submit your maps link. We will build your free trial design in 3 days.</p>
            
            <form onSubmit={handleSubmit} className="trial-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Bali Healing Spa, Canggu Rental"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mapsLink">Google Maps Link / Current Website</label>
                <input
                  type="url"
                  id="mapsLink"
                  name="mapsLink"
                  value={formData.mapsLink}
                  onChange={handleChange}
                  placeholder="e.g. https://maps.app.goo.gl/..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="e.g. +62 812-3456-7890"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Apply for Free Redesign Draft 🚀
              </button>
            </form>
          </div>

          {/* Right Column: Guarantees/Pitch copy */}
          <div className="trial-pitch">
            <span className="pitch-tag">WHY KRIYA WEB STUDIO?</span>
            <h2>Zero Risk. <br />Infinite Value.</h2>
            
            <div className="pitch-bullets">
              <div className="pitch-bullet">
                <span className="bullet-icon">💳</span>
                <div>
                  <h4>No Credit Card Required</h4>
                  <p>No billing details needed. We don't ask you to pay before seeing real results in your hands.</p>
                </div>
              </div>

              <div className="pitch-bullet">
                <span className="bullet-icon">⏱️</span>
                <div>
                  <h4>Ready in 3 Days</h4>
                  <p>Our team works fast to create a stunning, fully functional design customized for your brand.</p>
                </div>
              </div>

              <div className="pitch-bullet">
                <span className="bullet-icon">📱</span>
                <div>
                  <h4>Booking Planner Included</h4>
                  <p>Your free trial landing page includes a fully working WhatsApp pricing calculator and scheduler tool.</p>
                </div>
              </div>

              <div className="pitch-bullet">
                <span className="bullet-icon">❌</span>
                <div>
                  <h4>No Obligations</h4>
                  <p>If you don't want to continue after 14 days, you can walk away. The website draft will be quietly taken down.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrialForm;
