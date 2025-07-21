import React from "react";
import './RestaurantCard.css';
import taj from '../../assets/tajindia.jpeg';
import mcd from '../../assets/mcd.webp';
import dosahouse from '../../assets/dosahouse.png';
import bk from '../../assets/bk.png';
import lalit from '../../assets/lalit.png';
import dominos from '../../assets/dominos.png';

function RestaurantCard() {
    const restaurants = [
        { img: taj, name: "The Taj Restaurant", alt: "The Taj" },
        { img: mcd, name: "Mc Donald's", alt: "Mc Donalds" },
        { img: dosahouse, name: "Dosa House", alt: "The Dosa Hub" },
        { img: bk, name: "Burger King", alt: "BK" },
        { img: lalit, name: "The Lalit", alt: "The Lalit" },
        { img: dominos, name: "Domino's", alt: "Dominos" },
    ];

    return (
        <div className="container resthero">
            <div className="rest-hero-head  mb-4">
                Popular Restaurants
            </div>

            <div className="row">
                {restaurants.map((rest, index) => (
                    <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
                        <div className="rest0-card-style card h-100">
                            <img src={rest.img} className="restimg card-img-top" alt={rest.alt} />
                            <div className="rd card-body d-flex align-items-center justify-content-center">
                                <h5 className="rest-head  text-center">{rest.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantCard;
