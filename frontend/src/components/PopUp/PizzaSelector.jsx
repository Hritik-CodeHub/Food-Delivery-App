import React, { useState } from 'react';
import './PizzaSelector.css';

const initialPizzas = [
  { id: 1, name: 'Margherita', quantity: 1, image: '🍕' },
  { id: 2, name: 'Polo', quantity: 0, image: '🍕' },
  { id: 3, name: 'Meat Fiest', quantity: 1, image: '🍕' },
  { id: 4, name: 'Hawaiian', quantity: 0, image: '🍕' },
  { id: 5, name: 'Toscana', quantity: 0, image: '🍕' },
];

const PizzaSelector = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [selectedId, setSelectedId] = useState(4); 

  const updateQuantity = (id, delta) => {
  setPizzas(prev =>
    prev.map(p =>
      p.id === id
        ? { ...p, quantity: Math.max(0, p.quantity + delta) } 
        : p
    )
  );
  setSelectedId(id);
};


  const totalPrice = 175 ;

  return (
    <div className="pizza-selector">
      <img src="src\assets\image\RectanglePizza1.png" alt="Pizza background" className="pizza-top-img" />

      <div className="pizza-body">
        <p className="breadcrumb">Special Offers &gt; Meal Deal 1</p>
        <h2>Please select your first Pizza</h2>

        <div className="pizza-list">
          {pizzas.map(pizza => (
            <div
              key={pizza.id}
              className={`pizza-item ${selectedId === pizza.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(pizza.id)}
            >
              <div className="pizza-left">
                <span className="emoji">{pizza.image}</span>
                <span className="pizza-name">{pizza.name}</span>
              </div>
              <div className="quantity-box">
                <button onClick={() => updateQuantity(pizza.id, -1)}>-</button>
                <span>{pizza.quantity}</span>
                <button onClick={() => updateQuantity(pizza.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <div className="price">
            <span className="total-label">Total to pay</span>
            <span className="price-value">{totalPrice.toFixed(2)} Rs.</span>
          </div>
          <div className="footer-actions">
            <button className="back-btn">Take me back</button>
            <button className="next-btn">Next Step</button>
          </div>
          <small className="note">Delivery & Tax will be calculated in the next step</small>
        </div>
      </div>
    </div>
  );
};

export default PizzaSelector;
