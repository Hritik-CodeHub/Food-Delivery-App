import React, { useContext } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import "./FoodCard.css";
import { BasketContext } from '../../context/BasketContext';

const FoodCard = ({ item }) => {
  const { basket, addItem, removeItem } = useContext(BasketContext);

  const quantity = basket[item._id] || 0;

  return (
    <div className="meal-card-style card">
      {quantity === 0 ? (
        <div className="add-icon" onClick={() => addItem(item._id)}>
          <BsPlusCircleFill size={48} color="#000" />
        </div>
      ) : (
        <div className="add-icon icon-color">
          <button onClick={() => removeItem(item._id)}><FaMinus /></button>
          <span>{quantity}</span>
          <button onClick={() => addItem(item._id)}><FaPlus /></button>
        </div>
      )}

      <div className="meal-card-text">
        <div>
          <h2><strong>{item.name}</strong></h2>
          <span className='rating'><FaStar style={{ color: "green" }} /> {item.rating}</span>
          <h5 className="card-title"><small>{item.description}</small></h5>
        </div>
        <h4><strong>₹{item.price}</strong></h4>
      </div>

      <img src={item.menuItemImg} className="meal-img" alt="..." />
    </div>
  );
};

export default FoodCard;
