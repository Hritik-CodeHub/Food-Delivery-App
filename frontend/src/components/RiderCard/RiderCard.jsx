import React from 'react';
import '../PartnerWithUsCard/PartnerWithUsCard.css'; // custom styles (see below)
import chefImg from "../../assets/riderImg.png";

const RiderCard = () => {
  
  return (
      <div className="position-relative  p-0 d-flex " style={{ width: "650px" }}>
        <div className='overlay-content rounded'></div>
        <img
          src={chefImg}
          alt="Chef Partner"
          className="img-fluid w-100 rounded"
        />

        {/* White top-left pill box */}
        <div className="tag-msg position-absolute top-0 start-2 ms-4 m-3 p-2 px-2 bg-white rounded fw-semibold shadow-sm">
          Avail exclusive perks
        </div>

        {/* Overlay Content */}
        <div className="position-absolute bottom-0 text-white d-flex flex-column justify-content-center h-50  ps-4 ">
          <p className="mb-1 text-warning fw-semibold">Signup as a rider</p>
          <h1 className="fw-bold text-light mb-3">Ride with us</h1>
          <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill mb-3" >
            Get Started
          </button>
        </div>
      </div>
  );
};

export default RiderCard;
