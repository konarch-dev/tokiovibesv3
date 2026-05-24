import React, { useState } from 'react';

const ProductTabs = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState('DETAILS');

  return (
    <div className="pd-tabs-container" style={{ flex: 1, backgroundColor: '#0a0a0a', border: isMobile ? 'none' : '1px solid #222', padding: isMobile ? '0' : '30px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Dragon Graphic */}
      <img src="/images/dragon.jpg" alt="Background" style={{ position: 'absolute', right: '-50px', top: '20px', height: '120%', opacity: 0.1, objectFit: 'contain', pointerEvents: 'none' }} />
      
      {/* Tabs Header */}
      {!isMobile && (
        <div className="pd-tabs-header" style={{ display: 'flex', gap: '30px', borderBottom: '1px solid #222', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
          {['DETAILS', 'SHIPPING', 'RETURNS'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: activeTab === tab ? '#cc0000' : '#fff', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              paddingBottom: '15px',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid #cc0000' : '2px solid transparent'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      )}

      {/* Tabs Content */}
      <div className="pd-tabs-content" style={{ position: 'relative', zIndex: 1 }}>
        {activeTab === 'DETAILS' && (
          <div className="pd-tab-details" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #555', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>Lasts 5-7 Days</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Depending on placement<br/>and aftercare.</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #555', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>Waterproof</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Sweat, shower & swim<br/>resistant.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #555', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>Skin Safe</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Dermatologically tested<br/>& non-toxic ink.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #555', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>Premium Ink</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Ultra sharp details &<br/>deep black ink.</div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'SHIPPING' && <div style={{ color: '#888', fontSize: '14px' }}>Free shipping on all orders over ₹999. Standard delivery takes 3-5 business days.</div>}
        {activeTab === 'RETURNS' && <div style={{ color: '#888', fontSize: '14px' }}>We accept returns within 30 days of delivery if the product is unused and in original packaging.</div>}
      </div>
    </div>
  );
};

export default ProductTabs;
