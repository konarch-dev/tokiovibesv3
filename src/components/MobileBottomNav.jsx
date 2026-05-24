import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="mobile-bottom-nav mobile-only">
      <Link to="/" className={`mobile-nav-item ${path === '/' ? 'active' : ''}`}>
        <svg viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>HOME</span>
      </Link>
      <Link to="/shop" className={`mobile-nav-item ${path === '/shop' ? 'active' : ''}`}>
        <svg viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span>SHOP</span>
      </Link>
      <Link to="/collections" className={`mobile-nav-item ${path === '/collections' ? 'active' : ''}`}>
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>COLLECTIONS</span>
      </Link>
      <Link to="/wishlist" className={`mobile-nav-item ${path === '/wishlist' ? 'active' : ''}`}>
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>WISHLIST</span>
      </Link>
      <Link to="/account" className={`mobile-nav-item ${path === '/account' ? 'active' : ''}`}>
        <svg viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>ACCOUNT</span>
      </Link>
    </div>
  );
};

export default MobileBottomNav;
