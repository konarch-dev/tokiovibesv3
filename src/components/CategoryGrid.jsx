import React from 'react';

const categories = [
  { name: 'Men Tattoo', img: '/images/men.png' },
  { name: 'Women Tattoo', img: '/images/women.png' },
  { name: 'New Arrival', img: '/images/new.png' },
  { name: 'Animal Tattoo', img: '/images/animal.png' },
  { name: 'Flora Tattoo', img: '/images/flora.png' },
  { name: 'Mythology Tattoo', img: '/images/myth.png' },
  { name: 'Full Sleeve\nTattoo', img: '/images/fs.png' },
  { name: 'Spiritual Tattoo', img: '/images/spirtual.png' },
  { name: 'Anime Tattoo', img: '/images/anime.png' },
  { name: 'Finger Tattoo', img: '/images/cat_finger.png' }
];

const mobileCategories = [
  { name: 'JAPANESE', iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { name: 'DRAGON', iconPath: 'M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9' },
  { name: 'SAMURAI', iconPath: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' },
  { name: 'MINIMAL', iconPath: 'M12 20v-6M6 20V10M18 20V4' },
  { name: 'ANIME', iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
];

const CategoryGrid = () => {
  return (
    <div className="category-wrapper" style={{ backgroundColor: '#ECECEC' }}>
      {/* Desktop View */}
      <section id="categories" className="categories-section container desktop-only">

        <div className="category-header-wrapper">

          <div className="category-header-left">
            <h2 className="cat-main-title">Our<br /><span className="text-red">Category's</span></h2>
            <div className="cat-divider"></div>
            <p className="cat-subtitle">
              EXPLORE OUR WIDE RANGE OF PREMIUM<br />
              TEMPORARY TATTOOS. FIND YOUR VIBE.
            </p>
          </div>

          <div className="category-header-center">
            <div className="watermark-text">東京の魂</div>
          </div>

          <div className="category-header-right">
            <p className="cat-meta-text">
              TOKYO INSPIRED<br />
              INKED TEMPORARILY<br />
              MADE FOR YOU
            </p>
            <svg viewBox="0 0 200 60" className="barcode-svg" preserveAspectRatio="none">
              <rect x="0" y="0" width="4" height="60" fill="#000" />
              <rect x="8" y="0" width="2" height="60" fill="#000" />
              <rect x="14" y="0" width="8" height="60" fill="#000" />
              <rect x="26" y="0" width="2" height="60" fill="#000" />
              <rect x="32" y="0" width="6" height="60" fill="#000" />
              <rect x="42" y="0" width="2" height="60" fill="#000" />
              <rect x="48" y="0" width="4" height="60" fill="#000" />
              <rect x="56" y="0" width="8" height="60" fill="#000" />
              <rect x="68" y="0" width="2" height="60" fill="#000" />
              <rect x="74" y="0" width="10" height="60" fill="#000" />
              <rect x="88" y="0" width="4" height="60" fill="#000" />
              <rect x="96" y="0" width="2" height="60" fill="#000" />
              <rect x="102" y="0" width="6" height="60" fill="#000" />
              <rect x="112" y="0" width="4" height="60" fill="#000" />
              <rect x="120" y="0" width="8" height="60" fill="#000" />
              <rect x="132" y="0" width="2" height="60" fill="#000" />
              <rect x="138" y="0" width="6" height="60" fill="#000" />
              <rect x="148" y="0" width="4" height="60" fill="#000" />
              <rect x="156" y="0" width="2" height="60" fill="#000" />
              <rect x="162" y="0" width="8" height="60" fill="#000" />
              <rect x="174" y="0" width="4" height="60" fill="#000" />
              <rect x="182" y="0" width="2" height="60" fill="#000" />
              <rect x="188" y="0" width="6" height="60" fill="#000" />
              <rect x="198" y="0" width="2" height="60" fill="#000" />
            </svg>
            <div className="barcode-footer">TOKIYO VIBE // EST. 2024</div>
            <div className="red-asterisk-box">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="4.5" y1="7.5" x2="19.5" y2="16.5" />
                <line x1="4.5" y1="16.5" x2="19.5" y2="7.5" />
              </svg>
            </div>
          </div>

        </div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <div className="category-name">
                {cat.name.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== cat.name.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="mobile-categories-section mobile-only">
        <div className="mc-header">
          <h2 className="mc-title">SHOP BY CATEGORY</h2>
          <a href="#all" className="mc-view-all">VIEW ALL</a>
        </div>
        
        <div className="mc-horizontal-scroll">
          {mobileCategories.map((cat, idx) => (
            <div key={idx} className="mc-item">
              <div className="mc-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cat.iconPath}></path>
                </svg>
              </div>
              <span className="mc-item-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CategoryGrid;
