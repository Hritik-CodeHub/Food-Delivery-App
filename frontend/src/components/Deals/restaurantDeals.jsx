
import react from "react";
import './restaurantDeals.css';
import restdeals1 from '../assets/restdeals1.jpg';
import restdeals2 from '../assets/restdeals2.jpg';
import restdeals3 from '../assets/restdeals3.jpg';
import restdeals4 from '../assets/restdeals4.jpg';
import restdeals5 from '../assets/restdeals5.jpg';
import restdeals6 from '../assets/restdeals6.jpg';
import restdeals7 from '../assets/restdeals7.jpg';
import restdeals8 from '../assets/restdeals8.jpg';
import restdeals9 from '../assets/restdeals9.jpg';

function RestDeals() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="container carousel-inner">

                    <div className="dealshead">Up to -40% 🎊 Order.India exclusive deals</div>

                    <div class="carousel-item active">
                        <img className="dealsimg" src={restdeals1} alt="deal1" />
                        <img className="dealsimg" src={restdeals2} alt="deal2" />
                        <img className="dealsimg" src={restdeals3} alt="deal3" />
                        <div className="textfoot">
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div> Baba Ka Dhaba
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Ovens Pizza
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Moti Mahal
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img className="dealsimg" src={restdeals4} alt="deal4" />
                        <img className="dealsimg" src={restdeals5} alt="deal5" />
                        <img className="dealsimg" src={restdeals6} alt="deal6" />
                        <div className="textfoot">
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Dominos Pizza
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Shree Rajbhog
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>The Royal Cafe
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img className="dealsimg" src={restdeals7} alt="deal7" />
                        <img className="dealsimg" src={restdeals8} alt="deal8" />
                        <img className="dealsimg" src={restdeals9} alt="deal9" />
                        <div className="textfoot">
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div> The Cherry Tree Cafe
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Mc Donalds
                            </div>
                            <div className="dealsfoot">
                                <div className="rest">Restaurant</div>Brews & Munch
                            </div>
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </>
    );
};


export default RestDeals;



