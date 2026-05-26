import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = getCartTotal();
  const discount = subtotal > 0 ? 200 : 0; // Example discount
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 120;
  const total = subtotal - discount + shipping;
  const amountToFreeShipping = 999 - subtotal;

  const recommendations = [
    { id: 101, name: 'SAKURA BLOOM', price: 699, image: '/images/sc_geisha.png' },
    { id: 102, name: 'SAMURAI CODE', price: 799, image: '/images/samurai.jpg' },
    { id: 103, name: 'NEO TIGER', price: 699, image: '/images/sc_dragon.png' },
    { id: 104, name: 'YIN YANG', price: 599, image: '/images/anime.jpg' },
  ];

  return (
    <div className="cart-page">
      <div className="container cart-container">
        
        {/* Header Section */}
        <div className="cart-header">
          <h1>YOUR COLLECTION ({cartItemCount} ITEMS)</h1>
          <p className="subtitle-japanese">あなたのコレクション</p>
          
          <div className="cart-steps">
            <div className="step active">01 CART</div>
            <div className="step">02 SHIPPING</div>
            <div className="step">03 PAYMENT</div>
          </div>
        </div>

        <div className="cart-content">
          {/* Left Column */}
          <div className="cart-left">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your collection is empty.</p>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Explore Products</Link>
              </div>
            ) : (
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                      {item.isLimitedDrop && <span className="badge-limited">LIMITED DROP</span>}
                    </div>
                    
                    <div className="cart-item-details">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}>
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                      <p className="item-collection">Tattoo Collection</p>
                      <p className="item-size">Size: {item.size}</p>
                      
                      <div className="item-actions">
                        <div className="quantity-selector">
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                        </div>
                        <button className="save-later-btn">Save for later</button>
                        <div className="item-price" style={{ margin: 0 }}>
                          ₹{typeof item.price === 'string' ? item.price : item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Free Shipping Tracker */}
            {cartItems.length > 0 && (
              <div className="shipping-tracker">
                <div className="tracker-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div className="tracker-info">
                  {amountToFreeShipping > 0 ? (
                    <p><strong>₹{amountToFreeShipping}</strong> away from <strong>FREE SHIPPING</strong></p>
                  ) : (
                    <p><strong>Congratulations!</strong> You have unlocked <strong>FREE SHIPPING</strong></p>
                  )}
                  <div className="progress-bar">
                    <div className="progress" style={{ width: amountToFreeShipping > 0 ? `${(subtotal / 999) * 100}%` : '100%' }}></div>
                  </div>
                  <span className="tracker-amounts">₹{subtotal} / ₹999</span>
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="cart-recommendations">
              <h2>COMPLETE YOUR VIBE</h2>
              <p className="subtitle-japanese" style={{ fontSize: '12px', marginBottom: '20px' }}>あなたにおすすめ</p>
              
              <div className="recommendations-grid">
                {recommendations.map(product => (
                  <div key={product.id} className="recommendation-card">
                    <div className="rec-image">
                      <img src={product.image} alt={product.name} />
                      <button className="add-rec-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </button>
                    </div>
                    <div className="rec-details">
                      <h4>{product.name}</h4>
                      <p>₹{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="cart-right">
            <div className="order-summary-box">
              <h3>ORDER SUMMARY</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-line discount">
                <span>Discount</span>
                <span>- ₹{discount}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <p className="taxes-note">Inclusive of all taxes</p>
              
              <button 
                className="checkout-btn" 
                onClick={() => navigate('/checkout')}
                disabled={cartItems.length === 0}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                SECURE CHECKOUT
              </button>
              
              <div className="accepted-payments">
                <p>WE ACCEPT</p>
                <div className="payment-icons">
                  <img src="/images/visa.png" alt="Visa" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/mastercard.png" alt="Mastercard" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/upi.png" alt="UPI" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/paytm.png" alt="Paytm" onError={(e) => e.target.style.display='none'} />
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="cart-features">
              <div className="feature-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path></svg>
                <div>
                  <h4>WATERPROOF</h4>
                  <p>Long lasting & durable</p>
                </div>
              </div>
              <div className="feature-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="6.5"></line></svg>
                <div>
                  <h4>SKIN SAFE</h4>
                  <p>Hypoallergenic ink</p>
                </div>
              </div>
              <div className="feature-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <div>
                  <h4>PREMIUM QUALITY</h4>
                  <p>Finest Japanese ink</p>
                </div>
              </div>
              <div className="feature-item">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <div>
                  <h4>FAST SHIPPING</h4>
                  <p>Ships within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
