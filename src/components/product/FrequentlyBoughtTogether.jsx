import React, { useState } from 'react';

const FrequentlyBoughtTogether = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'AFTERCARE LOTION', price: 249, oldPrice: 299, discount: '-17%', checked: true, img: '/images/cat_minimalist.png' },
    { id: 2, name: 'TATTOO WIPES', price: 149, oldPrice: 199, discount: '-25%', checked: true, img: '/images/cat_spiritual.png' },
    { id: 3, name: 'SKIN PROTECT SPRAY', price: 249, oldPrice: 299, discount: '-17%', checked: true, img: '/images/sc_geisha.png' },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  const mainProductPrice = 499;
  const mainProductOldPrice = 799;

  const totalPrice = mainProductPrice + items.filter(i => i.checked).reduce((acc, curr) => acc + curr.price, 0);
  const totalOldPrice = mainProductOldPrice + items.filter(i => i.checked).reduce((acc, curr) => acc + curr.oldPrice, 0);
  const totalDiscount = Math.round(((totalOldPrice - totalPrice) / totalOldPrice) * 100);

  return (
    <div className="pd-fbt-panel" style={{ backgroundColor: '#0a0a0a', padding: '30px 20px', borderTop: '1px solid #222', borderBottom: '1px solid #222', margin: '40px 0' }}>
      <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', margin: '0 0 20px 0', letterSpacing: '1px', textTransform: 'uppercase' }}>FREQUENTLY BOUGHT TOGETHER</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
        {items.map(item => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div 
              onClick={() => toggleItem(item.id)}
              style={{ width: '20px', height: '20px', border: item.checked ? 'none' : '1px solid #555', backgroundColor: item.checked ? '#cc0000' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', borderRadius: '2px' }}
            >
              {item.checked && <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#111', border: '1px solid #333', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={item.img} alt={item.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px' }}>{item.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>₹{item.price}</span>
                <span style={{ color: '#888', fontSize: '10px', textDecoration: 'line-through' }}>₹{item.oldPrice}</span>
                <span style={{ color: '#cc0000', fontSize: '10px' }}>{item.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: '#888', fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px' }}>TOTAL PRICE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>₹{totalPrice.toLocaleString('en-IN')}</span>
          <span style={{ color: '#555', fontSize: '14px', textDecoration: 'line-through' }}>₹{totalOldPrice.toLocaleString('en-IN')}</span>
          <span style={{ color: '#555', fontSize: '12px' }}>-{totalDiscount}%</span>
        </div>
      </div>

      <button style={{ width: '100%', backgroundColor: '#cc0000', color: '#fff', border: 'none', padding: '15px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer', letterSpacing: '1px' }}>
        ADD BUNDLE TO CART
      </button>
    </div>
  );
};

export default FrequentlyBoughtTogether;
