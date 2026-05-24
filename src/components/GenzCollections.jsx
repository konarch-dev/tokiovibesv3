import React from 'react';

const largeCards = [
  { id: 1, tagIcon: '🔥', tagText: 'VIRAL', title: 'ANIME\nCHAOS', subtitle: 'JAPANESE AESTHETICS.\nREBEL ENERGY.\nPURE CHAOS.', img: '/images/anime-chaos.png', type: 'anime' },
  { id: 2, tagIcon: '⚡', tagText: 'TRENDING', title: 'DESI\nVIBE', subtitle: 'INDIAN ROOTS.\nMODERN STREETS.\nTIMELESS INK.', img: '/images/desi-vibes.png', type: 'desi' }
];

const smallCards = [
  { id: 1, tagIcon: '🔥', tagText: 'HOT', title: 'भारत\nINK', subtitle: 'TRADITIONAL ROOTS.\nMODERN SOUL.', img: '/images/bharat.png', accent: 'moon' },
  { id: 2, tagIcon: '⚡', tagText: 'TOKYO DROP', title: 'TOKYO\nDRIP', subtitle: 'STREET STYLE.\nSHARP DESIGNS.\nTOKYO NIGHTS.', img: '/images/tkdrip.png', accent: 'star' },
  { id: 3, tagIcon: '💜', tagText: 'NEW', title: 'Y2K\nBABE', subtitle: 'Y2K ENERGY.\nBOLD & ICONIC.\nMADE FOR GENZ.', img: '/images/y2k.png', accent: 'butterfly' },
  { id: 4, tagIcon: '🌙', tagText: 'DARK', title: 'GOTH\nSOUL', subtitle: 'DARK. ROMANTIC.\nBEAUTIFULLY BROKEN.', img: '/images/goth.png', accent: 'crosshair' },
  { id: 5, tagIcon: '⭐', tagText: 'KAWAII', title: 'KAWAII\nINK', subtitle: 'CUTE OUTSIDE.\nREBEL INSIDE.', img: '/images/kawaii.png', accent: 'moon' }
];

const GenzCollections = () => {
  return (
    <div className="genz-wrapper">
      <section className="genz-section container">

        <div className="genz-top-deco">
          <span className="genz-deco-text">TOKIYO <span className="text-red">VIBE</span> //////////////</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: '10px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{ marginLeft: '10px' }}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </div>

        <div className="genz-top-layout">
          <div className="genz-info-panel">
            <h2 className="genz-main-title">
              GENZ<br />
              <span className="text-red">Collections</span>
            </h2>
            <p className="genz-desc">
              INDIAN STREETS. TOKYO DREAMS.<br />
              ONE VIBE. INFINITE EXPRESSIONS.
            </p>
            <div className="genz-divider"></div>
            <p className="genz-desc-small">
              TATTOO STYLES INSPIRED BY<br />
              INDIAN CULTURE, ANIME, STREETWEAR<br />
              & TOKYO VIBES.
            </p>

            <div className="genz-barcode-block">
              <div className="genz-red-asterisk-box">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="3.3" y1="7" x2="20.7" y2="17" />
                  <line x1="3.3" y1="17" x2="20.7" y2="7" />
                </svg>
              </div>
              <div className="genz-barcode-text">
                TOKIYO VIBE<br />// EST. 2024
              </div>
              <div className="genz-barcode-graphics">
                {/* Simulated barcode */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} style={{
                    width: Math.random() > 0.5 ? '2px' : '4px',
                    height: '100%',
                    backgroundColor: '#fff',
                    marginRight: Math.random() > 0.5 ? '2px' : '4px'
                  }}></div>
                ))}
              </div>
            </div>

            <button className="genz-explore-btn">
              EXPLORE ALL COLLECTIONS ↗
            </button>
          </div>

          <div className="genz-large-cards-grid">
            {largeCards.map(card => (
              <div key={card.id} className="genz-large-card" style={{ backgroundImage: `url(${card.img})` }}>
                <div className="genz-card-overlay"></div>
                <div className="genz-card-tag">
                  {card.tagIcon} {card.tagText}
                </div>

                <div className="genz-card-content">
                  {card.type === 'anime' && <div className="genz-card-jap-title">アニメ・カオス</div>}
                  {card.type === 'desi' && <div className="genz-card-jap-title" style={{ textAlign: 'right' }}>देशी<br /><span className="text-red">वाइब</span></div>}

                  <h3 className="genz-card-title">
                    {card.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 ? <span className="text-red">{line}</span> : line}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="genz-card-subtitle">{card.subtitle}</p>
                  <a href="#" className="genz-view-link">VIEW COLLECTION ↗</a>
                </div>

                <div className="genz-card-right-deco">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5">
                    <circle cx="12" cy="12" r="8" />
                    <line x1="12" y1="0" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="24" y2="12" />
                  </svg>
                  <div className="genz-vertical-barcode">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} style={{ height: Math.random() > 0.5 ? '1px' : '2px', width: '100%', backgroundColor: '#fff', marginBottom: '2px' }}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="genz-far-right-bar">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="3.3" y1="7" x2="20.7" y2="17" />
              <line x1="3.3" y1="17" x2="20.7" y2="7" />
            </svg>
            <div className="genz-watermark-vertical">東京の魂</div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <div className="genz-vertical-barcode" style={{ marginTop: '20px', width: '20px' }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ height: Math.random() > 0.5 ? '2px' : '4px', width: '100%', backgroundColor: '#fff', marginBottom: '2px', opacity: 0.5 }}></div>
              ))}
            </div>
            <div className="genz-diagonal-stripes-vertical"></div>
          </div>
        </div>

        <div className="genz-small-cards-grid">
          {smallCards.map(card => (
            <div key={card.id} className="genz-small-card" style={{ backgroundImage: `url(${card.img})` }}>
              <div className="genz-card-overlay"></div>
              <div className="genz-card-tag" style={{ fontSize: '10px', padding: '2px 6px' }}>
                {card.tagIcon} {card.tagText}
              </div>

              <div className="genz-small-card-content">
                <h3 className="genz-small-card-title">
                  {card.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 ? <span className="text-red">{line}</span> : line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="genz-small-card-subtitle">{card.subtitle}</p>
                <a href="#" className="genz-view-link" style={{ fontSize: '8px' }}>VIEW COLLECTION ↗</a>
              </div>

              <div className="genz-small-card-right-deco">
                {card.accent === 'moon' && <span style={{ color: '#e50914', fontSize: '14px' }}>🌙</span>}
                {card.accent === 'star' && <span style={{ color: '#e50914', fontSize: '14px' }}>⭐</span>}
                {card.accent === 'butterfly' && <span style={{ color: '#e50914', fontSize: '14px' }}>🦋</span>}
                {card.accent === 'crosshair' && <span style={{ color: '#e50914', fontSize: '14px' }}>⊕</span>}

                <div className="genz-vertical-barcode" style={{ marginTop: 'auto' }}>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} style={{ height: Math.random() > 0.5 ? '1px' : '2px', width: '100%', backgroundColor: '#fff', marginBottom: '2px' }}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="genz-footer-bar">
          <div className="genz-footer-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="1" style={{ marginRight: '15px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>INDIAN STREETS</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="3.3" y1="7" x2="20.7" y2="17" />
              <line x1="3.3" y1="17" x2="20.7" y2="7" />
            </svg>
            <span>TOKYO NIGHTS</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="3.3" y1="7" x2="20.7" y2="17" />
              <line x1="3.3" y1="17" x2="20.7" y2="7" />
            </svg>
            <span>ONE VIBE</span>
          </div>

          <div className="genz-footer-right">
            <a href="#" className="genz-shop-all-link">SHOP GENZ COLLECTIONS ↗</a>
            <div className="genz-diagonal-stripes-horizontal"></div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default GenzCollections;
