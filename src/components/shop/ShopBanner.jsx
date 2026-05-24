import React from 'react';

const ShopBanner = () => {
  return (
    <div className="shop-banner">
      <div className="container shop-banner-content">
        <div className="sb-left">
          <div className="sb-breadcrumb mobile-only">HOME &gt; SHOP</div>
          <div className="sb-jap-title">東京の魂</div>
          <h1 className="sb-main-title">ALL TATTOOS</h1>
          <p className="sb-subtitle">
            EXPLORE 150+ DESIGNS INSPIRED BY<br />
            TOKYO STREET CULTURE, ANIME & TRADITION.
          </p>
        </div>
        <div className="sb-right">
          <div className="sb-globe-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div className="sb-badge-text">
              <span className="sb-badge-num">150+</span>
              <span className="sb-badge-label">DESIGNS</span>
            </div>
          </div>
          <div className="sb-barcode"></div>
        </div>
        <div className="sb-bg-graphic"></div>
      </div>
    </div>
  );
};

export default ShopBanner;
