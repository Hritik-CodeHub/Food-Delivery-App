import React, { useState } from 'react';
import './Carousel.css';
import mcdonalds1 from '../../assets/mcdonalds1.png';
import tandoori from '../../assets/tandoori.png';

const carouselItems = [
  {
    id: 1,
    subtitle: "I'm lovin' it!",
    title: "McDonald’s Lucknow",
    image: mcdonalds1,
    rating: 3.4,
    reviews: 1360,
    minOrder: '12 GBP',
    deliveryTime: '20–25 Minutes',
  },
  {
    id: 2,
    subtitle: "I'm lovin' it!",
    title: "McDonald’s Lucknow",
    image: mcdonalds1,
    rating: 3.4,
    reviews: 1360,
    minOrder: '12 GBP',
    deliveryTime: '20–25 Minutes',
  },
  {
    id: 3,
    subtitle: 'Desi Flavours with a blend of Italian aesthetics!',
    title: 'Tandoori Pizza Lucknow',
    image: tandoori,
    rating: 3.4,
    reviews: 1360,
    minOrder: '12 GBP',
    deliveryTime: '20–25 Minutes',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % carouselItems.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-card">
          <div className="overlay"></div>
        <div className="card-content">
          <div className="left">
            <p className="subtitle">{carouselItems[currentIndex].subtitle}</p>
            <h1>{carouselItems[currentIndex].title}</h1>
            <div className="tags">
              <span className="tag">📦 Minimum Order: {carouselItems[currentIndex].minOrder}</span>
              <span className="tag">🚴 Delivery in {carouselItems[currentIndex].deliveryTime}</span>
            </div>
            <div className="rating">
              <span className="score">{carouselItems[currentIndex].rating}</span>
              <span className="stars">★ ★ ★ ★ ☆</span>
              <span className="reviews">{carouselItems[currentIndex].reviews} reviews</span>
            </div>
            <button className="open-btn">🕒 Open until 3:00 AM</button>
          </div>
          <div className="right">
            <img src={carouselItems[currentIndex].image} alt="dish" />
          </div>
        </div>
        <div className="carousel-buttons">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        
        </div>
      </div>
    </div>
  );
};

export default Carousel;
