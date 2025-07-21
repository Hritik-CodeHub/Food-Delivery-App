import React from 'react'
import meal from "..//../assets/meal.png"
import { BsPlusCircleFill } from 'react-icons/bs';
import "./FoodCard.css"

const FoodCard = () => {
    return (<>
         
        <div class="meal-card-style card ">
                  <div className='add-icon'><BsPlusCircleFill size={48} color="#000" /></div>
                  <div className="meal-card-text">
                  <h5 ><strong>Royal Cheese Burger with extra Fries</strong></h5>
                  <h6 className="card-title"><small>1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium</small></h6>
                  <h5><strong>GBP 23.10</strong></h5>
                  </div>
                <img src={meal} className="meal-img" alt="..." />
            </div>

    </>)
}

export default FoodCard