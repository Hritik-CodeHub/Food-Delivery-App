import React from "react";
import './foodCard.css';
import breakfast from '../assets/breakfast.jpg';
import burger from '../assets/burger.jpg';
import pasta from '../assets/pasta.jpeg';
import pizza from '../assets/pizza.avif';
import salad from '../assets/salad.avif';
import soup from '../assets/soup.jpg';


function Foodcard() {
    return (
        <>
            <div className="hero">

                <div className="hero-head">
                    Order.India Popular Categories 🤩
                </div>

                <div class="row align-items-start">

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop:"25px" }}>
                            <img src={burger} class="foodimg card-img-top" alt="burgers" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Burgers & Fast Food</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem",marginTop:"25px"}}>
                            <img src={salad}class="foodimg card-img-top" alt="salads" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Salads</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem",marginTop:"25px" }}>
                            <img src={pasta}class="foodimg card-img-top" alt="pastas" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Pasta & Casuals</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem",marginTop:"25px" }}>
                            <img src={pizza} class="foodimg card-img-top" alt="pizzas" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Pizza</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem",marginTop:"25px" }}>
                            <img src={breakfast} class="foodimg card-img-top" alt="breakfasts" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Breakfast</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem",marginTop:"25px" }}>
                            <img src={soup} class="foodimg card-img-top" alt="soups" />
                            <div class="bd card-body">
                                <h5 class="food-head card-title">Soups</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </>
    );
};

export default Foodcard;