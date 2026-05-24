import React from 'react';

const MobileFeaturesStrip = () => {
  return (
    <div className="mobile-features-strip mobile-only">
      <div className="mf-item">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
        <span>SKIN SAFE</span>
      </div>
      <div className="mf-item">
        <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
        <span>WATERPROOF</span>
      </div>
      <div className="mf-item">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>LASTS 5-7 DAYS</span>
      </div>
      <div className="mf-item">
        <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        <span>EASY TO APPLY</span>
      </div>
    </div>
  );
};

export default MobileFeaturesStrip;
