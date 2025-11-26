import React, { useEffect, useState } from 'react'
import "./BrowseMenu.css"
import { FaSearch } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RestaurantDeals from '../../components/Deals/RestaurantDeals';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import axios from "axios";
import FoodCard from '../../components/FoodCard/FoodCard';
const BrowseMenu = () => {
    const [items, setItems] = useState("");
    let [search, setSearch] = useState("");

    const fetchMenuItems = async () => {
        try {

            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/menus?search=${search}`);
            const { success, data } = res.data
            if (success) {
                setItems(data);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }
    
    useEffect(()=>{
        fetchMenuItems();
    },[search]);

   console.log(items);
    return (<>
        <Navbar />
        <div style={{marginBottom:82}}></div>
     
        <div className="searchBar-style row g-3 align-items-center ">
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                    <h1>Search you favouriate meal</h1>
                </span>
            </div>
            <div className="browese-menu-search col-auto">
                <span><FaSearch style={{ 'fontSize': '18px', 'margin': '5px', 'color': 'grey' }} /></span>
                <input placeholder="Search from menu..." onChange={(e) => { setSearch(e.target.value) }} />
            </div>

        </div>
        
        <div className='browse-items-container'>
           {items && items.map((item, ind) => (
        <FoodCard item={item} key={ind} />
      ))}
        </div>
        <RestaurantCard />
        <Footer />
    </>)
}

export default BrowseMenu