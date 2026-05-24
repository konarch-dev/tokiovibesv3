import React from 'react';

const ProductRealVibes = ({ isMobile }) => {
  const images = [
    '/images/men.png',
    '/images/travel.jpg',
    '/images/women.png',
    '/images/dragon.jpg',
    '/images/sc_samurai.png'
  ];

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src={images[0]} alt="Gallery 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
          </div>
          <div style={{ aspectRatio: '3/4' }}>
            <img src={images[1]} alt="Gallery 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src={images[2]} alt="Gallery 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
          </div>
          <div style={{ aspectRatio: '3/4' }}>
            <img src={images[3]} alt="Gallery 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
          </div>
          <div style={{ aspectRatio: '3/4' }}>
            <img src={images[4]} alt="Gallery 5" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
          </div>
        </div>
        <button style={{ width: '100%', background: 'transparent', border: '1px solid #333', color: '#fff', padding: '15px', marginTop: '10px', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', cursor: 'pointer' }}>
          VIEW FULL GALLERY
        </button>
      </div>
    );
  }

  return (
    <div className="pd-real-vibes-horizontal">
      <div className="pd-vibes-left">
        <h2 className="pd-section-title" style={{ fontSize: '18px', marginBottom: '5px' }}>REAL PEOPLE.<br/>REAL VIBES.</h2>
        <div style={{ color: '#970C0F', fontSize: '10px', fontWeight: 'bold', marginBottom: '20px' }}>#TOKIYOVIBE</div>
        <button className="pd-vibe-btn">VIEW GALLERY</button>
      </div>
      
      <div className="pd-vibes-right">
        {images.slice(0, 4).map((img, idx) => (
          <div key={idx} className="pd-vibe-item">
            <img src={img} alt={`Vibe ${idx}`} />
          </div>
        ))}
        <div className="pd-vibe-cta-box">
          <h3>JOIN SOK+<br/>REBELS</h3>
          <p>TAG US TO GET<br/>FEATURED</p>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ProductRealVibes;
