import react from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import AppNavbar from './components/Navbar/navBar';
import RestDeals from './components/Deals/restaurantDeals';
import Foodcard from './components/FoodCard/foodCard';
import RestaurantCard from './components/RestaurantCard/restaurantCard';



function App() {

  return(
    <>
      <AppNavbar/>
      <RestDeals/>
      <Foodcard/>
      <RestaurantCard/>
    </>
  )
};

export default App;
