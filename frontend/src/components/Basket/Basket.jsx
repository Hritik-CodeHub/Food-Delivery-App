import React from "react";
import "./Basket.css";
import { FaTrashAlt } from "react-icons/fa";

const Basket = () => {
  const items = [
    {
      id: 1,
      name: "Vegetarian Pizza",
      desc: "10'' Mushrooms + green peppers",
      qty: 1,
      price: 2790,
    },
    {
      id: 2,
      name: "Tandoori Pizza",
      desc: "10'' Mushrooms + green peppers",
      qty: 1,
      price: 1790,
    },
    {
      id: 3,
      name: "Coke Coca Cola",
      desc: "",
      qty: 2,
      price: 490,
    },
    {
      id: 4,
      name: "Vegetarian Pizza",
      desc: "10'' Mushrooms + green peppers",
      qty: 1,
      price: 2790,
    },
  ];

  const subtotal = 12790;
  const discount = 300;
  const deliveryFee = 250;
  const total = subtotal - discount + deliveryFee;

  const formatINR = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value / 100);
  };

  return (
    <aside className="basket">
      <div className="basket-header">
        <h3>🛒 My Basket</h3>
      </div>

      <div className="basket-items">
        {items.map((item, index) => (
          <div className="basket-item" key={index}>
            <div className="item-left">
              <span className="item-qty">{item.qty}x</span>
              <div className="item-info">
                <h4>{item.name}</h4>
                {item.desc && <p>{item.desc}</p>}
              </div>
            </div>
            <div className="item-right">
              <span>{formatINR(item.price)}</span>
              <button className="delete-btn">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="basket-summary">
        <div className="summary-row">
          <span>Sub Total:</span>
          <span>{formatINR(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Discount:</span>
          <span>-{formatINR(discount)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee:</span>
          <span>{formatINR(deliveryFee)}</span>
        </div>
      </div>

      <div className="total-to-pay">
        <p>Total to pay:</p>
        <h3>{formatINR(total)}</h3>
      </div>

      <div className="basket-options">
        <select>
          <option>Choose your free item</option>
        </select>
        <input type="text" placeholder="Apply Coupon Code here" />
      </div>

      <div className="basket-methods">
        <p>🚴 Delivery (from 17:00)</p>
        <p>📦 Collection (from 17:00)</p>
      </div>

      <button className="checkout-btn">Checkout!</button>
    </aside>
  );
};

export default Basket;
