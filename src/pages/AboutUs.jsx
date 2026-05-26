import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../about.css';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Hero / Story Section */}
        <section className="about-hero">
          
          <div className="about-hero-text">
            <span className="about-subtitle">OUR STORY</span>
            <h1 className="about-title">
              INSPIRED BY TOKYO.<br />
              MADE FOR YOU.
            </h1>
            <p className="about-jap-subtitle">東京からインスピレーションを得て。</p>
            
            <div className="about-desc">
              <p>
                Tokio Vibes is more than just temporary tattoos. 
                It's a culture, a lifestyle, a vibe.
              </p>
              <p>
                We draw inspiration from the streets of Tokyo, 
                anime, cyberpunk, and Japanese artistry to 
                create designs that let you express your 
                true self — fearlessly.
              </p>
            </div>
            
            <button className="about-btn" onClick={() => navigate('/shop')}>
              OUR JOURNEY 
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <div className="about-hero-images">
            {/* Collage Images */}
            <div className="about-img-container img-top-left">
              <img src="/images/samurai.jpg" alt="Tokyo streets" />
            </div>
            <div className="about-img-container img-center">
              <img src="/images/dragon.jpg" alt="Tattoo model" />
            </div>
            <div className="about-img-container img-bottom-left">
              <img src="/images/goth.png" alt="Cyberpunk" />
            </div>

            {/* Floating Glass Card */}
            <div className="about-card">
              <div className="ac-title">
                ART.<br/>
                CULTURE.<br/>
                EXPRESSION.
              </div>
              <div className="ac-title-line"></div>
              <div className="ac-jap-text">アート・文化・自己表現</div>
            </div>
          </div>
          
        </section>

        {/* Values Section */}
        <section className="about-values-section">
          <div className="values-header">
            <span className="values-subtitle">OUR VALUES</span>
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                {/* Custom glowing icon style SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
                  <path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
                </svg>
              </div>
              <h3 className="value-title">CREATIVITY</h3>
              <p className="value-desc">
                Original designs inspired by Japanese art, anime, and street culture.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="value-title">QUALITY</h3>
              <p className="value-desc">
                We use premium ink that is safe, non-toxic, and made to last.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                  <path d="m15 5 4 4"/>
                </svg>
              </div>
              <h3 className="value-title">EXPRESSION</h3>
              <p className="value-desc">
                Every tattoo tells a story. Wear what represents you.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3 className="value-title">COMMUNITY</h3>
              <p className="value-desc">
                Built for the rebels, the dreamers, and the vibe creators.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
