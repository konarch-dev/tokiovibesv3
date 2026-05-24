import React from 'react';

const ProductHowTo = ({ isMobile }) => {
  const steps = [
    { num: 1, title: 'CLEAN SKIN', desc: 'Make sure the area is clean and dry.', img: '/images/sc_dragon.png' },
    { num: 2, title: 'REMOVE FILM', desc: 'Remove transparent film and place tattoo facedown.', img: '/images/sc_samurai.png' },
    { num: 3, title: 'WET FOR 30 SECS', desc: 'Wet the paper with a sponge or cloth.', img: '/images/travel.jpg' },
    { num: 4, title: 'REMOVE PAPER', desc: 'Gently slide off the paper backing.', img: '/images/sc_geisha.png' },
    { num: 5, title: 'FLEX YOUR VIBE', desc: 'Let it dry & show off your new vibe.', img: '/images/men.png' }
  ];

  if (isMobile) {
    return (
      <div style={{ backgroundColor: '#000', padding: '0' }}>
        <h3 style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px', textTransform: 'uppercase' }}>How To Apply</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {steps.map(step => (
            <div key={step.num} style={{ display: 'flex', gap: '15px' }}>
              <div style={{ position: 'relative', width: '60px', height: '60px', flexShrink: 0 }}>
                <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.8)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#cc0000', color: '#fff', width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold' }}>
                  {step.num}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>{step.title}</div>
                <div style={{ color: '#888', fontSize: '10px', lineHeight: '1.4' }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pd-howto-panel" style={{ flex: 2, backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '30px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', margin: '0 0 5px 0', letterSpacing: '1px' }}>HOW TO APPLY</h3>
          <p style={{ color: '#888', fontSize: '12px', margin: 0 }}>Quick & Easy Steps</p>
        </div>
        <a href="#guide" style={{ color: '#cc0000', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          View Full Guide <span>→</span>
        </a>
      </div>

      {/* Steps Row */}
      <div style={{ display: 'flex', gap: '15px', width: '100%' }}>
        {steps.map(step => (
          <div key={step.num} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Image Box */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', marginBottom: '15px' }}>
              <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(0.8)' }} />
              {/* Number Badge */}
              <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#cc0000', color: '#fff', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', borderBottomRightRadius: '4px' }}>
                {step.num}
              </div>
            </div>
            
            {/* Text */}
            <div style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold', marginBottom: '8px' }}>
              {step.title}
            </div>
            <div style={{ color: '#888', fontSize: '10px', lineHeight: '1.4' }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHowTo;
