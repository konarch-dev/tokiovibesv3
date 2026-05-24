import React from 'react';

const Footer = () => {
  return (
    <footer className="tokiyo-footer-wrapper">
      <div className="tokiyo-footer-bg-left"></div>
      <div className="tokiyo-footer-bg-right"></div>
      <div className="tokiyo-footer-bg-strokes"></div>

      <div className="container tf-content">
        
        {/* Top Header Row */}
        <div className="tf-top-row">
          <div className="tf-top-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span className="tf-brand-text">TOKIYO VIBE <span className="tf-slashes">///////////////</span></span>
            <span className="tf-top-asterisk">*</span>
          </div>
          <div className="tf-top-right">
            <div className="tf-right-barcode">
              <span className="tf-asterisk-icon">*</span>
              <div className="tf-vertical-lines"></div>
              <span className="tf-barcode-text">TOKIYO VIBE // EST. 2024</span>
            </div>
          </div>
        </div>

        {/* Main Columns Row */}
        <div className="tf-main-columns">
          
          {/* Brand Info Column */}
          <div className="tf-col-brand">
            <div className="tf-logo-placeholder">
              <div className="tf-logo-circle">
                <span className="tf-logo-large">TOKIYO</span>
                <span className="tf-logo-small">-VIBE-</span>
              </div>
            </div>
            <div className="tf-dash-divider"></div>
            <p className="tf-brand-desc">
              TOKIYO VIBE IS MORE THAN INK.<br/>
              IT'S A CULTURE. A LIFESTYLE.<br/>
              A STATEMENT.
            </p>
            <div className="tf-social-icons">
              <a href="#" className="tf-social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              {/* Fake Tiktok icon */}
              <a href="#" className="tf-social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></a>
              <a href="#" className="tf-social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              <a href="#" className="tf-social-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="tf-col-links">
            <h4 className="tf-col-title">SHOP <span className="tf-title-asterisk">*</span></h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">GenZ Collections</a></li>
              <li><a href="#">Men Tattoos</a></li>
              <li><a href="#">Women Tattoos</a></li>
              <li><a href="#">Anime Tattoos</a></li>
              <li><a href="#">Temporary Tattoos</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          <div className="tf-col-links">
            <h4 className="tf-col-title">COMPANY <span className="tf-title-asterisk">*</span></h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Artists</a></li>
              <li><a href="#">Blog / Journal</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Tattoo Care</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Return & Refund</a></li>
            </ul>
          </div>

          <div className="tf-col-links">
            <h4 className="tf-col-title">SUPPORT <span className="tf-title-asterisk">*</span></h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Customization</a></li>
              <li><a href="#">Bulk Orders</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="tf-col-newsletter">
            <h4 className="tf-col-title">STAY INKED</h4>
            <p className="tf-newsletter-desc">
              Join the TOKIYO VIBE community and get exclusive drops, offers & tattoo inspo.
            </p>
            <div className="tf-input-group">
              <input type="email" placeholder="Enter your email" />
              <div className="tf-input-icon">*</div>
            </div>
            <button className="tf-subscribe-btn">
              SUBSCRIBE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
            </button>
          </div>

        </div>

        {/* Trust Banner Row */}
        <div className="tf-trust-banner">
          
          <div className="tf-trust-item">
            <div className="tf-trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div className="tf-trust-text">
              <h5>PREMIUM QUALITY</h5>
              <p>Safe, non-toxic &<br/>skin friendly ink.</p>
            </div>
          </div>
          
          <div className="tf-trust-item">
            <div className="tf-trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div className="tf-trust-text">
              <h5>FAST DELIVERY</h5>
              <p>Quick shipping<br/>across India.</p>
            </div>
          </div>

          <div className="tf-trust-item">
            <div className="tf-trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <div className="tf-trust-text">
              <h5>100% SATISFACTION</h5>
              <p>Loved by thousands<br/>of happy customers.</p>
            </div>
          </div>

          <div className="tf-trust-item">
            <div className="tf-trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div className="tf-trust-text">
              <h5>SECURE PAYMENT</h5>
              <p>Multiple secure<br/>payment options.</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="tf-bottom-bar">
          <div className="tf-bottom-left">
            © 2024 TOKIYO VIBE. ALL RIGHTS RESERVED.
          </div>
          <div className="tf-bottom-center">
            東京の魂 &nbsp;&nbsp;*&nbsp;&nbsp; MADE FOR THE MISFITS. &nbsp;&nbsp;*&nbsp;&nbsp; INK YOUR STORY.
          </div>
          <div className="tf-bottom-right">
            {/* Payment Icons */}
            <span className="tf-pay-text">VISA</span>
            <div className="tf-mastercard-icon">
              <div className="tf-mc-circle red"></div>
              <div className="tf-mc-circle orange"></div>
            </div>
            <span className="tf-pay-text italic">UPI</span>
            <span className="tf-pay-text bold">Paytm</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
