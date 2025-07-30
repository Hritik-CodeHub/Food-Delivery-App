import React from 'react'
import "./BrowseMenu.css"
import { FaSearch } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import HowItWorks from "../../components/UpperFooter/HowItWorks"
import Footer from '../../components/Footer/Footer';
import RestaurantDeals from '../../components/Deals/RestaurantDeals';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
const BrowseMenu = () => {
  return (<>
  <Navbar/>
  <div class="searchBar-style row g-3 align-items-center ">
              <div class="col-auto">
                  <span id="passwordHelpInline" class="form-text">
                      <h1>Search you favirate meal</h1>
                  </span>
              </div>
              <div class="browese-menu-search col-auto">
                  <span><FaSearch style={{ 'fontSize':'18px' , 'margin':'5px', 'color':'grey'}} /></span>
                  <input  placeholder="Search from menu..." />
              </div>
  
          </div> 
          <RestaurantDeals/>
          <RestaurantCard/>
          <HowItWorks/>
          <Footer/>
  </>)
}

export default BrowseMenu