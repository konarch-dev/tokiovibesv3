import React from 'react';

const ProductBigFeatures = () => {
  return (
    <div className="pd-big-features">
      <div className="pd-big-feat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <div className="pd-big-feat-text">
          <strong>WATERPROOF</strong>
          <span>Showersafe & sweat resistant</span>
        </div>
      </div>
      <div className="pd-big-feat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <div className="pd-big-feat-text">
          <strong>SKIN SAFE</strong>
          <span>Dermatologically tested ink</span>
        </div>
      </div>
      <div className="pd-big-feat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <div className="pd-big-feat-text">
          <strong>LASTS 5-7 DAYS</strong>
          <span>Enjoy long lasting vibrant tattoos</span>
        </div>
      </div>
      <div className="pd-big-feat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <div className="pd-big-feat-text">
          <strong>PREMIUM PRINT</strong>
          <span>Ultra sharp details & deep black ink</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBigFeatures;
