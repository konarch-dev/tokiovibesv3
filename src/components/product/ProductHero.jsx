import React, { useState } from 'react';

const ProductHero = () => {
  const [size, setSize] = useState('S');
  const [placement, setPlacement] = useState('ARM');
  const [qty, setQty] = useState(1);

  const placements = [
    { id: 'ARM', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
    { id: 'NECK', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg> },
    { id: 'CHEST', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: 'BACK', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> }
  ];

  const [activeImg, setActiveImg] = useState('/images/dragon.jpg');
  
  const gallery = [
    '/images/dragon.jpg',
    '/images/sc_dragon.png',
    '/images/men.png',
    '/images/travel.jpg',
    '/images/women.png',
    '/images/samurai.jpg'
  ];

  return (
    <div className="pd-hero" style={{ flexWrap: 'wrap', backgroundColor: '#000' }}>
      <div className="pd-hero-left">
        <div className="pd-main-img-container">
          <img src={activeImg} alt="Dragon Rebirth" className="pd-main-img" />
          <button className="pd-img-nav left" style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', background: 'transparent', border: '1px solid #555', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="pd-img-nav right" style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', background: 'transparent', border: '1px solid #555', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="pd-jap-overlay" style={{ top: '40px', right: '40px', textShadow: 'none' }}>
            東京の魂
          </div>
          <div className="pd-img-counter" style={{ position: 'absolute', bottom: '20px', right: '20px', border: '1px solid #555', padding: '5px 15px', borderRadius: '20px', color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
            1 / 8
          </div>
          <div className="pd-img-badge" style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
             <div style={{ color: '#cc0000', fontSize: '40px', fontWeight: '900', lineHeight: '1', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-10px', height: '80px' }}>東京</div>
             <div style={{ fontSize: '8px', color: '#888', marginLeft: '10px', fontWeight: 'bold', letterSpacing: '1px' }}>INSPIRED BY<br/><span style={{ color: '#cc0000' }}>TOKYO</span><br/>STREET CULTURE</div>
          </div>
        </div>
        <div className="pd-gallery-container">
          <div className="pd-gallery-thumbs">
            {gallery.map((img, idx) => (
              <div 
                key={idx}
                className={`pd-thumb ${activeImg === img ? 'active' : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <img src={img} alt={`Thumb ${idx}`} />
              </div>
            ))}
          </div>
          <div className="pd-thumb-chevron" style={{ transform: 'rotate(-90deg)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
      </div>
      
      <div className="pd-hero-right">
        <span className="pd-badge" style={{ borderColor: '#cc0000', color: '#cc0000', backgroundColor: '#000', padding: '4px 8px' }}>BEST SELLER</span>
        <h1 className="pd-title" style={{ color: '#fff', fontSize: '28px' }}>DRAGON REBIRTH</h1>
        <div className="pd-subtitle" style={{ color: '#ccc', textTransform: 'none', letterSpacing: 'normal' }}>Japanese Temporary Tattoo</div>
        
        <div className="pd-rating">
          <span className="text-red" style={{ color: '#cc0000' }}>★★★★★</span>
          <span className="text-gray" style={{ color: '#888' }}>(1,284 Reviews)</span>
        </div>
        
        <div className="pd-price-row" style={{ marginBottom: '20px' }}>
          <span className="pd-current-price" style={{ color: '#cc0000', fontSize: '32px' }}>₹499</span>
          <span className="pd-old-price" style={{ color: '#666' }}>₹799</span>
          <span className="pd-discount" style={{ color: '#cc0000', borderColor: '#cc0000', borderRadius: '4px', padding: '4px 10px', fontSize: '14px' }}>-37%</span>
        </div>

        <p className="pd-desc" style={{ color: '#aaa', fontSize: '12px', lineHeight: '1.8', marginBottom: '30px' }}>
          Rooted in tradition. Made for rebels.<br/>
          The dragon symbolizes power, resilience<br/>
          and transformation.
        </p>

        <div className="pd-hero-features" style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
          <div className="pd-hf-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Waterproof<br/><span style={{color:'#888', fontWeight:'normal'}}>5-7 Days</span></div>
          </div>
          <div className="pd-hf-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Skin Safe<br/><span style={{color:'#888', fontWeight:'normal'}}>Non-Toxic</span></div>
          </div>
          <div className="pd-hf-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Easy To Apply<br/><span style={{color:'#888', fontWeight:'normal'}}>& Remove</span></div>
          </div>
        </div>
        
        <div className="pd-options-group">
          <div className="pd-options-header">
            <span style={{ color: '#fff', letterSpacing: '1px' }}>SIZE</span>
            <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#aaa', fontWeight: 'normal' }}>Size Guide</span>
          </div>
          <div className="pd-size-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['S', 'M', 'L'].map(s => (
              <button 
                key={s}
                className={`pd-size-btn ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
                style={{ backgroundColor: 'transparent', borderColor: size === s ? '#cc0000' : '#333', color: size === s ? '#cc0000' : '#888', flex: '1 1 25%', minWidth: '60px', padding: '12px 0' }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-options-group">
          <div className="pd-options-header">
            <span style={{ color: '#fff', letterSpacing: '1px' }}>PLACEMENT</span>
            <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#aaa', fontWeight: 'normal' }}>See Preview</span>
          </div>
          <div className="pd-placement-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[...placements, { id: 'LEG', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><path d="M10 2v20"/><path d="M14 2v20"/></svg> }].map(p => (
              <button 
                key={p.id}
                className={`pd-place-btn ${placement === p.id ? 'active' : ''}`}
                onClick={() => setPlacement(p.id)}
                style={{ backgroundColor: 'transparent', borderColor: placement === p.id ? '#cc0000' : '#333', color: placement === p.id ? '#cc0000' : '#888', flex: '1 1 28%', minWidth: '70px', padding: '10px 0' }}
              >
                {p.icon}
                <span style={{ textTransform: 'capitalize' }}>{p.id.toLowerCase()}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-quantity-row">
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>QUANTITY</span>
          <div className="pd-qty-selector" style={{ borderColor: '#333' }}>
            <button className="pd-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))} style={{ color: '#fff' }}>-</button>
            <span className="pd-qty-val" style={{ color: '#fff' }}>{qty}</span>
            <button className="pd-qty-btn" onClick={() => setQty(qty + 1)} style={{ color: '#fff' }}>+</button>
          </div>
        </div>
        
        <div className="pd-action-btns">
          <button className="pd-add-to-cart" style={{ backgroundColor: '#cc0000', color: '#fff', border: 'none' }}>
            ADD TO CART
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
          <button className="pd-buy-now" style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #555' }}>BUY NOW</button>
        </div>

      </div>
      
      {/* Bottom Features Strip */}
      <div className="pd-hero-bottom-strip" style={{ display: 'flex', justifyContent: 'center', gap: '50px', width: '100%', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #222' }}>
        <div className="pd-bs-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', width: '100%' }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Free Shipping on orders above ₹999</div>
        </div>
        <div className="pd-bs-item pd-mobile-hide" style={{ alignItems: 'center', gap: '10px' }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Secure Payment<br/><span style={{color:'#888', fontWeight:'normal'}}>100% Safe</span></div>
        </div>
        <div className="pd-bs-item pd-mobile-hide" style={{ alignItems: 'center', gap: '10px' }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Easy Returns<br/><span style={{color:'#888', fontWeight:'normal'}}>No Questions</span></div>
        </div>
        <div className="pd-bs-item pd-mobile-hide" style={{ alignItems: 'center', gap: '10px' }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>Premium Quality<br/><span style={{color:'#888', fontWeight:'normal'}}>Made for Rebels</span></div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
