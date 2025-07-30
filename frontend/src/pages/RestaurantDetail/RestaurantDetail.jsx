import React, { use, useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import '../../components/SearchBar/SearchBar.css';
import Menu from '../../components/Menu/Menu';
import "./RestaurantDetail.css";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import { BsPlusCircleFill } from 'react-icons/bs';
import FoodCard from '../../components/FoodCard/FoodCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const RestaurantDetail = () => {
  const {id} = useParams();
  let [search,setSearch]=useState(id);
  let [resData,setResData]=useState("");
  let [categories,setCategories]=useState("");
  let [nameCity,setNameCity]=useState("");
  console.log(categories);

  const handleChange = (e) => {
    setSearch(e.target.value);

    console.log("Search input:", e.target.value);
  };

  useEffect(() => {
    const searchByRestaurant = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/searchMenu/${encodeURIComponent(search)}`)
        if (res.data.success) {
          console.log(res.data);
          const {restaurantName,city}=res.data;
          setNameCity({restaurantName,city});
          setResData(res.data.groupedMenu);
          setCategories(Object.keys(res.data.groupedMenu));
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchByRestaurant();
  }, [search])

  return (<>
    <Navbar />
    <Carousel />
    <div class="searchBar row g-3 align-items-center">
      <div class="col-auto">
        <span id="passwordHelpInline" class="form-text">
          <h1>All Offers from {nameCity.restaurantName} {nameCity.city}</h1>
        </span>
      </div>
      <div class="search col-auto">
        <span><FaSearch style={{ 'fontSize': '18px', 'margin': '5px', 'color': 'gray' }} /></span>
        <input placeholder="Search from menu..." 
        onChange={handleChange}/>
      </div>

    </div>
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
      {categories && categories.map((title,idx)=> (<>
        <h1>{title}</h1>
        <div className='meal-container'>
        {resData[title] && resData[title].map((item, ind) => (
        <FoodCard item={item} key={ind} />
      ))}
        </div>
      </>))}
      
      

    </div>
    <Footer />
  </>)
}

export default RestaurantDetail