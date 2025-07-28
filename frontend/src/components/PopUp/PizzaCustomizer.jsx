import React, { useState } from 'react';
import './PizzaCustomizer.css';


const toppings = {
  vegetable: ['Cheese', 'Green peppers', 'Tomato', 'Mushrooms', 'Sweetcorns', 'Jalapeneos', 'Olives', 'Pineapples', 'Onions'],
  meat: ['Chicken', 'Beef', 'Salami', 'Pepperoni', 'Chicken Tikka', 'Fish'],
  seafood: ['Tuna', 'Anchovies', 'Prawns'],
};

const PizzaCustomizer = () => {
  const [selected, setSelected] = useState([]);
  const maxSelection = 4;

  const handleToggle = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item));
    } else if (selected.length < maxSelection) {
      setSelected([...selected, item]);
    }
  };

  const renderCheckboxGroup = (title, icon, items) => (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-2 section-header">
        <span className="icon-circle me-2">{icon}</span>
        <span className="section-title px-3 py-1">{title}</span>
      </div>
      <div className="row">
        {items.map(item => (
          <div className="col-6 col-md-4" key={item}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={item}
                checked={selected.includes(item)}
                onChange={() => handleToggle(item)}
              />
              <label className="form-check-label" htmlFor={item}>
                {item}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pizza-modal container p-0">
      <div className="pizza-header">
        <img src="src\assets\image\RectanglePizza.png" alt="Pizza" className="img-fluid rounded-top" />
      </div>
      <div className="pizza-customizer p-4">
        <h5 className="mb-1">Customise your chicken Pizza</h5>
        <p className="text-danger fw-bold">Please select up to 4 options free!</p>
        <p className="text-success">{selected.length}/4 Selected</p>

        {renderCheckboxGroup('Vegetable Toppings', '🥦', toppings.vegetable)}
        {renderCheckboxGroup('Meat Toppings', '🍖', toppings.meat)}
        {renderCheckboxGroup('Seafood Toppings', '🐟', toppings.seafood)}

        <div className="d-flex justify-content-between align-items-center mt-4">
          <span className="price-tag fw-bold">Total to pay: 175 Rs.</span>
          <div>
            <button className="btn btn-outline-secondary me-2">Take me back</button>
            <button className="btn btn-success">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomizer;
