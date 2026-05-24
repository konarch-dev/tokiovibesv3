import React, { useEffect } from 'react';
import '../product.css';
import ProductHero from '../components/product/ProductHero';
import ProductHowTo from '../components/product/ProductHowTo';
import ProductTabs from '../components/product/ProductTabs';
import ProductRealVibes from '../components/product/ProductRealVibes';
import ProductRelated from '../components/product/ProductRelated';
import ProductReviews from '../components/product/ProductReviews';

import ProductStory from '../components/product/ProductStory';
import ProductTryItOn from '../components/product/ProductTryItOn';
import MobileStickyNav from '../components/product/MobileStickyNav';
import FrequentlyBoughtTogether from '../components/product/FrequentlyBoughtTogether';

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail-page" style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className="pd-container">
        <div className="pd-breadcrumbs" style={{ color: '#ccc', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>HOME</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>SHOP</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span style={{ color: '#fff' }}>DRAGON REBIRTH</span>
        </div>

        <ProductHero />

        {/* Mobile Sticky Nav */}
        <div className="pd-mobile-only">
          <MobileStickyNav />
        </div>

        {/* Desktop Layout Wrapper */}
        <div className="pd-desktop-only">
          <div className="pd-split-section" style={{ height: 'auto', alignItems: 'stretch', gap: '20px', margin: '40px 0' }}>
            <ProductHowTo />
            <ProductTabs />
          </div>

          <h2 className="pd-section-title">REAL PEOPLE. REAL VIBES.</h2>
          <ProductRealVibes />

          <div className="pd-split-section" style={{ height: 'auto', alignItems: 'stretch', gap: '20px', margin: '40px 0' }}>
            <ProductRelated />
            <ProductReviews />
          </div>
        </div>

        {/* Mobile Layout Wrapper */}
        <div className="pd-mobile-only">
          <div id="details" style={{ marginTop: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px' }}>PRODUCT DETAILS</h3>
            <ProductTabs isMobile={true} />
            <ProductStory isMobile={true} />
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px' }}>GALLERY</h3>
            <ProductRealVibes isMobile={true} />
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <ProductRelated isMobile={true} />
          </div>

          <div style={{ marginTop: '40px' }} id="how">
            <h3 style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px', textTransform: 'uppercase' }}>Placement Preview</h3>
            <ProductTryItOn isMobile={true} />
          </div>

          <div style={{ marginTop: '40px' }}>
            <ProductHowTo isMobile={true} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderTop: '1px solid #333', marginTop: '30px' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5" style={{ marginBottom: '5px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>SAFE INGREDIENTS<br/><span style={{ color: '#888', fontWeight: 'normal' }}>Skin friendly & non-toxic</span></div>
            </div>
            <div style={{ textAlign: 'center', flex: 1, borderLeft: '1px solid #333', borderRight: '1px solid #333' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5" style={{ marginBottom: '5px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>CRUELTY FREE<br/><span style={{ color: '#888', fontWeight: 'normal' }}>Not tested on animals</span></div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5" style={{ marginBottom: '5px' }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#fff' }}>MADE IN INDIA<br/><span style={{ color: '#888', fontWeight: 'normal' }}>Proudly made for you</span></div>
            </div>
          </div>

          <div style={{ marginTop: '40px' }} id="reviews">
            <FrequentlyBoughtTogether />
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProductDetail;
