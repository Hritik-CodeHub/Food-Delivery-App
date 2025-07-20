import React from "react";
import './RestaurantCard.css';
import taj from '../assets/tajindia.jpeg';
import mcd from '../assets/mcd.webp';
import dosahouse from '../assets/dosahouse.png';
import bk from '../assets/bk.png';
import lalit from '../assets/lalit.png';
import dominos from '../assets/dominos.png';

function RestaurantCard() {
    return (
        <>
            <div className="resthero">

                <div className="rest-hero-head">
                    Popular Restaurants
                </div>

                <div class="row align-items-start">

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={taj} class="restimg card-img-top" alt="The Taj" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">The Taj Restaurant</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={mcd} class="restimg card-img-top" alt="Mc Donalds" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">Mc Donald's</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={dosahouse} class="restimg card-img-top" alt="The Dosa Hub" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">Dosa House</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={bk} class="restimg card-img-top" alt="BK" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">Burger King</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={lalit} class="restimg card-img-top" alt="The Lalit" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">The Lalit</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18 rem", marginTop: "25px" }}>
                            <img src={dominos} class="restimg card-img-top" alt="Dominos" />
                            <div class="rd card-body">
                                <h5 class="rest-head card-title">Domino's</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default RestaurantCard;




