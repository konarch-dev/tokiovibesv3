import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../minicart.css';

const MiniCart = () => {
  const { cartItems, isMiniCartOpen, setIsMiniCartOpen, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = getCartTotal();
  const amountToFreeShipping = 499 - subtotal; // Assuming 499 for free shipping based on mockup
  
  const recommendations = [
    { id: 102, name: 'Samurai Code', price: 799, image: '/images/samurai.jpg' },
    { id: 105, name: 'Red Sun', price: 499, image: '/images/sc_oni.png' },
    { id: 104, name: 'Yin Yang', price: 599, image: '/images/anime.jpg' },
  ];

  if (!isMiniCartOpen) {
    return null; // Return null when closed, or handle closing animation via CSS
  }

  // To support sliding out, we need to always render it but control position via CSS
  // We'll return the structure and use the 'open' class for animation as before.
  return (
    <>
      <div className={`mini-cart-sidebar ${isMiniCartOpen ? 'open' : ''}`}>
        <div className="mc-watermark">東京バイブス</div>
        
        <div className="mc-header">
          <div className="mc-title-group">
            <h2>YOUR CART ({cartItemCount})</h2>
            <p className="mc-subtitle-jp">あなたのカート</p>
          </div>
          <button className="mc-close-btn" onClick={() => setIsMiniCartOpen(false)}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Shipping Tracker */}
        <div className="mc-shipping-tracker">
          <div className="mc-tracker-top">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="1.5" fill="none" className="mc-truck-icon">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <div className="mc-tracker-text">
              {amountToFreeShipping > 0 ? (
                <>You are <strong>₹{amountToFreeShipping}</strong> away from <strong>FREE SHIPPING</strong></>
              ) : (
                <strong>You have unlocked FREE SHIPPING!</strong>
              )}
            </div>
          </div>
          <div className="mc-tracker-bar-container">
            <div className="mc-progress-bg">
              <div className="mc-progress-fill" style={{ width: amountToFreeShipping > 0 ? `${Math.min((subtotal / 499) * 100, 100)}%` : '100%' }}></div>
            </div>
            <div className="mc-tracker-amounts">₹{subtotal.toLocaleString()} / ₹499</div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="mc-items-list">
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="mc-item">
                <img src={item.image} alt={item.name} className="mc-item-img" />
                <div className="mc-item-details">
                  <div className="mc-item-title-row">
                    <h4>{item.name}</h4>
                    <span className="mc-item-price">₹{(typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g,"")) : item.price) * item.quantity}</span>
                  </div>
                  <p className="mc-item-size">Size: {item.size}</p>
                  <p className="mc-item-qty-label">Qty: {item.quantity}</p>
                  <div className="mc-item-actions">
                    <div className="mc-qty-selector">
                      <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                    </div>
                    <button className="mc-delete-btn" onClick={() => removeFromCart(item.id, item.size)}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="#fff" strokeWidth="2" fill="none">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mc-divider"></div>

        {/* Recommendations */}
        <div className="mc-recommendations">
          <div className="mc-rec-header">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11 21l1-9H8l10-10-1 9h4l-10 10z"/></svg>
            <h4>YOU MIGHT ALSO LIKE</h4>
          </div>
          <div className="mc-rec-grid">
            {recommendations.map(product => (
              <div key={product.id} className="mc-rec-card">
                <div className="mc-rec-img-wrapper">
                  <img src={product.image} alt={product.name} />
                  <button className="mc-rec-add-btn">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#000" strokeWidth="3" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
                <h5>{product.name}</h5>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mc-promo-banner">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="#ff3b30" strokeWidth="1.5" fill="none">
             <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M2 12h20M12 10v4" />
          </svg>
          <div className="mc-promo-text">
            <strong>GET 10% OFF</strong>
            <span>Add items worth ₹500 more</span>
          </div>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="#fff" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>

        {/* Footer Totals */}
        <div className="mc-footer">
          <div className="mc-summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="mc-summary-row">
            <span>Shipping</span>
            <span style={{ color: '#4caf50' }}>{amountToFreeShipping <= 0 || cartItems.length === 0 ? 'FREE' : '₹120'}</span>
          </div>
          <div className="mc-total-row">
            <span>Total</span>
            <span>₹{(subtotal + (amountToFreeShipping > 0 && cartItems.length > 0 ? 120 : 0)).toLocaleString()}</span>
          </div>
          
          <button 
            className="mc-checkout-btn" 
            onClick={() => {
              setIsMiniCartOpen(false);
              navigate('/checkout');
            }}
          >
            VIEW CART & CHECKOUT →
          </button>
          
          <div className="mc-secure-note">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
            Secure Checkout
          </div>
        </div>

      </div>
      {/* Overlay */}
      <div className={`mc-overlay ${isMiniCartOpen ? 'open' : ''}`} onClick={() => setIsMiniCartOpen(false)}></div>
    </>
  );
};

export default MiniCart;
