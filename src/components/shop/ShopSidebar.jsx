import React from 'react';

const ShopSidebar = () => {
  return (
    <aside className="shop-sidebar">
      <div className="ss-header">
        <div className="ss-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          FILTERS
        </div>
        <button className="ss-reset-btn">RESET</button>
      </div>

      <div className="ss-section">
        <div className="ss-section-header">
          <h3>CATEGORIES</h3>
          <span className="ss-toggle">-</span>
        </div>
        <ul className="ss-cat-list">
          <li className="active"><span>All Tattoos</span> <span className="ss-count">(150)</span></li>
          <li><span>Best Sellers</span> <span className="ss-count">(28)</span></li>
          <li><span>New Arrivals</span> <span className="ss-count">(32)</span></li>
          <li><span>Anime Collection</span> <span className="ss-count">(24)</span></li>
          <li><span>Samurai Collection</span> <span className="ss-count">(20)</span></li>
          <li><span>Dragon Collection</span> <span className="ss-count">(18)</span></li>
          <li><span>Japanese Tradition</span> <span className="ss-count">(16)</span></li>
          <li><span>Minimalist</span> <span className="ss-count">(22)</span></li>
          <li><span>Dark Aesthetic</span> <span className="ss-count">(26)</span></li>
          <li><span>Couple Tattoos</span> <span className="ss-count">(14)</span></li>
        </ul>
      </div>

      <div className="ss-section">
        <div className="ss-section-header">
          <h3>PRICE RANGE</h3>
          <span className="ss-toggle">^</span>
        </div>
        <div className="ss-price-range">
          <div className="ss-price-labels">
            <span>₹99</span>
            <span>₹999</span>
          </div>
          <div className="ss-slider-container">
            <div className="ss-slider-track">
              <div className="ss-slider-fill" style={{ width: '40%' }}></div>
            </div>
            <div className="ss-slider-thumb left"></div>
            <div className="ss-slider-thumb right" style={{ left: '40%' }}></div>
          </div>
        </div>
      </div>

      <div className="ss-section">
        <div className="ss-section-header">
          <h3>SIZE</h3>
          <span className="ss-toggle">-</span>
        </div>
        <div className="ss-checkbox-list">
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Small
          </label>
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Medium
          </label>
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Large
          </label>
        </div>
      </div>

      <div className="ss-section">
        <div className="ss-section-header">
          <h3>PLACEMENT</h3>
          <span className="ss-toggle">^</span>
        </div>
        <div className="ss-placement-grid">
          <div className="ss-place-item active">
            <div className="ss-place-icon">💪</div>
            <span>Arm</span>
          </div>
          <div className="ss-place-item">
            <div className="ss-place-icon">🦒</div>
            <span>Neck</span>
          </div>
          <div className="ss-place-item">
            <div className="ss-place-icon">👕</div>
            <span>Chest</span>
          </div>
          <div className="ss-place-item">
            <div className="ss-place-icon">🔙</div>
            <span>Back</span>
          </div>
          <div className="ss-place-item">
            <div className="ss-place-icon">🦵</div>
            <span>Leg</span>
          </div>
        </div>
      </div>

      <div className="ss-section">
        <div className="ss-section-header">
          <h3>FEATURES</h3>
          <span className="ss-toggle">^</span>
        </div>
        <div className="ss-checkbox-list">
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Waterproof
          </label>
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Long Lasting
          </label>
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Skin Safe
          </label>
          <label className="ss-checkbox-item">
            <input type="checkbox" />
            <span className="ss-checkmark"></span>
            Easy To Apply
          </label>
        </div>
      </div>

      <button className="ss-apply-btn">APPLY FILTERS</button>
    </aside>
  );
};

export default ShopSidebar;
