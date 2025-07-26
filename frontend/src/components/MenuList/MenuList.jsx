
import React from 'react';
import './MenuList.css';

const menuItems = [
  'Pizzas',
  'Garlic Bread',
  'Calzone',
  'Kebabas',
  'Salads',
  'Cold drinks',
  'Happy Meal',
  'Desserts',
  'Hot drinks',
  'Sauces',
  'Orbit'
];

const MenuList = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="\src\assets\image\Menu.png" alt="Menu Icon" className="menu-icon" />
        <h2>Menu</h2>
      </div>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${index === 0 ? 'active' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
