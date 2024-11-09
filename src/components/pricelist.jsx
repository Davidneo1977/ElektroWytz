
import React, { useState } from 'react';
import PricelistItem from './pricelistitem';
import './pricelist.scss';

const Pricelist = () => {
  const items = [
    { id: 1, title: 'Sekání drážky v ytongu (do šíře 30mm,  do hl.30mm)', pricePerMeter: 59 },
    { id: 2, title: 'Sekání drážky v ytongu (do šíře 50mm,  do hl.40mm)', pricePerMeter: 69 },
    { id: 3, title: 'Sekání drážky v ytongu (do šíře 100mm, do hl.40mm)', pricePerMeter: 79 },
    { id: 4, title: 'Tahání přívodních kabeků nízkeho napětí NP 230/400', pricePerMeter: 90 },
    { id: 5, title: 'Tahání slaboproudých kabelů internetu/MaR/TV/PO/Z', pricePerMeter: 80 },
    { id: 6, title: 'Zapojení a odzkoušení zásuvkového obvodu 230/400V ', pricePerMeter: 95 },
    { id: 7, title: 'Zapojení a odzkoušení světelného obvodu 230V/24V', pricePerMeter: 95 },
    { id: 8, title: 'Kompletace bytové a nebytové eletroinstalace 230V', pricePerMeter: 120 },
    { id: 9, title: 'Revize bytové a nebytové elektroinstalace 230/400V', pricePerMeter: 800 },
    { id: 10, title: 'Revize bytových a hlavních F rozváděčů 230V/400V', pricePerMeter: 900 },
  ];

  const [quantities, setQuantities] = useState(Array(items.length).fill(0));

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const handleReset = () => {
    setQuantities(Array(items.length).fill(0));  
  };

  const totalPrice = quantities.reduce((total, qty, index) => total + qty * items[index].pricePerMeter, 0);
  

  return (
    <div className="pricelist">
      {items.map((item, index) => (
        <PricelistItem
          key={item.id}
          title={item.title}
          pricePerMeter={item.pricePerMeter}
          quantity={quantities[index]}
          onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
          />
          ))}
          
      <div className="total">
        <p>Cena  celkem: {totalPrice} Kč</p>
        <button onClick={handleReset}>VYMAZAT</button>
      </div>
      
    </div>
  );
};

export default Pricelist;
