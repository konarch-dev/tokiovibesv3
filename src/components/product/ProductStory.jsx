import React from 'react';

const ProductStory = ({ isMobile }) => {
  return (
    <div className="pd-story" style={isMobile ? { backgroundColor: 'transparent', border: 'none', color: '#fff', flexDirection: 'column' } : {}}>
      <div className="pd-story-text" style={isMobile ? { padding: '0' } : {}}>
        <div className="pd-story-subtitle" style={isMobile ? { color: '#fff', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px' } : {}}>THE STORY</div>
        {isMobile && <div className="pd-story-jap" style={{ color: '#cc0000', marginBottom: '15px' }}>反逆者のために作られた</div>}
        
        {!isMobile && <h2 className="pd-story-title">INSPIRED BY TOKYO STREET CULTURE.</h2>}
        {!isMobile && <p className="pd-story-p">ROOTED IN TRADITION. MADE FOR REBELS.</p>}
        
        <p className="pd-story-p" style={{ color: isMobile ? '#888' : '#555', fontSize: '11px', lineHeight: '1.6' }}>
          {isMobile ? 
            <>Rooted in tradition. Made for rebels.<br/><br/>The dragon symbolizes power, resilience and transformation.</> 
            : 
            "Dragon Rebirth symbolizes power, resilience, and transformation. A design born in the underground streets of Tokyo."
          }
        </p>
        {!isMobile && <div className="pd-story-jap">反逆者のために作られた</div>}
      </div>
      {/* On mobile, we might not render the image as it relies on the gallery, or we keep it. The screenshot doesn't show an image in "The Story" section, it goes straight to GALLERY. */}
      {!isMobile && <img src="/images/sc_geisha.png" alt="Story" className="pd-story-img" />}
    </div>
  );
};

export default ProductStory;
