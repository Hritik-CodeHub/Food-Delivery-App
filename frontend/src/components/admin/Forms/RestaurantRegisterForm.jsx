import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {AdminContext} from "../../../context/AdminContext"

const RestaurantRegisterForm = () => {
  const navigation=useNavigate();
  const { admin, token }=useContext(AdminContext);
  const [formData, setFormData] = useState({
    adminId: admin._id,
    restaurantName: '',
    city: '',
    country: '',
    logoUrl: null,
    carouselImageUrl: null,
    adImageUrl: null
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files && files.length > 0 ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/restaurant/register`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": token
          }
        }
      );

      if(res.data.success){
        toast.success("Restaurant registered successfully!");
        navigation("/admin-dashboard")
      }
      else{
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Error registering restaurant");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="overlay"></div>
      <div className="form-container">
        <h3 className="mb-4 text-white">Restaurant Registration</h3>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="adminId" value={formData.adminId} />

          <input type="text" name="restaurantName" className="form-control mb-3" placeholder="Restaurant Name" onChange={handleChange} required />
          <input type="text" name="city" className="form-control mb-3" placeholder="City" onChange={handleChange} required />
          <input type="text" name="country" className="form-control mb-3" placeholder="Country" onChange={handleChange} required />

          <label className="form-label text-white">Logo Image</label>
          <input type="file" name="logoUrl" className="form-control mb-3" onChange={handleChange} required />

          <label className="form-label text-white">Carousel Image</label>
          <input type="file" name="carouselImageUrl" className="form-control mb-3" onChange={handleChange} required />

          <label className="form-label text-white">Ad Image</label>
          <input type="file" name="adImageUrl" className="form-control mb-3" onChange={handleChange} required />

          <button type="submit" className="btn btn-primary w-100 mt-3">Submit Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegisterForm;
