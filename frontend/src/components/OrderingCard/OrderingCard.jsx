import React, { useContext } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import "./OrderingCard.css";
import { BasketContext } from '../../context/BasketContext';

function OrderingCard({ item }) {
  const { basket, addItem, removeItem } = useContext(BasketContext);
  const quantity = basket[item._id] || 0;

    return (<>
        <div className="ord-card-style card ">
            {quantity === 0 ? (
                    <div className="ord-add-icon" onClick={() => addItem(item._id)}>
                      <BsPlusCircleFill size={48} color="#000" />
                    </div>
                  ) : (
                    <div className="ord-add-icon icon-color">
                      <button onClick={() => removeItem(item._id)}><FaMinus /></button>
                      <span>{quantity}</span>
                      <button onClick={() => addItem(item._id)}><FaPlus /></button>
                    </div>
                  )}
            
            <div className="ord-card-text">
                <h3 ><strong>{item.name}</strong></h3>
                <h4 className="ord-card-title"><small>{item.description}</small></h4>
                <span className="ord-stars">{item.rating}★ ★ ★ ★ ☆</span>
                <h3><strong>₹{item.price}</strong></h3>
            </div>
            <img src={item.menuItemImg} className="ord-card-img" alt="..." />
        </div>
    </>
    )
}

export default OrderingCard;