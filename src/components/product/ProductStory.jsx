import React from 'react';

const ProductStory = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', width: '100%', margin: '60px 0' }}>
      <div className="pd-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minHeight: '350px' }}>
        
        {/* Left Text */}
        <div style={{ flex: 1, padding: '40px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <div style={{ border: '1px solid #cc0000', color: '#cc0000', padding: '10px 20px', fontSize: '32px', fontWeight: 'bold' }}>竜</div>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>DESIGN STORY</h2>
              <div style={{ color: '#cc0000', fontSize: '10px', marginTop: '5px' }}>DRAGON</div>
            </div>
          </div>
          <p style={{ color: '#ccc', fontSize: '12px', lineHeight: '1.8', maxWidth: '350px', marginLeft: '85px' }}>
            Inspired by ancient Japanese folklore, the dragon<br/>
            symbolizes power, protection, and transformation.<br/><br/>
            A timeless piece for those who lead with<br/>
            courage and ambition.
          </p>
        </div>
        
        {/* Right Images (using background image or absolute positioning to mimic the graphic) */}
        <div style={{ flex: 1, position: 'relative', height: '350px', overflow: 'hidden', display: 'flex' }}>
          {/* We will just use an image for the right side for simplicity if the asset exists, otherwise we build it */}
          <img src="/images/samurai.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
          <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', writingMode: 'vertical-rl', fontSize: '24px', fontWeight: 'bold', color: '#fff', letterSpacing: '5px' }}>
            東京バイブス
          </div>
          <div style={{ position: 'absolute', right: '120px', top: '50%', transform: 'translateY(-50%)', writingMode: 'vertical-rl', fontSize: '30px', fontWeight: '900', color: 'transparent', WebkitTextStroke: '1px #555', letterSpacing: '10px' }}>
            STREET CULTURE
          </div>
          <div style={{ position: 'absolute', right: '20px', bottom: '20px', width: '80px', height: '80px', border: '1px solid #cc0000', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#cc0000', fontSize: '32px' }}>
            魔
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductStory;
