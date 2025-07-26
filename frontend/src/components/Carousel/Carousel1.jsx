import React from 'react';
import './Carousel1.css';

const Carousel1 = () => {
  return (
    <>
      <section className="main-container">
        <div className="text-container">
          <p className="subtitle">Order Restaurant food, takeaway and groceries.</p>
          <h1 className="main-title">
            Feast Your Senses,<br />
            <span className="highlight-orange">Fast and Fresh</span>
          </h1>
          <form className="postcodeForm" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="e.g. EC4R 3TE" aria-label="Enter postcode" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="image-section">
      
          <img src="src/assets/image/carousel1.png" alt="girl eating pizza" className="image-1" /> 

          <img src="src/assets/image/carousel2.png" alt="girl eating noodles" className="image-2"/>

          <img src="src/assets/image/carousel3.png" alt="orange box" className="image-3" />  

          <div className="notification notification1">
            <b>Order</b>
            <p>We’ve received your order!</p>
            <p className="sub">Awaiting Restaurant acceptance</p>
          </div>

          <div className="notification notification2">
            <b>Order</b>
            <p>Order Accepted! ✅</p>
            <p className="sub">Your order will be delivered shortly</p>
          </div>

          <div className="notification notification3">
            <b>Order</b>
            <p>Your rider's nearby 🎉</p>
            <p className="sub">They’re almost there – get ready!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel1;






























// 
