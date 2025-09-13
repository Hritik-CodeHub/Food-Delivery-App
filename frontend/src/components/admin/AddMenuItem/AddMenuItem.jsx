import React, { useState,useContext } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../../../context/AdminContext"
/* --- Add Menu Item --- */
function AddMenuItem({ onAdd }) {
  const [form, setForm] = useState({ name: "", category: "Pizza", price: "", description: "", offer: 0, menuItemImg: "", available: true });
  const canSave = form.name && form.price;
  const { admin, token }=useContext(AdminContext);
  console.log(admin.restaurantId);
   
  const handleSubmit = async (e )=> {
    e.preventDefault();
    try {
      const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/restaurant/create-menu-item/${admin._id}`, 
        {...form,
          resturant:"68ad99f917e4c291dfa3947d"
        }, {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token":token
         },
      });
       const {data, message, success}=res.data;
       if(success){
        console.log(message);
        toast.success(message);
        onAdd(...data);
        setForm({ name: "", category: "Pizza", price: "", description: "", offer: 0, menuItemImg: "", available: true });
       }
    } catch (error) {
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="row g-3">
      <div className="col-lg-8">
        <div className=" shadow-sm p-3">
          <h5>Add New Menu Item</h5>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select className="form-select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  <option>Pizza</option><option>Indian</option><option>Burger</option><option>Chinese</option><option>Dessert</option><option>Beverage</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Discount Offer</label>
                <input className="form-control" type="number" value={form.offer} onChange={e => setForm({ ...form, offer: e.target.value })} />
              </div>
              <div className="col-12">
                <label className="form-label ">Ad Image</label>
                <input type="file" name="menuItemImg" className="form-control mb-3"
                  onChange={e => {
                    const file = e.target.files && e.target.files[0];
                    setForm({ ...form, menuItemImg: file })
                  }
                  } required />
              </div>
              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
              </div>
              <div className="col-12 d-flex gap-3">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" checked={form.available} onChange={e => setForm({ ...form, available: e.target.checked })} />
                  <label className="form-check-label">Available</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3" disabled={!canSave}>Save Item</button>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className=" shadow-sm p-3">
          <h5>Preview</h5>
          <div className="d-flex gap-3 mt-3">
            <div className="bg-light border rounded " style={{ width: "80px", height: "80px", overflow:"hidden" }}>
              {form.menuItemImg ?
                <img
                  src={URL.createObjectURL(form.menuItemImg)}
                  alt={form.name} className="img-fluid"
                  style={{ width: "100%", height: "100%" }}
                /> :
                "🍴"}
            </div>
            <div>
              <div className="fw-bold">{form.name || "Item name"}</div>
              <div className="text-muted small">{form.category}</div>
              <div className="fw-semibold mt-1">{form.price ? `₹${form.price}` : "₹0"}</div>
              <div className="small mt-1">{form.description || "Item description will appear here."}</div>
              <div className="mt-2">
                <span className={`badge bg-${form.available ? "success" : "secondary"} me-1`}>{form.available ? "Available" : "Unavailable"}</span>
                {form.bestseller && <span className="badge bg-primary">Bestseller</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenuItem