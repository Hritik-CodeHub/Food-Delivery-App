import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutModal = ({ total, items, userId }) => {
  const [orderData, setorderData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: ""
  });

  const handaleChange = (e) => {
    setorderData({ ...orderData, [e.target.name]: e.target.value });
  }

  const cartItems = items.map(item => ({
    menuId: item.item._id,
    name: item.item.name,
    image: item.item.menuItemImg,
    price: item.item.price,
    quantity: item.quantity,
  }));

  
  const handleSubmit = async () => {
   
    const body = {
      ...orderData,
      userId,
      total,
      cartItems,
      restaurant:items[0].item.restaurant,
      status: "confirmed"
    }
 
      try {
      const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/place-order`,
        body
      );
      const { success, message}= res.data;
      if(success){

        toast.success(message);
        
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message || "someting wents wrong")
    }
  }

  const { name, email, address, city, pincode, paymentMethod, state } = orderData;
  return (
    <>
      {/* Step 1: Delivery Info */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Checkout Form</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">Full Name</label>
                  <input type="text" name="name" value={name} className="form-control" id="inputName" placeholder="Enter your name" onChange={handaleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input type="email" name="email" value={email} className="form-control" id="inputEmail" placeholder="you@example.com" onChange={handaleChange} />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <input type="text" name="address" value={address} className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handaleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" name="city" value={city} className="form-control" id="inputCity" onChange={handaleChange} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  <select id="inputState" name="state" value={state} className="form-select" onChange={handaleChange}>
                    <option>Choose...</option>
                    <option>Uttar Pradesh</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">Pincode</label>
                  <input type="text" name="pincode" value={pincode} className="form-control" id="inputZip" onChange={handaleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPayment" className="form-label">Payment Method</label>
                  <select id="inputPayment" name="paymentMethod" value={paymentMethod} className="form-select"  onChange={handaleChange}>
                    <option>Choose...</option>
                    <option>UPI</option>
                    <option>Cash on Delivery</option>
                    <option>Card</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary"  data-bs-dismiss="modal" onClick={() => handleSubmit()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default CheckoutModal;
