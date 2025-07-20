import react from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css'
import AppNavbar from './components/Navbar/NavBar';
import RestDeals from './components/Deals/RestaurantDeals';
import Card from './components/Card/Card';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';



function App() {

  return(
    <>
      <AppNavbar/>
      <RestDeals/>
      <Card/>
      <RestaurantCard/>
    </>
  )
};

export default App;
