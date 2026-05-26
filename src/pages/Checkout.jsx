import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const discount = subtotal > 0 ? 200 : 0;
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 120;
  const total = subtotal - discount + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process payment or move to payment step
    alert('Proceeding to payment gateway...');
  };

  return (
    <div className="checkout-page">
      <div className="container checkout-container">
        
        {/* Header Section */}
        <div className="checkout-header">
          <h1>CHECKOUT</h1>
          <p className="subtitle-japanese">チェックアウト</p>
          
          <div className="cart-steps">
            <Link to="/cart" className="step completed" style={{ textDecoration: 'none' }}>01 CART</Link>
            <div className="step active">02 SHIPPING</div>
            <div className="step">03 PAYMENT</div>
          </div>
        </div>

        <div className="checkout-content">
          {/* Left Column - Forms */}
          <div className="checkout-left">
            <form onSubmit={handleSubmit}>
              
              <section className="form-section">
                <h2>CONTACT INFORMATION</h2>
                <div className="form-group">
                  <label>Email address *</label>
                  <div className="input-with-icon">
                    <input type="email" placeholder="youremail@gmail.com" required defaultValue="youremail@gmail.com" />
                    <svg className="success-icon" viewBox="0 0 24 24" width="20" height="20" stroke="#4cd964" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" required defaultValue="+91 98765 43210" />
                </div>
              </section>

              <section className="form-section">
                <h2>SHIPPING ADDRESS</h2>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Doe" required defaultValue="John Doe" />
                </div>
                <div className="form-group">
                  <label>Address Line 1 *</label>
                  <input type="text" placeholder="123 Shibuya Street" required defaultValue="123 Shibuya Street" />
                </div>
                <div className="form-group">
                  <label>Address Line 2 (Optional)</label>
                  <input type="text" placeholder="Apartment, suite, etc." />
                </div>
                
                <div className="form-row">
                  <div className="form-group half">
                    <label>City *</label>
                    <input type="text" placeholder="Tokyo" required defaultValue="Tokyo" />
                  </div>
                  <div className="form-group half">
                    <label>State / Province *</label>
                    <input type="text" placeholder="Tokyo" required defaultValue="Tokyo" />
                  </div>
                  <div className="form-group half">
                    <label>Postal Code *</label>
                    <input type="text" placeholder="100-0001" required defaultValue="100-0001" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Country *</label>
                  <select required defaultValue="Japan">
                    <option value="Japan">Japan</option>
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                  </select>
                </div>

                <div className="checkbox-group">
                  <input type="checkbox" id="save-info" />
                  <label htmlFor="save-info">Save this information for next time</label>
                </div>
              </section>

              <section className="form-section">
                <h2>SHIPPING METHOD</h2>
                <div className="shipping-methods">
                  <label className="shipping-option selected">
                    <div className="radio-btn">
                      <input type="radio" name="shipping" defaultChecked />
                      <span className="radio-custom"></span>
                    </div>
                    <div className="shipping-details">
                      <span className="shipping-name">Standard Shipping</span>
                      <span className="shipping-time">3-5 Business Days</span>
                    </div>
                    <span className="shipping-price free">FREE</span>
                  </label>
                  
                  <label className="shipping-option">
                    <div className="radio-btn">
                      <input type="radio" name="shipping" />
                      <span className="radio-custom"></span>
                    </div>
                    <div className="shipping-details">
                      <span className="shipping-name">Express Shipping</span>
                      <span className="shipping-time">1-2 Business Days</span>
                    </div>
                    <span className="shipping-price">₹350</span>
                  </label>
                </div>
              </section>

              <section className="form-section">
                <h2>ORDER NOTES (OPTIONAL)</h2>
                <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </section>

            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="checkout-right">
            <div className="order-summary-box">
              <div className="order-header">
                <h3>YOUR ORDER</h3>
                <Link to="/cart" className="edit-cart-link">Edit Cart</Link>
              </div>
              <p className="items-count">{cartItems.length} ITEMS</p>
              
              <div className="checkout-items">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${item.size}-${index}`} className="checkout-item">
                    <img src={item.image} alt={item.name} />
                    <div className="checkout-item-details">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <div className="checkout-item-price">
                      ₹{typeof item.price === 'string' ? item.price : item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

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
              
              <div className="urgency-banner">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div>
                  <strong>HURRY! LIMITED STOCK AVAILABLE</strong>
                  <p>Your items are reserved for <span>09:48</span></p>
                </div>
              </div>
              
              <div className="accepted-payments">
                <p>WE ACCEPT</p>
                <div className="payment-icons">
                  <img src="/images/visa.png" alt="Visa" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/mastercard.png" alt="Mastercard" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/upi.png" alt="UPI" onError={(e) => e.target.style.display='none'} />
                  <img src="/images/paytm.png" alt="Paytm" onError={(e) => e.target.style.display='none'} />
                </div>
                <p className="secure-payment-note">
                  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                  Your payment is secure and encrypted
                </p>
              </div>

              <button className="proceed-btn" onClick={handleSubmit}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                PROCEED TO PAYMENT →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Features */}
      <div className="checkout-features-banner">
        <div className="container banner-container">
          <div className="banner-item">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
            <div>
              <strong>SECURE PAYMENT</strong>
              <p>100% Protected</p>
            </div>
          </div>
          <div className="banner-item">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <div>
              <strong>24/7 SUPPORT</strong>
              <p>We're here for you</p>
            </div>
          </div>
          <div className="banner-item">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"></path><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"></path></svg>
            <div>
              <strong>EASY RETURNS</strong>
              <p>No questions asked</p>
            </div>
          </div>
          <div className="banner-item">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
            <div>
              <strong>SUSTAINABLE INK</strong>
              <p>Eco-friendly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
