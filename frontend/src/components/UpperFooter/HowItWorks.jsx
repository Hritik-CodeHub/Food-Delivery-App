import React from 'react';
import './HowItWorks.css';
import orderIcon from '../../Assets/orderIcon.png'
import progressIcon from '../../Assets/progressIcon.png'
import deliveryIcon from '../../Assets/deliveryIcon.png'

const HowItWorks = () => {
  return (<>
    <div className="how-it-works-wrapper">
      <section className="how-it-works">
       

        <div className="tabs">
          <h3>Know more about us!</h3>
          <button className="active-tab">Frequent Questions</button>
          <button>Who we are?</button>
          <button>Partner Program</button>
          <button>Help & Support</button>
        </div>

        <div className="how-container">
          <div className="faq-list">
            <button className="faq-btn active">How does Order.UK work?</button>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or promotions available?</p>
            <p>Is Order.UK available in my area?</p>
          </div>

          <div className="how-cards">
            <div className="card">
              <img src={orderIcon} alt="Place Order" />
              <h4>Place an Order!</h4>
              <p>Place order through our website or Mobile app</p>
            </div>
            <div className="card">
              <img src={progressIcon} alt="Track Progress" />
              <h4>Track Progress</h4>
              <p>Your can track your order status with delivery time</p>
            </div>
            <div className="card">
              <img src={deliveryIcon} alt="Get Order" />
              <h4>Get your Order!</h4>
              <p>Receive your order at a lighting fast speed!</p>
            </div>
          </div>
        </div>

        <p className="description">
          Order.India simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes,
          and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </section>
    </div>
    <div>
    <section className="stats-bar">
        <div className="stat"><span>546+</span><p>Registered Riders</p></div>
        <div className="stat"><span>789,900+</span><p>Orders Delivered</p></div>
        <div className="stat"><span>690+</span><p>Restaurants Partnered</p></div>
        <div className="stat"><span>17,457+</span><p>Food items</p></div>
      </section>
    </div></>
  );
};

export default HowItWorks;
