import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductHero = () => {
  const [size, setSize] = useState('Medium (15x9cm)');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState('/images/dragon.jpg');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({
      id: 'tokyo-dragon-001',
      name: 'Tokyo Dragon',
      price: 399,
      image: '/images/dragon.jpg',
      size: size,
      quantity: qty,
      isLimitedDrop: false
    });
    // Optional: show a toast or feedback
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const gallery = [
    '/images/dragon.jpg',
    '/images/sc_dragon.png',
    '/images/men.png',
    '/images/travel.jpg',
    '/images/women.png',
    '/images/samurai.jpg'
  ];

  return (
    <div className="pd-hero" style={{ flexWrap: 'wrap', borderBottom: 'none', padding: '0 0 40px 0', gap: '60px' }}>
      {/* Left Gallery Section */}
      <div className="pd-hero-left" style={{ display: 'flex', flexDirection: 'row', gap: '20px', flex: '1.2' }}>
        
        {/* Thumbnails */}
        <div className="pd-gallery-thumbs" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '80px', flex: 'none', overflowY: 'auto' }}>
          {gallery.map((img, idx) => (
            <div 
              key={idx}
              className={`pd-thumb ${activeImg === img ? 'active' : ''}`}
              onClick={() => setActiveImg(img)}
              style={{ width: '80px', height: '100px', border: activeImg === img ? '2px solid #000' : '1px solid #eee', opacity: activeImg === img ? 1 : 0.6, cursor: 'pointer', borderRadius: '4px', overflow: 'hidden' }}
            >
              <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
          {/* Scroll Down Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', background: 'rgba(0,0,0,0.6)', color: '#fff', borderRadius: '4px', cursor: 'pointer', position: 'relative' }}>
             <img src="/images/samurai.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1, opacity: 0.5 }} />
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
          </div>
        </div>
        
        {/* Main Image */}
        <div className="pd-main-img-container" style={{ flex: 1, position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={activeImg} alt="Tokyo Dragon" className="pd-main-img" style={{ width: '100%', height: 'auto', minHeight: '600px', objectFit: 'cover', border: 'none' }} />
          <button style={{ position: 'absolute', bottom: '20px', right: '20px', background: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
        </div>
      </div>
      
      {/* Right Details Section */}
      <div className="pd-hero-right" style={{ flex: '0.8', paddingTop: '20px' }}>
        
        <span className="pd-badge" style={{ backgroundColor: '#fff', border: 'none', color: '#cc0000', fontSize: '10px', fontWeight: '900', padding: '0', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          BEST SELLER
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#cc0000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </span>
        
        <h1 className="pd-title" style={{ fontSize: '32px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
          TOKYO DRAGON
        </h1>
        
        <div className="pd-subtitle" style={{ color: '#666', fontSize: '12px', fontWeight: '600', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>東京のドラゴン</span>
          <span style={{ color: '#ccc' }}>|</span>
          <span>Japanese Collection</span>
        </div>
        
        <div className="pd-rating" style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', gap: '2px', color: '#000' }}>
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#000"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '12px', marginLeft: '10px', color: '#000' }}>4.9</span>
          <span style={{ color: '#666', fontSize: '12px', marginLeft: '5px' }}>(320 reviews)</span>
        </div>
        
        <div className="pd-price-row" style={{ marginBottom: '10px', display: 'block' }}>
          <div className="pd-current-price" style={{ fontSize: '24px', fontWeight: '900' }}>₹399.00</div>
          <div style={{ color: '#888', fontSize: '10px', marginTop: '5px' }}>Tax included.</div>
        </div>

        <p className="pd-desc" style={{ fontSize: '12px', lineHeight: '1.6', marginBottom: '30px', marginTop: '20px' }}>
          Fierce. Bold. Timeless. The Tokyo Dragon represents<br/>
          strength, wisdom, and the untamed spirit of the streets.
        </p>

        {/* 2x2 Features Grid */}
        <div className="pd-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Lasts 3-7 Days</div>
              <div style={{ color: '#666', fontSize: '10px' }}>Fade-resistant ink</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Waterproof</div>
              <div style={{ color: '#666', fontSize: '10px' }}>Sweat & Water Resistant</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Skin Safe</div>
              <div style={{ color: '#666', fontSize: '10px' }}>Dermatologically Tested</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>Easy Application</div>
              <div style={{ color: '#666', fontSize: '10px' }}>Apply in 30 Seconds</div>
            </div>
          </div>
        </div>
        
        <div className="pd-options-group" style={{ marginBottom: '20px' }}>
          <div className="pd-options-header" style={{ marginBottom: '15px' }}>
            <span style={{ letterSpacing: '1px', fontSize: '11px', fontWeight: '900' }}>SIZE</span>
          </div>
          <div className="pd-size-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Small (10x6cm)', 'Medium (15x9cm)', 'Large (21x12cm)'].map(s => (
              <button 
                key={s}
                className={`pd-size-btn ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
                style={{ 
                  fontSize: '11px',
                  fontWeight: size === s ? 'bold' : 'normal',
                  padding: '12px 15px',
                  borderRadius: '4px'
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-quantity-row" style={{ marginBottom: '20px', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '1px' }}>QTY</span>
          <div className="pd-qty-selector" style={{ borderColor: '#eee', borderRadius: '4px', display: 'flex', width: '120px', justifyContent: 'space-between' }}>
            <button className="pd-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))} style={{ padding: '10px 15px' }}>-</button>
            <span className="pd-qty-val" style={{ padding: '10px 0' }}>{qty}</span>
            <button className="pd-qty-btn" onClick={() => setQty(qty + 1)} style={{ padding: '10px 15px' }}>+</button>
          </div>
        </div>
        
        <div className="pd-action-btns" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <button className="pd-add-to-cart" onClick={handleAddToCart} style={{ border: 'none', borderRadius: '4px', padding: '15px', fontSize: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', textTransform: 'uppercase', cursor: 'pointer' }}>
            ADD TO CART
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button className="pd-buy-now" onClick={handleBuyNow} style={{ borderRadius: '4px', padding: '15px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>
            BUY IT NOW
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: '#888', marginTop: '20px' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <span>Order in the next <strong style={{ color: '#cc0000' }}>2 hrs 15 mins</strong> for delivery by <strong>May 28</strong></span>
        </div>

      </div>
      
    </div>
  );
};

export default ProductHero;
