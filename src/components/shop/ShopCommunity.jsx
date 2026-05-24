import React from 'react';

const ShopCommunity = () => {
  return (
    <div className="shop-community">
      <div className="scom-header">
        <h3>#TOKIYOVIBE COMMUNITY</h3>
        <a href="#see-more" className="scom-see-more">SEE MORE</a>
      </div>
      <div className="scom-scroll-area">
        <button className="scom-nav left">‹</button>
        <div className="scom-feed">
          <div className="scom-img-box"><img src="/images/ts1.webp" alt="Comm 1" /><span className="scom-icon">❐</span></div>
          <div className="scom-img-box"><img src="/images/ts2.jpg" alt="Comm 2" /><span className="scom-icon">❐</span></div>
          <div className="scom-img-box"><img src="/images/ts3.jpg" alt="Comm 3" /><span className="scom-icon">❐</span></div>
          <div className="scom-img-box"><img src="/images/ts4.jpg" alt="Comm 4" /><span className="scom-icon">❐</span></div>
          <div className="scom-img-box"><img src="/images/blogt.jpg" alt="Comm 5" /><span className="scom-icon">❐</span></div>
          <div className="scom-img-box"><img src="/images/jt.jpg" alt="Comm 6" /><span className="scom-icon">❐</span></div>
        </div>
        <button className="scom-nav right">›</button>
      </div>
    </div>
  );
};

export default ShopCommunity;
