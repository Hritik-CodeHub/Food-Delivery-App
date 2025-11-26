import React, { useContext } from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Carousel from '../../components/Carousel/Carousel'
import RestaurantDeals from '../../components/Deals/RestaurantDeals'
import breakfast from '../../assets/breakfast.jpg';
import burger from '../../assets/burger.jpg';
import pasta from '../../assets/pasta.jpeg';
import pizza from '../../assets/pizza.avif';
import salad from '../../assets/salad.avif';
import soup from '../../assets/soup.jpg';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import HowItWorks from "../../components/UpperFooter/HowItWorks"
import Footer from "../../components/Footer/Footer"
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import PartnerWithUsCard from '../../components/PartnerWithUsCard/PartnerWithUsCard'
import RiderCard from '../../components/RiderCard/RiderCard'

const Home = () => {
  
  let foodItem = [
    { src: burger, title: "Burgers & Fast Food", alt: "burgers" },
    { src: salad, title: "Salads", alt: "salads" },
    { src: pasta, title: "Pasta & Casuals", alt: "pastas" },
    { src: pizza, title: "Pizza", alt: "pizzas" },
    { src: breakfast, title: "Breakfast", alt: "breakfasts" },
    { src: soup, title: "Soups", alt: "soups" },
  ];
  const { cardData } = useContext(UserContext);
  console.log(cardData);
  return (<>
    <Navbar />
    <Carousel />
    <RestaurantDeals />
    <div className=" hero">
      <div className="hero-head" style={{ textAlign: "left" }}>
        Order.India Popular Categories 🤩
      </div>

      <div className="row">
        {foodItem.map((item, index) => (
          <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
            <Link to={`/restaurants/${item.title.trim()}`} className="link-style card h-100">
              <img src={item.src} className="foodimg card-img-top" alt={item.alt} />
              <div className="bd card-body d-flex align-items-center justify-content-center">
                <h5 className="food-head card-title text-center">{item.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <RestaurantCard />
    <div className='cls '>
      <PartnerWithUsCard/>
      <RiderCard />
    </div>
    <HowItWorks />
    <Footer />
  </>)
}

export default Home