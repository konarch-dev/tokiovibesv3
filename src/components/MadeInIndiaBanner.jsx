import React from 'react';

const MadeInIndiaBanner = () => {
  return (
    <div className="mii-banner-section mobile-only">
      <div className="mii-banner" style={{ backgroundImage: "url('/images/made_in_india_bg.png')" }}>
        <div className="mii-overlay"></div>
        
        <div className="mii-content">
          <h2 className="mii-title text-red">MADE IN INDIA</h2>
          <p className="mii-subtitle">FOR EVERY INDIAN VIBE</p>
          <div className="mii-divider">
            <div className="mii-line"></div>
            <div className="mii-chakra-small">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>
              </svg>
            </div>
            <div className="mii-line"></div>
          </div>
        </div>
        
        <div className="mii-chakra-large">
          <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MadeInIndiaBanner;
