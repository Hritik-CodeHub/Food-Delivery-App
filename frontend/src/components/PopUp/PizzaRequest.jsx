import React from 'react';
import './PizzaRequest.css';

const PizzaRequest = () => {
  return (
    <div className="request-page">
      <div className="request-header">
        <img src="src\assets\image\RectanglePizza.png" alt="Pizza Background" className="request-bg-img" />
      </div>

      <div className="request-body">
        <div className="breadcrumb">
          Special Offers &gt; Meal Deal &gt; Customise Pizza &gt; Instructions
        </div>

        <h3 className="title">Customise your Chicken Pizza</h3>
        <h4 className="subtitle">Add your special request</h4>

        <textarea
          className="request-textarea"
          placeholder="Enter your special instructions here..."
        />

        <div className="request-footer">
          <span className="price-box">Total to pay: 175 Rs.</span>
          <div className="footer-buttons">
            <button className="back-btn">Take me back</button>
            <button className="add-btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaRequest;
