import React, { useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'ARJUN S.',
    location: 'MUMBAI, INDIA',
    stars: 5,
    text: 'The design, the detail and the overall experience was next level. Totally in love with my tattoo!',
    img: '/images/ts1.webp',
    tape: 'black',
    stamp: 'circle-right',
    bgGraphic: 'dragon'
  },
  {
    id: 2,
    name: 'MEI Y.',
    location: 'TOKYO, JAPAN',
    stars: 5,
    text: 'Super clean work and amazing artists. TOKIYO VIBE truly understands anime and street culture.',
    img: '/images/ts2.jpg',
    tape: 'red',
    stamp: 'vertical-text-right',
    bgGraphic: 'lotus'
  },
  {
    id: 3,
    name: 'VEDANT P.',
    location: 'DELHI, INDIA',
    stars: 5,
    text: 'Got my custom anime tattoo and it came out even better than I imagined. Super professional team!',
    img: '/images/ts3.jpg',
    tape: 'black',
    stamp: 'red-square-right',
    bgGraphic: 'koi'
  },
  {
    id: 4,
    name: 'HARUTO K.',
    location: 'OSAKA, JAPAN',
    stars: 5,
    text: 'The linework and shading are insane. Healing was smooth and the ink quality is top-notch.',
    img: '/images/ts4.jpg',
    tape: 'red-stripe',
    stamp: 'circle-right-red',
    bgGraphic: 'mask'
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="tokiyo-reviews-wrapper">
      <section className="tokiyo-reviews-section container">

        {/* Top Header Block */}
        <div className="tr-header-grid">

          <div className="tr-header-left">
            <div className="tr-top-bar-left">
              <span className="tr-top-brand">TOKIYO <span className="text-red">VIBE</span> <span className="text-red">///////////////</span></span>
              <div className="tr-icons-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
              </div>
            </div>

            <div className="tr-title-block">
              <h2 className="tr-main-title">Testimonials</h2>
              <span className="tr-jap-title">東京の魂</span>
              <div className="tr-watermark-bg">東京の魂</div>
            </div>

            <div className="tr-subtitle-block">
              <div className="tr-red-dash"></div>
              <h3>REAL PEOPLE. REAL INK.<br />REAL EXPERIENCES.</h3>
            </div>
          </div>

          <div className="tr-header-center">
            <div className="tr-vertical-barcode-block">
              <div className="tr-v-barcode"></div>
              <span>TOKIYO VIBE // EST. 2024</span>
            </div>
          </div>

          <div className="tr-header-right">
            <p className="tr-happy-clients">THOUSANDS OF HAPPY CLIENTS.<br />ONE VIBE.</p>
            <p className="tr-hashtag text-red">#TOKIYOVIBE</p>
            <div className="tr-nav-arrows">
              <button className="tr-arrow-btn black" onClick={scrollLeft}>←</button>
              <button className="tr-arrow-btn white text-red" onClick={scrollRight}>→</button>
            </div>

            {/* Far Right Sidebar Elements */}
            <div className="tr-far-right-bar">
              <span className="text-red tr-asterisk">*</span>
              <div className="tr-icons-col">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <div className="tr-small-barcode"></div>
              <div className="tr-diagonal-stripes"></div>
            </div>
          </div>

        </div>

        {/* Cards Grid */}
        <div className="tr-cards-grid" ref={scrollRef}>
          {reviews.map(review => (
            <div key={review.id} className="tr-card">

              <div className="tr-photo-container">
                <div className={`tr-tape ${review.tape}`}></div>
                <img src={review.img} alt={review.name} className="tr-photo" />

                {/* Custom CSS Stamps */}
                {review.stamp === 'circle-right' && (
                  <div className="tr-stamp tr-stamp-circle-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                )}
                {review.stamp === 'vertical-text-right' && (
                  <div className="tr-stamp tr-stamp-vertical">インクの芸術 <span className="text-red">*</span></div>
                )}
                {review.stamp === 'red-square-right' && (
                  <div className="tr-stamp tr-stamp-red-square">
                    <span>東</span>
                    <span>京</span>
                  </div>
                )}
                {review.stamp === 'circle-right-red' && (
                  <div className="tr-stamp tr-stamp-circle-red">
                    <span className="tr-big-asterisk">*</span>
                  </div>
                )}
              </div>

              <div className="tr-card-content">
                <h4 className="tr-reviewer-name">{review.name}</h4>
                <div className="tr-reviewer-location text-red">{review.location}</div>
                <div className="tr-stars text-red">
                  {'★'.repeat(review.stars)}
                </div>
                <p className="tr-review-text">{review.text}</p>
                <div className="tr-quote-icon text-red">”</div>
              </div>

              {/* Background Graphics Layer */}
              <div className={`tr-bg-graphic`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="tr-bottom-bar">
          <div className="tr-bottom-left-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <div className="tr-bottom-text-block">
            YOUR STORY COULD BE NEXT.<br />
            LET'S CREATE SOMETHING EPIC TOGETHER.
          </div>
          <div className="tr-bottom-asterisk-block">
            *
          </div>
          <div className="tr-bottom-link-block text-red">
            SHARE YOUR STORY WITH #TOKIYOVIBE ↗
          </div>
          <div className="tr-bottom-barcode-block">
            <div className="tr-bottom-barcode"></div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default TestimonialSection;
