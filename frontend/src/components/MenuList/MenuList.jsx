import React, { useEffect } from 'react';
import './MenuList.css';
import { FaBars } from 'react-icons/fa';
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

const MenuList = ({list , setSelect}) => {

  useEffect(()=>{
    setSelect(list[0]);
  },[]);
  
  return (
    <div className="menu-container">
      <div className="menu-header">
        <FaBars size={24} color="white" style={{marginBottom:"5px"}}/>
        <h2>Menu</h2>
      </div>
      <ul className="menu-list">
        {list.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${index === 0 ? 'active' : ''}`}
            onClick={()=>{setSelect(item)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;