import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Samurai Warrior', price: '499 INR', oldPrice: null, img: '/images/sc_samurai.png', gallery: ['/images/sc_samurai.png', '/images/samurai.jpg', '/images/men.png'] },
  { id: 2, name: 'Leo Constellation', price: '299 INR', oldPrice: null, img: '/images/sc_leo.png', gallery: ['/images/sc_leo.png', '/images/animal.png', '/images/sc_dragon.png'] },
  { id: 3, name: 'Coiled Snake', price: '399 INR', oldPrice: '499 INR', img: '/images/sc_snake.png', gallery: ['/images/sc_snake.png', '/images/dbz.png', '/images/myth.png'] },
  { id: 4, name: 'Astronaut Explorer', price: '699 INR', oldPrice: null, img: '/images/sc_astronaut.png', gallery: ['/images/sc_astronaut.png', '/images/sc_geisha.png', '/images/travel.jpg'] },
  { id: 5, name: 'Cyberpunk Geisha', price: '199 INR', oldPrice: '499 INR', img: '/images/sc_geisha.png', gallery: ['/images/sc_geisha.png', '/images/flora.png', '/images/women.png'] },
  { id: 6, name: 'Oni Demon Mask', price: '599 INR', oldPrice: null, img: '/images/sc_oni.png', gallery: ['/images/sc_oni.png', '/images/goth.png', '/images/anime.png'] },
  { id: 7, name: 'Dragon Ascending', price: '799 INR', oldPrice: null, img: '/images/sc_dragon.png', gallery: ['/images/sc_dragon.png', '/images/dragon.jpg', '/images/anime-chaos.png'] },
  { id: 8, name: 'Y2K Star Tattoo', price: '899 INR', oldPrice: null, img: '/images/cat_new.png', gallery: ['/images/cat_new.png', '/images/y2k.png', '/images/juju.png'] }
];

const filters = ['Abstract', 'Dark', 'Couple', 'New Offer'];

const SCProductCard = ({ product }) => {
  const [activeImg, setActiveImg] = React.useState(product.img);
  const navigate = useNavigate();

  return (
    <div 
      className="sc-product-card-wrapper" 
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="sc-product-card">
        <div className="sc-product-icons">
          <button className="sc-icon-btn sc-eye-btn" onClick={(e) => e.stopPropagation()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button className="sc-icon-btn sc-heart-btn" onClick={(e) => e.stopPropagation()}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <img src={activeImg} alt={product.name} className="sc-product-image" />
        
        <div className="sg-gallery-stack">
          {product.gallery.map((gImg, idx) => (
            <div 
              key={idx} 
              className={`sg-gallery-thumb ${activeImg === gImg ? 'active' : ''}`}
              style={{ backgroundImage: `url(${gImg})`, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer' }}
              onMouseEnter={() => setActiveImg(gImg)}
              onClick={(e) => { e.stopPropagation(); setActiveImg(gImg); }}
            ></div>
          ))}
          <div className="sg-gallery-more" onClick={(e) => e.stopPropagation()}>+3</div>
        </div>

        <div className="sc-add-to-cart-wrapper">
          <button className="sc-btn-add-cart" onClick={(e) => e.stopPropagation()}>Add To Cart</button>
        </div>
      </div>
      <div className="sc-product-info">
        <h3 className="sc-product-title">{product.name}</h3>
        <div className="sc-product-price">
          {product.oldPrice && <span className="sc-old-price">{product.oldPrice}</span>}
          <span className="sc-current-price">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const [activeFilter, setActiveFilter] = useState('Abstract');

  return (
    <div className="special-collections-wrapper">
      <section id="shop" className="special-collections-section container">

        <div className="sc-header">
          <div className="sc-header-left">
            <h2 className="sc-main-title">
              <span className="text-white fw-light">Special</span><br />
              <span className="text-red">Collections</span>
            </h2>
            <div className="sc-divider"></div>
            <p className="sc-subtitle">
              CURATED DESIGNS. BOLD EXPRESSIONS.<br />
              INSPIRED BY TOKYO CULTURE.
            </p>
          </div>

          <div className="sc-header-right">
            <div className="sc-watermark-vertical">東京の魂</div>
            <div className="sc-asterisk-box">
              <span className="sc-red-asterisk">*</span>
            </div>
            <div className="sc-diagonal-tape"></div>
          </div>
        </div>

        <div className="sc-filters-container">
          <div className="sc-filters">
            {filters.map(filter => (
              <button
                key={filter}
                className={`sc-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
            <button className="sc-filter-btn sc-shop-all-btn">
              Shop All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '5px' }}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="sc-product-grid">
          {products.map(product => (
            <SCProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopSection;
