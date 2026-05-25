import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../shop.css';

const relatedProducts = [
  { id: 2, title: 'SAKURA STORM', price: 399, oldPrice: 649, discount: '-38%', badge: 'NEW', rating: 5, reviews: '842', img: '/images/sc_geisha.png', gallery: ['/images/sc_geisha.png', '/images/flora.png', '/images/women.png'] },
  { id: 3, title: 'SAMURAI CODE', price: 399, oldPrice: 649, discount: '-38%', badge: 'BEST SELLER', rating: 5, reviews: '982', img: '/images/sc_samurai.png', gallery: ['/images/sc_samurai.png', '/images/samurai.jpg', '/images/men.png'] },
  { id: 8, title: 'HANNYA MASK', price: 499, oldPrice: 799, discount: '-37%', badge: 'LIMITED', rating: 5, reviews: '802', img: '/images/goth.png', gallery: ['/images/goth.png', '/images/sc_oni.png', '/images/anime.jpg'] },
  { id: 4, title: 'ZEN TIGER', price: 399, oldPrice: 649, discount: '-38%', badge: 'NEW', rating: 5, reviews: '652', img: '/images/anime-chaos.png', gallery: ['/images/anime-chaos.png', '/images/travel.jpg', '/images/animal.png'] }
];

const RelatedCard = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.img);
  const navigate = useNavigate();

  return (
    <div 
      className="sg-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="sg-img-wrapper">
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
        {product.badge && <span className={`sg-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>{product.badge}</span>}
        <img src={activeImg} alt={product.title} className="sg-main-img" />
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
      <div className="sg-info">
        <h3 className="sg-title">{product.title}</h3>
        <div className="sg-rating">
          <span className="sg-stars text-red">★★★★★</span>
          <span className="sg-reviews">({product.reviews})</span>
        </div>
        <div className="sg-price-row">
          <div className="sg-price">
            <span className="sg-current-price">₹{product.price}</span>
            <span className="sg-old-price">₹{product.oldPrice}</span>
            <span className="sg-discount text-red">{product.discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductRelated = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="sg-product-grid">
        {relatedProducts.map(p => (
          <RelatedCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductRelated;
