import React from 'react';
import './Carousel2.css';
import img1 from "../../assets/carousel1.png"
import img2 from "../../assets/carousel2.png"
import img3 from "../../assets/carousel3.png"
const Carousel2 = () => {
    return (
        <>
            <div className='carousel-container'>
                <section className="main-container">
                    <div className="text-container">
                        <p className="subtitle">Order Restaurant food, takeaway and groceries.</p>
                        <h1 className="main-title">
                            Feast Your Senses,<br />
                            <span className="highlight-orange">Fast and Fresh</span>
                        </h1>
                        
                    </div>

                    <div className="image-section">

                        <img src={img1} alt="girl eating pizza" className="img-pizza" />
                        <img src={img2} alt="girl eating noodles" className="img-noodles" />
                        <img src={img3} alt="orange box" className="img-box" />

                        <div className="notification notif-order-received">
                            <b>Order.india</b>
                            <p><strong>We’ve received your order!</strong></p>
                            <p className="sub">Awaiting Restaurant acceptance</p>
                        </div>

                        <div className="notification notif-order-accepted">
                            <b>Order.india</b>
                            <p><strong>Order Accepted! ✅</strong></p>
                            <p className="sub">Your order will be delivered shortly</p>
                        </div>

                        <div className="notification notif-rider-nearby">
                            <b>Order.india</b>
                            <p><strong>Your rider's nearby 🎉</strong></p>
                            <p className="sub">They’re almost there – get ready!</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Carousel2;
