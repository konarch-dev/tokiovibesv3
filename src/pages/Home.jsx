import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import ShopSection from '../components/ShopSection';
import FeaturedCollections from '../components/FeaturedCollections';
import GenzCollections from '../components/GenzCollections';
import HotRightNow from '../components/HotRightNow';
import VibeFeedBlog from '../components/VibeFeedBlog';
import FAQSection from '../components/FAQSection';
import TrustSection from '../components/TrustSection';
import TestimonialSection from '../components/TestimonialSection';
import MobileFeaturesStrip from '../components/MobileFeaturesStrip';
import MobileBestSellers from '../components/MobileBestSellers';
import MadeInIndiaBanner from '../components/MadeInIndiaBanner';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <MobileFeaturesStrip />
      <CategoryGrid />
      <MobileBestSellers />
      <MadeInIndiaBanner />
      <ShopSection />
      <FeaturedCollections />
      <GenzCollections />
      <HotRightNow />
      <VibeFeedBlog />
      <TrustSection />
      <FAQSection />
      <TestimonialSection />
    </main>
  );
};

export default Home;
