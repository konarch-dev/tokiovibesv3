import React, { useState } from 'react';

const ProductTryItOn = ({ isMobile }) => {
  const [skinTone, setSkinTone] = useState('#E5C4A1');
  const [gender, setGender] = useState('M');
  const [placement, setPlacement] = useState('ARM');

  const skinTones = ['#F5D0B5', '#E5C4A1', '#C59A72', '#7D512D', '#3B2211'];
  
  if (isMobile) {
    return (
      <div style={{ backgroundColor: '#000', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
          {['ARM', 'NECK', 'CHEST', 'BACK', 'LEG'].map(p => (
            <button
              key={p}
              onClick={() => setPlacement(p)}
              style={{
                display: 'block',
                background: 'transparent',
                border: placement === p ? '1px solid #cc0000' : '1px solid #333',
                marginBottom: '10px',
                width: '40px',
                height: '50px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              <img src={`/images/icon-${p.toLowerCase()}.svg`} alt={p} style={{ width: '20px', height: '20px', filter: placement === p ? 'none' : 'grayscale(1)' }} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
              <div style={{ color: placement === p ? '#cc0000' : '#888', fontSize: '8px', fontWeight: 'bold', marginTop: '2px' }}>{p}</div>
            </button>
          ))}
        </div>
        
        <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/images/dragon.jpg" alt="Preview" style={{ height: '100%', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #222' }}>
          <div style={{ color: '#888', fontSize: '10px', fontWeight: 'bold' }}>SKIN TONE</div>
          <div style={{ display: 'flex', gap: '5px' }}>
            {skinTones.map(color => (
              <button
                key={color}
                style={{ width: '25px', height: '15px', border: skinTone === color ? '1px solid #fff' : 'none', backgroundColor: color, cursor: 'pointer' }}
                onClick={() => setSkinTone(color)}
              />
            ))}
          </div>
        </div>
        <div style={{ color: '#555', fontSize: '8px', textAlign: 'center', marginTop: '15px' }}>
          * Preview may vary slightly from final look.
        </div>
      </div>
    );
  }

  return (
    <div className="pd-try-on">
      <div className="pd-try-on-bg-grid"></div>
      
      <div className="pd-try-on-content">
        <div className="pd-try-controls">
          <h2 className="pd-try-title">TRY IT ON</h2>
          <div className="pd-try-subtitle">PREVIEW ON YOUR BODY</div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">SKIN TONE</span>
            <div className="pd-skin-tones">
              {skinTones.map(color => (
                <button
                  key={color}
                  className={`pd-skin-btn ${skinTone === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSkinTone(color)}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">GENDER</span>
            <div className="pd-gender-btns">
              <button 
                className={`pd-gender-btn ${gender === 'M' ? 'active' : ''}`}
                onClick={() => setGender('M')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="14" r="6"/><line x1="14.24" y1="9.76" x2="20" y2="4"/><line x1="16" y1="4" x2="20" y2="4"/><line x1="20" y1="8" x2="20" y2="4"/></svg>
              </button>
              <button 
                className={`pd-gender-btn ${gender === 'F' ? 'active' : ''}`}
                onClick={() => setGender('F')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="6"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>
              </button>
            </div>
          </div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">PLACEMENT</span>
            <div className="pd-try-place-btns">
              {['ARM', 'NECK', 'CHEST', 'BACK'].map(p => (
                <button
                  key={p}
                  className={`pd-try-place-btn ${placement === p ? 'active' : ''}`}
                  onClick={() => setPlacement(p)}
                  title={p}
                >
                  <img src={`/images/icon-${p.toLowerCase()}.svg`} alt={p} style={{ width: '30px', height: '30px', filter: placement === p ? 'none' : 'grayscale(1)' }} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                  <span style={{ display: 'none' }}>{p.charAt(0)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pd-try-viewport">
          <img src="/images/dragon.jpg" alt="Try on preview" className="pd-try-img" />
        </div>
      </div>
    </div>
  );
};

export default ProductTryItOn;
