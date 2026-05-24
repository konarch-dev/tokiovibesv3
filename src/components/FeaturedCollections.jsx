import React from 'react';

const animeCollections = [
  { id: 1, title: 'Jujutsu Collection', img: '/images/juju.png' },
  { id: 2, title: 'DBZ Collection', img: '/images/dbz.png' },
  { id: 3, title: 'Egypt Collection', img: '/images/egypt.png' },
  { id: 4, title: 'God Of War Collection', img: '/images/god.png' }
];

const AnimeCollections = () => {
  return (
    <div className="anime-collections-wrapper">
      <section className="anime-collections-section container">

        <div className="ac-header">
          <div className="ac-header-left">
            <h2 className="ac-main-title">
              Anime <span className="ac-arrow">→</span><br />
              <span className="text-red">Collections</span>
            </h2>
          </div>

          <div className="ac-header-right">
            <button className="ac-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="ac-nav-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="ac-grid">
          {animeCollections.map(collection => (
            <div key={collection.id} className="ac-card-wrapper">
              <div className="ac-card">
                <img src={collection.img} alt={collection.title} className="ac-card-img" />
              </div>
              <h3 className="ac-title">{collection.title}</h3>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AnimeCollections;
