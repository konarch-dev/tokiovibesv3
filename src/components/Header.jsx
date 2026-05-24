import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar desktop-only">
        <p>Get 5% off on purhase above 999</p>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">

          {/* Left Navigation */}
          <div className="header-left">
            <nav className="desktop-only header-nav-links">
              <Link to="/">Home</Link>
              <Link to="/studio" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                My Studio
                <span style={{ 
                  fontSize: '8px', 
                  background: '#970C0F', 
                  color: '#fff', 
                  padding: '1px 5px', 
                  borderRadius: '8px', 
                  fontWeight: 'bold', 
                  boxShadow: '0 0 5px #970C0F' 
                }}>NEW</span>
              </Link>
              <Link to="/shop">Shop</Link>
              <Link to="/shop">Products</Link>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </nav>
            <button 
              className="mobile-only mobile-menu-btn" 
              style={{ background: 'transparent', border: 'none', color: '#fff', padding: 0 }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Center Logo */}
          <div className="header-center">
            <Link to="/">
              <img src="/images/tv_logo.png" alt="TOKIYO" className="logo-image" />
            </Link>
          </div>

          {/* Right Navigation & Icons */}
          <div className="header-right">
            <div className="auth-links desktop-only">
              <a href="#login">Login</a>
              <a href="#signup">SignUp</a>
            </div>
            <div className="header-icons">
              <svg className="icon desktop-only" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              <svg className="icon desktop-only" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
              <div className="cart-icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                <span className="cart-badge">1</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="/images/tv_logo.png" alt="TOKIYO" className="logo-image" style={{ height: '40px' }} />
          <button className="close-sidebar-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="#fff" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav-links">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/studio" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            My Studio
            <span style={{ 
              fontSize: '8px', 
              background: '#970C0F', 
              color: '#fff', 
              padding: '1px 5px', 
              borderRadius: '8px', 
              fontWeight: 'bold',
              boxShadow: '0 0 5px #970C0F'
            }}>NEW</span>
          </Link>
          <a href="#new-arrivals" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </nav>
        <div className="sidebar-auth-links">
          <a href="#login" className="sidebar-btn" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
          <a href="#signup" className="sidebar-btn sidebar-btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</a>
        </div>
      </div>
      {/* Overlay */}
      {isMobileMenuOpen && <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
