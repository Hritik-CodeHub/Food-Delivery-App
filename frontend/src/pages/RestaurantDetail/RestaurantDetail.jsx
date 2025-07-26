import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import SearchBar from '../../components/SearchBar/SearchBar';
import Menu from '../../components/Menu/Menu';
import "./RestaurantDetail.css";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import { BsPlusCircleFill } from 'react-icons/bs';
import FoodCard from '../../components/FoodCard/FoodCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer"
const RestaurantDetail = () => {
  return (<>
     <Navbar/>
    <Carousel />
    <SearchBar />
    <Menu />
    <div className='all-items'>
    <div className='offers-container'>
      <div class="card-style card text-bg-dark">
        <img src={offer1} class="card-img" alt="..." />
        <div class="card-overlay">
          <div className='discount'><strong>-20%</strong></div>
          <div className='add-icon'><BsPlusCircleFill size={48} color="#000" /></div>
          <div className="card-text">
          <h5 className="card-title"><small>McDonald’s Lucknow</small></h5>
          <h3 >First Order Discount</h3>
          </div>
        </div>
    </div>
      <div class="card-style card text-bg-dark">
        <img src={offer2} class="card-img" alt="..." />
        <div class="card-overlay">
          <div className='discount'><strong>-20%</strong></div>
          <div className='add-icon'><BsPlusCircleFill size={48} color="#000" /></div>
          <div className="card-text">
          <h5 className="card-title"><small>McDonald’s Lucknow</small></h5>
          <h3 >Vegan Discount</h3>
          </div>
       
      </div>
    </div>
      <div class="card-style card text-bg-dark">
        <img src={offer3} class="card-img" alt="..." />
        <div class="card-overlay">
          <div className='discount'><strong>-20%</strong></div>
          <div className='add-icon'><BsPlusCircleFill size={48} color="#000" /></div>
          <div className="card-text">
          <h5 className="card-title"><small>McDonald’s Lucknow</small></h5>
          <h3 >Free ice Cream Offer</h3>
          </div>
      </div>
      </div>
    </div>
    <h1>Burgers</h1>
    <div className='meal-container'>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
    </div>
    <h1>Fries</h1>
    <div className='meal-container'>
      <FoodCard/>
    </div>
    <h1>Cold Drinks</h1>
    <div className='meal-container'>
      <FoodCard/>
    </div>
   
    </div>
    <Footer/>
  </>)
}

export default RestaurantDetail