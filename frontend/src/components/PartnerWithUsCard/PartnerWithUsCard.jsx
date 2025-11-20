import React from "react";
import "./PartnerWithUsCard.css"; 
import chefImg from "../../assets/chef.png"; 
import { useNavigate } from "react-router-dom";

const PartnerWithUsCard = () => {
  const navigation=useNavigate();

  const handleClick=()=>{
    if(localStorage.getItem("admin-token")){
      navigation("/admin-dashboard");
    }
    else{
      navigation("/admin-regis");
    }
  }
  return (
          <div className="position-relative col-md-6 p-0 d-flex" style={{ width: "650px" }}>
            <div className='overlay-content rounded'></div>
            <img
              src={chefImg}
              alt="Chef Partner"
              className="img-fluid w-100 rounded"
            />
    
            {/* White top-left pill box */}
            <div className="tag-msg position-absolute top-0 start-2 ms-4 m-3  p-2 px-2 bg-white rounded fw-semibold shadow-sm">
              Earn more with lower fees
            </div>
    
            {/* Overlay Content */}
            <div className="position-absolute bottom-0 text-white d-flex flex-column justify-content-center h-50  ps-4 ">
              <p className="mb-1 text-warning fw-semibold">Signup as a business</p>
              <h1 className="fw-bold text-light mb-3">Partner with us</h1>
              <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill mb-4 " onClick={()=>handleClick()}>
                Get Started
              </button>
            </div>
          </div>
      );
    };


export default PartnerWithUsCard;
