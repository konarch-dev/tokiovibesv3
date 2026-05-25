import React, { useState } from 'react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="pd-accordion">
      <div 
        className="pd-accordion-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="pd-accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductAccordions = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <AccordionItem title="DESCRIPTION" defaultOpen={true}>
        Fierce. Bold. Timeless. The Tokyo Dragon represents strength, wisdom, and the untamed spirit of the streets. Designed for those who lead with ambition.
      </AccordionItem>
      
      <AccordionItem title="DESIGN STORY">
        Inspired by ancient Japanese folklore, the dragon symbolizes power, protection, and transformation. A timeless piece born in the underground streets of Tokyo.
      </AccordionItem>
      
      <AccordionItem title="INGREDIENTS">
        Acrylates Copolymer, Propylene Glycol, Petrolatum, Linseed Oil, Soybean Oil, Mineral Oil, Iron Oxides (CI 77499), Blue 1 (CI 42090), Yellow 5 (CI 19140), Red 7 (CI 15850), Titanium Dioxide (CI 77891). 
        <br/><br/>
        100% Vegan & Cruelty-Free.
      </AccordionItem>
      
      <AccordionItem title="CARE & TIPS">
        For best results, apply to clean, dry skin free of lotions or oils. To remove early, massage gently with baby oil or rubbing alcohol until it lifts off. Avoid hot water and scrubbing for maximum longevity.
      </AccordionItem>
      
      <AccordionItem title="SHIPPING & DELIVERY">
        We offer fast delivery within 2-4 business days across major cities. 
        <br/>
        Free shipping on all orders over ₹999.
      </AccordionItem>
    </div>
  );
};

export default ProductAccordions;
