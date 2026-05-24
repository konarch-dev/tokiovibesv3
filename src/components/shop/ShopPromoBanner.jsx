import React from 'react';

const ShopPromoBanner = () => {
  return (
    <div className="shop-promo-banner">
      <div className="spb-left-graphic">
        <div className="spb-jap-text text-red">東京の魂</div>
        <img src="/images/sc_oni.png" alt="Hannya" className="spb-mask" />
      </div>
      <div className="spb-content">
        <h2>BUY 3 GET 1 FREE</h2>
        <p>ADD ANY 4 TATTOOS TO CART</p>
      </div>
      <button className="spb-btn">SHOP NOW</button>
      <div className="spb-right-graphic">
        <img src="/images/sc_oni.png" alt="Hannya" className="spb-mask spb-mask-1" />
        <img src="/images/sc_oni.png" alt="Hannya" className="spb-mask spb-mask-2" />
        <div className="spb-barcode"></div>
      </div>
    </div>
  );
};

export default ShopPromoBanner;
