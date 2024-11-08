// PricelistItem.js
import React from 'react';

const PricelistItem = ({ title, pricePerMeter, quantity, onQuantityChange }) => {
  const increaseQuantity = () => onQuantityChange(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) onQuantityChange(quantity - 1);
  };

  return (
    <div className="pricelist-item">
      <p className="title">{title}</p>
      <p className="price">{pricePerMeter} Kč / mb</p>
      <div className="controls">
        <button onClick={decreaseQuantity}>-</button>
        <span className="quantity">{quantity} mb</span>
        <button onClick={increaseQuantity}>+</button>
        <span className="total">{quantity * pricePerMeter} Kč</span>
      </div>
    </div>
  );
};

export default PricelistItem;


