// /context/BasketContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [basket, setBasket] = useState({}); // { itemId: quantity }
  const [restaurantName,setrestaurantName]=useState('');

  useEffect(()=>{
    if (user?._id) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user-info`,{ id:user._id })
        .then(res => {
          if (res.data.success) {
            const map = {};
            res.data.userData.myBasket.forEach(item => {
              map[item.item._id] = item.quantity;
            });
            setBasket(map);
          }
        })
        .catch(err => console.error(err));
    }
  },[user]);


  const addItem = async (itemId) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/basket/items`, {
        userId: user._id,
        itemId
      });
      if (res.data.success) {
        setBasket(prev => ({
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (itemId) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/basket/remove-items`, {
        userId: user._id,
        itemId
      });
      if (res.data.success) {
        setBasket(prev => {
          const updated = { ...prev };
          if (updated[itemId] > 1) {
            updated[itemId] -= 1;
          } else {
            delete updated[itemId];
          }
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    <BasketContext.Provider value={{ basket, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
};
