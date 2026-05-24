import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const relatedProducts = [
  { id: 1, name: 'Samurai Code', price: '499', img: '/images/sc_samurai.png', gallery: ['/images/sc_samurai.png', '/images/samurai.jpg', '/images/men.png'], badge: 'BEST SELLER' },
  { id: 2, name: 'Koi Flow', price: '499', img: '/images/cat_spiritual.png', gallery: ['/images/cat_spiritual.png', '/images/travel.jpg', '/images/animal.png'], badge: 'NEW' },
  { id: 3, name: 'Oni Wrath', price: '499', img: '/images/sc_oni.png', gallery: ['/images/sc_oni.png', '/images/goth.png', '/images/anime-chaos.png'] },
  { id: 4, name: 'Sakura Storm', price: '499', img: '/images/cat_minimalist.png', gallery: ['/images/cat_minimalist.png', '/images/women.png', '/images/y2k.png'] },
  { id: 5, name: 'Cyber Dragon', price: '499', img: '/images/sc_dragon.png', gallery: ['/images/sc_dragon.png', '/images/dragon.jpg', '/images/anime.png'] }
];

const RelatedCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', minWidth: '0', height: '100%' }}>
      <div 
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ height: '100%', backgroundColor: '#050505', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
          <img src={product.gallery[1]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {product.badge && (
            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#cc0000', color: '#fff', fontSize: '8px', fontWeight: 'bold', padding: '3px 6px', letterSpacing: '1px' }}>
              {product.badge}
            </div>
          )}
          <div style={{ position: 'absolute', top: '10px', right: '10px', color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
        </div>
        
        <div style={{ textAlign: 'left', padding: '15px 10px', display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.name}</h3>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 4px 0' }}>
                <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>₹{product.price}</span>
                <span style={{ color: '#cc0000', fontSize: '10px', border: '1px solid #cc0000', padding: '2px 4px', borderRadius: '2px' }}>-38%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#cc0000', fontSize: '10px' }}>★★★★★</span>
                <span style={{ color: '#555', fontSize: '8px' }}>(842)</span>
              </div>
            </div>
            
            <button 
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'transparent', border: '1px solid #333', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer', flexShrink: 0 }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductRelated = ({ isMobile }) => {
  return (
    <div style={{ flex: 2, display: 'flex', flexDirection: 'column', minWidth: '0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#fff', fontSize: isMobile ? '14px' : '18px', fontWeight: '900', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>YOU MAY ALSO LIKE</h2>
        <a href="#viewall" style={{ color: '#888', fontSize: '10px', textDecoration: 'underline', letterSpacing: '1px' }}>VIEW ALL</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: '15px' }}>
        {relatedProducts.slice(0, isMobile ? 2 : 4).map(p => (
          <RelatedCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductRelated;
