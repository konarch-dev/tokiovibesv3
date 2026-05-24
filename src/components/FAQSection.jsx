import React, { useState } from 'react';

const faqs = [
  { question: 'Do you create custom tattoos?', answer: 'Yes! You can submit your own design or idea, and our real artists will craft a semi-permanent version just for you.' },
  { question: 'How can i contact TOKIYO VIBE?', answer: 'You can reach us via our contact page or shoot us a DM on Instagram.' },
  { question: 'How long do TOKIYO VIBE tattoos last?', answer: 'Our premium temporary tattoos typically last between 1 to 2 weeks depending on the placement and care.' },
  { question: 'How long does it take to darken?', answer: 'It takes about 24-36 hours for the ink to fully develop and darken into the deep realistic color.' },
  { question: 'Are TOKIYO VIBE tattoos safe?', answer: 'Yes, our tattoos are made with 100% plant-based, non-toxic ink that is safe for all skin types.' },
  { question: 'Can I shower, swim or work out with it?', answer: 'Absolutely. Once fully developed, they are water-resistant and sweat-proof.' },
  { question: 'How do I apply it?', answer: 'Clean the area, apply the patch, press firmly for 1 minute, and carefully peel off.' }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first to active by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tokiyo-faq-wrapper">
      <section className="tokiyo-faq-section container">
        
        <div className="tf-layout">
          {/* Left Sidebar */}
          <div className="tf-sidebar-left">
            <div className="tf-vertical-barcode-left"></div>
            <div className="tf-vertical-text">TOKIYO VIBE // EST. 2024</div>
            <div className="tf-icons-col">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
            </div>
          </div>

          {/* Main Content Center */}
          <div className="tf-main">
            
            <div className="tf-top-bar">
              <div className="tf-top-left">
                <span className="tf-top-brand">TOKIYO <span className="text-red">VIBE</span> <span className="text-red">/// // /</span></span>
                <div className="tf-icons-row">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
              </div>
              <div className="tf-top-right">
                <span className="text-red tf-large-asterisk">*</span>
                <div className="tf-top-barcode">
                   <div className="tf-barcode-lines"></div>
                   <span>TOKIYO VIBE // EST. 2024</span>
                </div>
              </div>
            </div>

            <div className="tf-header-block">
              <h2 className="tf-massive-faq">FAQ</h2>
              <div className="tf-header-center">
                <h3>EVERYTHING YOU NEED TO KNOW<br/>BEFORE GETTING INKED.</h3>
                <div className="tf-red-dash"></div>
              </div>
              <div className="tf-watermark-bg">東京の魂</div>
            </div>

            <div className="tf-accordion">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className={`tf-accordion-item ${isActive ? 'active' : ''}`}>
                    
                    <div className="tf-accordion-header" onClick={() => toggleFAQ(index)}>
                      <span className={`tf-asterisk ${isActive ? 'text-red' : ''}`}>*</span>
                      <h4 className="tf-question">{faq.question}</h4>
                      <span className={`tf-toggle-icon ${isActive ? 'text-red' : ''}`}>{isActive ? '—' : '+'}</span>
                    </div>

                    {isActive && (
                      <div className="tf-accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}

                    {/* Faint Red Graphic for Active state */}
                    {isActive && <div className="tf-active-bg-graphic"></div>}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="tf-sidebar-right">
             <div className="tf-diagonal-stripes-right"></div>
             <div className="tf-icons-col">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="tf-jap-vertical">東京の魂</div>
            <span className="text-red tf-bottom-asterisk">*</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQSection;
