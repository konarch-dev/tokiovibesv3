import React, { useEffect } from 'react';
import '../product.css';
import ProductHero from '../components/product/ProductHero';
import ProductHowTo from '../components/product/ProductHowTo';
import ProductRealVibes from '../components/product/ProductRealVibes';
import ProductRelated from '../components/product/ProductRelated';
import ProductStory from '../components/product/ProductStory';
import ProductAccordions from '../components/product/ProductAccordions';

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail-page">
      <div className="pd-container">
        <div className="pd-breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '30px' }}>
          <span>Home</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>Shop</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>Japanese Collection</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span style={{ fontWeight: '900' }}>Tokyo Dragon</span>
        </div>

        <ProductHero />
        
        {/* Mobile Accordions (hidden on desktop) */}
        <div className="pd-mobile-only">
          <ProductAccordions />
        </div>
      </div>

      {/* Desktop Story (hidden on mobile) */}
      <div className="pd-desktop-only">
        <ProductStory />
      </div>

      <div className="pd-container">
        <ProductHowTo />

        <div style={{ marginTop: '80px' }}>
          <h2 className="pd-section-title" style={{ fontSize: '18px', marginBottom: '10px' }}>REAL PEOPLE. REAL VIBES.</h2>
          <div style={{ color: '#cc0000', fontSize: '10px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>#tokyovibes</div>
          <ProductRealVibes />
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 className="pd-section-title" style={{ fontSize: '18px', marginBottom: '30px', textAlign: 'left' }}>YOU MAY ALSO LIKE</h2>
          <ProductRelated />
        </div>
      </div>
      
      {/* Bottom Features Footer Strip */}
      <div className="pd-features-strip-top pd-mobile-hide" style={{ flexWrap: 'wrap', gap: '20px' }}>
        <div className="pd-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <div style={{ lineHeight: '1.4' }}>FAST DELIVERY<br/><span style={{fontWeight:'normal'}}>2-4 Business Days</span></div>
        </div>
        <div className="pd-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div style={{ lineHeight: '1.4' }}>PREMIUM QUALITY<br/><span style={{fontWeight:'normal'}}>Imported Ink & Materials</span></div>
        </div>
        <div className="pd-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <div style={{ lineHeight: '1.4' }}>SECURE PAYMENT<br/><span style={{fontWeight:'normal'}}>100% Safe & Secure</span></div>
        </div>
        <div className="pd-feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          <div style={{ lineHeight: '1.4' }}>EASY RETURNS<br/><span style={{fontWeight:'normal'}}>Hassle Free Returns</span></div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
