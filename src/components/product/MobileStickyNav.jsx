import React, { useState } from 'react';

const MobileStickyNav = () => {
  const [activeTab, setActiveTab] = useState('DETAILS');

  const tabs = ['DETAILS', 'HOW TO APPLY', 'REVIEWS (1,284)'];

  return (
    <div className="pd-mobile-sticky-nav" style={{ position: 'sticky', top: '0', zIndex: 100, backgroundColor: '#000', borderBottom: '1px solid #333', padding: '15px 20px', display: 'flex', justifyContent: 'space-between' }}>
      {tabs.map(tab => (
        <a 
          key={tab}
          href={`#${tab.split(' ')[0].toLowerCase()}`}
          onClick={() => setActiveTab(tab)}
          style={{
            color: activeTab === tab ? '#fff' : '#888',
            fontSize: '10px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textDecoration: 'none',
            borderBottom: activeTab === tab ? '2px solid #cc0000' : '2px solid transparent',
            paddingBottom: '5px'
          }}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default MobileStickyNav;
