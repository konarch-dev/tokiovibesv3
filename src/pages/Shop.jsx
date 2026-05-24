import React from 'react';
import ShopBanner from '../components/shop/ShopBanner';
import ShopSidebar from '../components/shop/ShopSidebar';
import ShopProductGrid from '../components/shop/ShopProductGrid';
import ShopCommunity from '../components/shop/ShopCommunity';
import '../shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <ShopBanner />
      <div className="container shop-layout">
        <ShopSidebar />
        <ShopProductGrid />
      </div>
      <div className="container">
        <ShopCommunity />
      </div>
    </div>
  );
};

export default Shop;
