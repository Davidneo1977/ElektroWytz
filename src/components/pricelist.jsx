import React, { useState, useEffect } from 'react';


const priceListItems = [
  { id: 1, name: 'Instalace zásuvky ks', price: 60 },
  { id: 2, name: 'Instalace vypínače ks', price: 55 },
  { id: 3, name: 'Instalace světla ks', price: 70 },
  { id: 4, name: 'Instalace rozváděče', price: 300 },
  { id: 5, name: 'Revize rozváděče', price: 400 },
  { id: 6, name: 'Zapojení velkého rozváděče', price: 4200 },
  { id: 7, name: 'Zapojení BR 36 modulů', price: 2500 },
  { id: 8, name: 'Drážkování do Ytongu 1/bm', price: 100 },
  { id: 9, name: 'Drážkování do cihly 1/bm', price: 120 },
  { id: 10, name: 'Drážkování do betonu 1/bm', price: 150 },
  
  
];

function PriceList() {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // přidání položky
  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  // odebrání položky
  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  // Výpočet celkové ceny
  useEffect(() => {
    const total = priceListItems.reduce((sum, item) => {
      return sum + (quantities[item.id] || 0) * item.price;
    }, 0);
    setTotalPrice(total);
  }, [quantities]);

  // Funkce pro resetování 
  const resetAll = () => {
    setQuantities({});
    setTotalPrice(0);
  };

  return (
    <div className="price-list">
      <h3>Ceník elektro praci</h3>
      {priceListItems.map((item) => (
        <div key={item.id} className="price-item">
          <span>{item.name}</span>
          <span>{item.price} Kč</span>
          <div className="controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{quantities[item.id] || 0}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <h4>Elektro práce celkem: {totalPrice} Kč</h4>
      </div>
      <button className="reset-button" onClick={resetAll}>Resetovat</button>
    </div>
  );
}

export default PriceList;

