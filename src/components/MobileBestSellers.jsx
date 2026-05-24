import React from 'react';

const bestSellers = [
  { id: 1, name: 'SAMURAI SPIRIT', price: '₹299', img: '/images/sc_samurai.png' },
  { id: 2, name: 'DRAGON WRATH', price: '₹349', img: '/images/sc_dragon.png' },
  { id: 3, name: 'TOKYO SLEEVE', price: '₹399', img: '/images/cat_sleeve.png' },
  { id: 4, name: 'KITSUNE', price: '₹299', img: '/images/cat_women.png' }
];

const MobileBestSellers = () => {
  return (
    <div className="mobile-bestsellers-section mobile-only">
      <div className="mbs-header mc-header">
        <h2 className="mc-title">BEST SELLERS</h2>
        <a href="#all-bestsellers" className="mc-view-all">VIEW ALL</a>
      </div>

      <div className="mbs-horizontal-scroll">
        {bestSellers.map(product => (
          <div key={product.id} className="mbs-card">
            <div className="mbs-image-wrapper">
              <img src={product.img} alt={product.name} className="mbs-image" />
              <button className="mbs-cart-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-9.8-2h11.6L21 7H6l-1-4H2v2h2l3 12h10" />
                </svg>
              </button>
            </div>
            <div className="mbs-info">
              <h3 className="mbs-name">{product.name}</h3>
              <p className="mbs-price text-red">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileBestSellers;
