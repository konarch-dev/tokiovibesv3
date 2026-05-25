import React from 'react';

const ProductRealVibes = () => {
  const images = [
    '/images/men.png',
    '/images/travel.jpg',
    '/images/women.png'
  ];

  return (
    <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
      {images.map((img, idx) => (
        <div key={idx} style={{ flex: '1', minWidth: '250px', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden' }}>
          <img src={img} alt={`Vibe ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
      <div style={{ flex: '1', minWidth: '250px', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden' }}>
         <img src="/images/dragon.jpg" alt="Vibe 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default ProductRealVibes;
