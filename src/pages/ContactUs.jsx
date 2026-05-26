import React, { useEffect } from 'react';
import '../contact.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Message sent! (Mock)");
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Top Section */}
        <section className="contact-grid">
          
          {/* Left Column: Contact Info */}
          <div className="contact-info">
            <span className="contact-subtitle">CONTACT US</span>
            <h1 className="contact-title">
              WE'D LOVE TO<br />
              HEAR FROM YOU.
            </h1>
            <div className="contact-separator"></div>
            
            <p className="contact-desc">
              Have a question, suggestion, or just want to say hi? Drop us a message! 
              We're here for you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="cm-text">
                  <h4>EMAIL</h4>
                  <p>hello@tokiovibes.com</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="cm-text">
                  <h4>INSTAGRAM</h4>
                  <p>@tokiovibes.official</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="cm-text">
                  <h4>PHONE</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="cm-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="cm-text">
                  <h4>LOCATION</h4>
                  <p>Tokyo, Japan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">SEND US A MESSAGE</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" className="form-input" placeholder="Your Name" required />
              <input type="email" className="form-input" placeholder="Email Address" required />
              <input type="text" className="form-input" placeholder="Subject" />
              <textarea className="form-input form-textarea" placeholder="Your Message" required></textarea>
              <button type="submit" className="form-submit-btn">
                SEND MESSAGE
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="contact-image-section">
            <img src="/images/samurai.jpg" alt="Tokyo background" className="contact-bg-img" />
            <div className="contact-emblem">
              {/* Custom Japanese style glowing SVG emblem */}
              <svg viewBox="0 0 100 100" fill="none" stroke="#ff2a2a" strokeWidth="2">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="38" strokeDasharray="5, 5" />
                <path d="M30 40 h40 M50 20 v60 M25 60 h50" />
                <path d="M35 30 l15 10 l15 -10" />
                <path d="M40 70 l10 -15 l10 15" />
              </svg>
            </div>
          </div>

        </section>

        {/* Bottom Features Strip */}
        <section className="contact-features-strip">
          
          <div className="c-feature">
            <div className="c-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="c-feature-text">
              <h4>FAST REPLY</h4>
              <p>We reply within 24 hours</p>
            </div>
          </div>

          <div className="c-feature">
            <div className="c-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div className="c-feature-text">
              <h4>SUPPORT</h4>
              <p>We're here to help</p>
            </div>
          </div>

          <div className="c-feature">
            <div className="c-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="c-feature-text">
              <h4>SAFE & SECURE</h4>
              <p>Your information is safe</p>
            </div>
          </div>

          <div className="c-feature">
            <div className="c-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div className="c-feature-text">
              <h4>WORLDWIDE</h4>
              <p>Shipping to most countries</p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ContactUs;
