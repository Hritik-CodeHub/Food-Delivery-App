import React, { useState } from 'react';
import './PizzaCustomizer.css';

const MAX_SELECTION = 4;

const toppingOptions = {
  vegetable: ['Cheese', 'Green peppers', 'Tomato', 'Mushrooms', 'Sweetcorn', 'Jalapeneos', 'Olives', 'Pineapples', 'Onions'],
  meat: ['Chicken', 'Beef', 'Salami', 'Pepperoni', 'Chicken Tikka', 'Fish'],
  seafood: ['Tuna', 'Anchovies', 'Prawns'],
};

const PizzaCustomizer = () => {
  const [selected, setSelected] = useState([]);

  const handleToggle = (topping) => {
    if (selected.includes(topping)) {
      setSelected(prev => prev.filter(item => item !== topping));
    } else if (selected.length < MAX_SELECTION) {
      setSelected(prev => [...prev, topping]);
    }
  };

  const isChecked = (topping) => selected.includes(topping);
  const remaining = MAX_SELECTION - selected.length;

  return (
    <div className="toppings-selector">
      <img src="src\assets\image\RectanglePizza.png" alt="Pizza Top" className="top-image" /> 

      <div className="toppings-body">
        <div className="breadcrumbs">
          Special Offers &gt; Meal Deal 1 &gt; Customise Pizza 1
        </div>

        <div className="selection-info">
          <span className="subtitle">Customise your chicken Pizza</span>
          <span className="limit-text">
            {remaining > 0 ? `you can still select ${remaining} more` : 'limit reached'}
          </span>
        </div>

        <div className="count-selected">{selected.length}/{MAX_SELECTION} Selected</div>

        <h3 className="main-title">Please select up to 4 options free!</h3>

        <ToppingGroup
          title="Vegetable Toppings"
          icon="🥕"
          options={toppingOptions.vegetable}
          selected={selected}
          handleToggle={handleToggle}
        />

        <ToppingGroup
          title="Meat Toppings"
          icon="🍖"
          options={toppingOptions.meat}
          selected={selected}
          handleToggle={handleToggle}
        />

        <ToppingGroup
          title="Seafood Toppings"
          icon="🐟"
          options={toppingOptions.seafood}
          selected={selected}
          handleToggle={handleToggle}
        />

        <div className="toppings-footer">
          <div className="price-box">Total to pay: 175 Rs.</div>
          <div className="footer-actions">
            <button className="back-btn">Take me back</button>
            <button className="next-btn">Next Step</button>
          </div>
          <small className="footer-note">Delivery & Tax will be calculated in the next step</small>
        </div>
      </div>
    </div>
  );
};

const ToppingGroup = ({ title, icon, options, selected, handleToggle }) => {
  return (
    <div className="topping-group">
      <div className="group-header">
        <span className="group-icon">{icon}</span>
        <span className="group-title">{title}</span>
      </div>
      <div className="topping-options">
        {options.map(option => (
          <label key={option} className="topping-checkbox">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleToggle(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PizzaCustomizer;
