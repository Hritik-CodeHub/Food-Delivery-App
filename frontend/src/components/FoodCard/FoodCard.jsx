import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import "./FoodCard.css";

const FoodCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const handleAddClick = () => {
    setShowCounter(true);
    setQuantity(1);
  };

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setShowCounter(false);
      setQuantity(0);
    }
  };

  return (
    <>
      {item && (
        <div className="meal-card-style card">
          {!showCounter ? (
            <div className="add-icon" onClick={handleAddClick}>
              <BsPlusCircleFill size={48} color="#000" />
            </div>
          ) : (
            <div className="add-icon icon-color">
              <button onClick={decrement}><FaMinus /></button>
              <span>{quantity}</span>
              <button onClick={increment}><FaPlus /></button>
            </div>
          )}

          <div className="meal-card-text">
            <h2><strong>{item.name}</strong></h2>
            <h5 className="card-title"><small>{item.description}</small></h5>
            <h4><strong>₹{item.price}</strong></h4>
          </div>

          <img src={item.menuItemImg} className="meal-img" alt="..." />
        </div>
      )}
    </>
  );
};

export default FoodCard;
