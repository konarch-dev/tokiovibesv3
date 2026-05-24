import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopPromoBanner from './ShopPromoBanner';

const shopProducts = [
  { id: 1, title: 'DRAGON REBIRTH', price: 499, oldPrice: 799, discount: '-37%', badge: 'BEST SELLER', rating: 5, reviews: '1.2K', img: '/images/sc_dragon.png', gallery: ['/images/sc_dragon.png', '/images/dragon.jpg', '/images/anime-chaos.png'] },
  { id: 2, title: 'SAKURA STORM', price: 399, oldPrice: 649, discount: '-38%', badge: 'NEW', rating: 5, reviews: '842', img: '/images/sc_geisha.png', gallery: ['/images/sc_geisha.png', '/images/flora.png', '/images/women.png'] },
  { id: 3, title: 'SAMURAI CODE', price: 399, oldPrice: 649, discount: '-38%', badge: 'BEST SELLER', rating: 5, reviews: '982', img: '/images/sc_samurai.png', gallery: ['/images/sc_samurai.png', '/images/samurai.jpg', '/images/men.png'] },
  { id: 4, title: 'ONI WRATH', price: 499, oldPrice: 799, discount: '-37%', badge: 'LIMITED', rating: 5, reviews: '1.1K', img: '/images/sc_oni.png', gallery: ['/images/sc_oni.png', '/images/goth.png', '/images/anime.png'] },
  { id: 5, title: 'KOT FLOW', price: 349, oldPrice: 599, discount: '-42%', badge: 'NEW', rating: 5, reviews: '732', img: '/images/juju.png', gallery: ['/images/juju.png', '/images/anime-chaos.png', '/images/y2k.png'] },
  { id: 6, title: 'CYBER DRAGON', price: 499, oldPrice: 799, discount: '-37%', badge: 'BEST SELLER', rating: 5, reviews: '1.3K', img: '/images/dragon.jpg', gallery: ['/images/dragon.jpg', '/images/sc_dragon.png', '/images/animal.png'] },
  { id: 7, title: 'TIGER CLAW', price: 349, oldPrice: 599, discount: '-42%', badge: 'NEW', rating: 5, reviews: '652', img: '/images/tattoo_lion.png', gallery: ['/images/tattoo_lion.png', '/images/animal.png', '/images/myth.png'] },
  { id: 8, title: 'HANNYA MASK', price: 499, oldPrice: 799, discount: '-37%', badge: 'LIMITED', rating: 5, reviews: '802', img: '/images/goth.png', gallery: ['/images/goth.png', '/images/sc_oni.png', '/images/anime.jpg'] },
];

const ProductCard = ({ product }) => {
  const [activeImg, setActiveImg] = React.useState(product.img);
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

const ShopProductGrid = () => {
  const [sortOption, setSortOption] = React.useState('best-selling');
  const [viewLayout, setViewLayout] = React.useState('grid4');

  const sortedProducts = [...shopProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'new') return b.id - a.id;
    return a.id - b.id; // best-selling default
  });

  return (
    <div className="shop-grid-area">
      <div className="sg-top-bar">
        <div className="sg-mobile-control-row mobile-only">
          <button className="sg-mobile-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            FILTERS
          </button>
          <button className="sg-mobile-btn">
            SORT
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="sg-desktop-controls desktop-only">
          <div className="sg-sort">
            <span>SORT BY:</span>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="best-selling">BEST SELLING</option>
              <option value="new">NEW ARRIVALS</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        <div className="sg-view-row">
          <div className="sg-results-text mobile-only">120+ RESULTS</div>
          <div className="sg-view-options">
            <span className="desktop-only">VIEW:</span>
            <button className={`sg-view-btn ${viewLayout === 'grid4' ? 'active' : ''}`} onClick={() => setViewLayout('grid4')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/></svg>
            </button>
            <button className={`sg-view-btn ${viewLayout === 'grid2' ? 'active' : ''}`} onClick={() => setViewLayout('grid2')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            </button>
            <button className={`sg-view-btn ${viewLayout === 'list' ? 'active' : ''}`} onClick={() => setViewLayout('list')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`sg-product-grid ${viewLayout}`}>
        {sortedProducts.map((product, index) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
            {/* Insert promo banner after 4th product */}
            {index === 3 && (
              <div className="sg-promo-wrapper">
                <ShopPromoBanner />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ShopProductGrid;
