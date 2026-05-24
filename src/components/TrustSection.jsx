import React from 'react';

const TrustSection = () => {
  // Generate 16 placeholder images for the grid
  const gridImages = Array(16).fill('/images/tattoo_lion.png');

  return (
    <div className="trust-wrapper">
      <section className="trust-section container">
        
        <h2 className="trust-main-title">
          Trusted by <span className="trust-red">1 Lakh+</span> happy <span className="trust-red">customers</span>
        </h2>

        <div className="trust-card-container">
          
          <div className="trust-text-panel">
            <h3 className="trust-subtitle">Your skin, your canvas</h3>
            <p className="trust-desc">
              Tokyo Vibes gives you the real tattoo look<br/>
              — without the lifetime commitment.<br/>
              Semi-permanent designs that last 1-2 weeks<br/>
              and fade naturally.
            </p>
            <button className="trust-ig-btn">
              Follow Us On Instagram
            </button>
          </div>
          
          <div className="trust-grid-panel">
            {gridImages.map((img, index) => (
              <div key={index} className="trust-grid-item">
                <img src={img} alt={`Customer ${index + 1}`} />
              </div>
            ))}
          </div>

        </div>

      </section>
    </div>
  );
};

export default TrustSection;
