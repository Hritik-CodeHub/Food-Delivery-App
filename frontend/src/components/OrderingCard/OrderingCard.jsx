import React from "react";
import "./OrderingCard.css";
import chilli from "../../assets/chilli.png";
import ofc from "../../assets/ofc.jpg";
import ofc1 from "../../assets/ofc1.png";
import ofc2 from "../../assets/ofc2.png";

function OrderingCard() {

    return (
        <>

            <div class="ordering-card-container">
                <div class="row align-items-start">
                    <div class="col-md-3"></div>

                    <div class="ofc col">
                        
                        <div className="foodchoice">

                            <div className="fname">Farm House Xtreme Pizza</div>
                            <div className="fchilli"><img src={chilli} alt="chilli" /></div>
                            <div className="fitems">1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</div>

                            <div className="size-categories">

                                <div className="S box">
                                    <div className="fsize">
                                        <div className="fsize-category">Small</div>
                                        <div className="fsize-price">Rs.260</div>
                                    </div>
                                </div>

                                <div className="M">
                                    <div className="M-fsize">
                                        <div className="M-fsize-category">Medium</div>
                                        <div className="M-fsize-price">Rs.380</div>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="fsize">
                                        <div className="fsize-category">Large</div>
                                        <div className="fsize-price">Rs.520</div>
                                    </div>
                                </div>

                                <div className="XL">
                                    <div className="XL-fsize">
                                        <div className="XL-fsize-category">XL Large with Sauces</div>
                                        <div className="XL-fsize-price">Rs.680</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="foodchoiceimg"><img src={ofc} alt="foodchoiceimg" /></div>

                    </div>

                    <div class="col-md-3"></div>
                </div>
            </div>

             <div class="ordering-card-container">
                <div class="row align-items-start">
                    <div class="col-md-3"></div>

                    <div class="ofc col">
                        
                        <div className="foodchoice">

                            <div className="fname">Deluxe Pizza</div>
                            <div className="fchilli"><img src={chilli} alt="chilli" /></div>
                            <div className="fitems">1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</div>

                            <div className="size-categories">

                                <div className="S box">
                                    <div className="fsize">
                                        <div className="fsize-category">Small</div>
                                        <div className="fsize-price">Rs.260</div>
                                    </div>
                                </div>

                                <div className="M">
                                    <div className="M-fsize">
                                        <div className="M-fsize-category">Medium</div>
                                        <div className="M-fsize-price">Rs.380</div>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="fsize">
                                        <div className="fsize-category">Large</div>
                                        <div className="fsize-price">Rs.520</div>
                                    </div>
                                </div>

                                <div className="XL">
                                    <div className="XL-fsize">
                                        <div className="XL-fsize-category">XL Large with Sauces</div>
                                        <div className="XL-fsize-price">Rs.680</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="foodchoiceimg"><img src={ofc1} alt="foodchoiceimg" /></div>

                    </div>

                    <div class="col-md-3"></div>
                </div>
            </div>

            
             <div class="ordering-card-container">
                <div class="row align-items-start">
                    <div class="col-md-3"></div>

                    <div class="ofc col">
                        
                        <div className="foodchoice">

                            <div className="fname">Tandoori Pizza</div>
                            <div className="fchilli"><img src={chilli} alt="chilli" /></div>
                            <div className="fitems">1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks</div>

                            <div className="size-categories">

                                <div className="S box">
                                    <div className="fsize">
                                        <div className="fsize-category">Small</div>
                                        <div className="fsize-price">Rs.260</div>
                                    </div>
                                </div>

                                <div className="M">
                                    <div className="M-fsize">
                                        <div className="M-fsize-category">Medium</div>
                                        <div className="M-fsize-price">Rs.380</div>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="fsize">
                                        <div className="fsize-category">Large</div>
                                        <div className="fsize-price">Rs.520</div>
                                    </div>
                                </div>

                                <div className="XL">
                                    <div className="XL-fsize">
                                        <div className="XL-fsize-category">XL Large with Sauces</div>
                                        <div className="XL-fsize-price">Rs.680</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="foodchoiceimg"><img src={ofc2} alt="foodchoiceimg" /></div>

                    </div>

                    <div class="col-md-3"></div>
                </div>
            </div>

        </>
    )
}

export default OrderingCard;