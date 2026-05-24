import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Samurai Tattoo', price: '799 INR', oldPrice: '1299 INR', img: '/images/samurai.jpg', gallery: ['/images/samurai.jpg', '/images/sc_samurai.png', '/images/men.png'] },
  { id: 2, name: 'Dragon Tattoo', price: '799 INR', oldPrice: '1299 INR', img: '/images/dragon.jpg', gallery: ['/images/dragon.jpg', '/images/sc_dragon.png', '/images/anime-chaos.png'] },
  { id: 3, name: 'Emotional Tattoo', price: '799 INR', oldPrice: '1299 INR', img: '/images/mom.jpg', gallery: ['/images/mom.jpg', '/images/cat_women.png', '/images/y2k.png'] },
  { id: 4, name: 'Travaling Tattoo', price: '799 INR', oldPrice: '1299 INR', img: '/images/travel.jpg', gallery: ['/images/travel.jpg', '/images/flora.png', '/images/cat_spiritual.png'] }
];

const HRNProductCard = ({ product }) => {
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

      <div className="sc-product-info hrn-product-info">
        <h3 className="sc-product-title">{product.name}</h3>
        <div className="sc-product-price">
          {product.oldPrice && <span className="sc-old-price">{product.oldPrice}</span>}
          <span className="sc-current-price">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const HotRightNow = () => {
  return (
    <div className="hrn-wrapper">
      <section className="hrn-section container">

        <div className="hrn-header">
          <div className="hrn-header-spacer"></div>
          <h2 className="hrn-main-title">
            Hot <span className="text-red">Right</span> Now <span className="text-red">&gt;&gt;&gt;</span>
          </h2>
          <div className="hrn-nav-buttons">
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

        <div className="sc-product-grid">
          {products.map(product => (
            <HRNProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </div>
  );
};

export default HotRightNow;
