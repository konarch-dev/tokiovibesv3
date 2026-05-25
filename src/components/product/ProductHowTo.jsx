import React from 'react';
import '../../product.css';

const ProductHowTo = () => {
  return (
    <div className="pd-how-section">
      
      {/* Why You'll Love It Section */}
      <div className="pd-why-love-it">
        <div className="pd-desktop-only pd-why-image">
           <img src="/images/dragon.jpg" alt="Why You'll Love It" />
        </div>
        <div className="pd-why-content">
          <h3 className="pd-why-title">WHY YOU'LL LOVE IT</h3>
          <div className="pd-why-grid">
            {['Detailed &\nIntricate Design', 'Premium\nQuality Ink', 'Looks\nReal', 'Perfect for\nAny Occasion', 'Unisex\nDesign'].map((item, idx) => (
              <div key={idx} className="pd-why-item">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8"/><path d="M8 8l8 8"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How To Apply Section */}
      <div className="pd-how-to-apply">
        <h3 className="pd-how-title">HOW TO APPLY</h3>
        <div className="pd-how-title-line"></div>
        
        <div className="pd-how-steps">
          {/* Step 1 */}
          <div className="pd-how-step-item">
            <div className="pd-step-num">1</div>
            <div className="pd-step-icon">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 4h16v16H4z"/><path d="M4 4l16 16"/></svg>
            </div>
            <div className="pd-step-title">Peel</div>
            <div className="pd-step-desc">Remove the clear film.</div>
          </div>
          
          {/* Step 2 */}
          <div className="pd-how-step-item">
            <div className="pd-step-num">2</div>
            <div className="pd-step-icon">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            </div>
            <div className="pd-step-title">Apply</div>
            <div className="pd-step-desc">Place the tattoo on clean skin.</div>
          </div>
          
          {/* Step 3 */}
          <div className="pd-how-step-item">
            <div className="pd-step-num">3</div>
            <div className="pd-step-icon">
               <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="pd-step-title">Wet</div>
            <div className="pd-step-desc">Wet the back of the tattoo.</div>
          </div>
          
          {/* Step 4 */}
          <div className="pd-how-step-item">
            <div className="pd-step-num">4</div>
            <div className="pd-step-icon">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <div className="pd-step-title">Reveal</div>
            <div className="pd-step-desc">Peel off after 30 seconds.</div>
          </div>
        </div>
        
        <div className="pd-pro-tip">
          <strong>Pro Tip:</strong> Avoid touching the tattoo & let it set for a few hours for best results.
        </div>
      </div>
      
    </div>
  );
};

export default ProductHowTo;
