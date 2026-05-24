import React from 'react';

const ProductReviews = () => {
  return (
    <div className="pd-reviews-panel" style={{ flex: 1, backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '30px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <h3 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', margin: '0 0 20px 0', letterSpacing: '1px' }}>REVIEWS (1,284)</h3>
      
      {/* Score */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
        <span style={{ color: '#fff', fontSize: '42px', fontWeight: 'bold', lineHeight: '1' }}>4.8</span>
        <span style={{ color: '#cc0000', fontSize: '20px' }}>★★★★★</span>
      </div>
      
      {/* Based on / View All */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '20px' }}>
        <span style={{ color: '#555', fontSize: '10px' }}>Based on 1,284 reviews</span>
        <a href="#reviews" style={{ color: '#555', fontSize: '10px', textDecoration: 'underline' }}>View All</a>
      </div>
      
      {/* Single Review */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <img src="/images/men.png" alt="Rohan Verma" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
            <div>
              <div style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>Rohan Verma</div>
              <div style={{ color: '#888', fontSize: '10px' }}>Verified Buyer</div>
            </div>
            <span style={{ color: '#cc0000', fontSize: '12px' }}>★★★★★</span>
          </div>
          <p style={{ color: '#ccc', fontSize: '11px', lineHeight: '1.5', margin: 0 }}>
            Looks insane! Stayed for 6 days without fading. Totally worth it!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductReviews;
