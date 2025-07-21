import React from "react";
import './RestaurantDeals.css';
import restdeals1 from '../../assets/restdeals1.jpg';
import restdeals2 from '../../assets/restdeals2.jpg';
import restdeals3 from '../../assets/restdeals3.jpg';
import restdeals4 from '../../assets/restdeals4.jpg';
import restdeals5 from '../../assets/restdeals5.jpg';
import restdeals6 from '../../assets/restdeals6.jpg';
import restdeals7 from '../../assets/restdeals7.jpg';
import restdeals8 from '../../assets/restdeals8.jpg';
import restdeals9 from '../../assets/restdeals9.jpg';

function RestDeals() {
    const slides = [
        {
            images: [restdeals1, restdeals2, restdeals3],
            names: ["Baba Ka Dhaba", "Ovens Pizza", "Moti Mahal"]
        },
        {
            images: [restdeals4, restdeals5, restdeals6],
            names: ["Dominos Pizza", "Shree Rajbhog", "The Royal Cafe"]
        },
        {
            images: [restdeals7, restdeals8, restdeals9],
            names: ["The Cherry Tree Cafe", "Mc Donalds", "Brews & Munch"]
        }
    ];

    return (
        <div id="carouselExampleIndicators" className="rest-deals carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : ""}
                        aria-current={i === 0 ? "true" : "false"}
                        aria-label={`Slide ${i + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner container-fluid px-4">
                <div className="dealshead  mb-4 ">Up to -40% 🎊 Order.India exclusive deals</div>

                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {slide.images.map((img, idx) => (
                                <div key={idx} className="deal-card position-relative">
                                    <img className="dealsimg" src={img} alt={`deal${idx}`} />
                                    <div className="card-overlay">
                                        <p>Restaurant</p>
                                        <div className="rest-name">{slide.names[idx]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="icon carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="icon carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default RestDeals;
