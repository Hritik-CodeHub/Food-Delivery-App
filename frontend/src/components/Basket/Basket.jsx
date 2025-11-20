import React, { useContext, useState, useEffect } from "react";
import "./Basket.css";
import { FaTrashAlt } from "react-icons/fa";
import { UserContext } from '../../context/UserContext';
import axios from "axios";
import CheckoutModal from "./CheckoutModal";
import { BasketContext } from '../../context/BasketContext';
import Loading from "../Loading/Loading"

const Basket = () => {
  const { basket } = useContext(BasketContext);
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  let [deliveryFee,setDeliveryFee]=useState(0);
  const id = user?._id;


  const fetchUserData = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user-info`, { id });
      const { success, userData } = res.data;
      if (success) {
        setUserData(userData);
        setItems(userData.myBasket || []);
        if(userData.myBasket.length!=0)
        setDeliveryFee(40); 
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [basket]);

  const handaleRemoveItem = async (itemId) => {
    try {
      console.log(itemId)
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/basket/remove-items`, {
        userId: id,
        itemId,
      });
      const { success, message } = res.data;
      if (success) {
        console.log(message);
        fetchUserData();
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  // Calculation
  useEffect(() => {
    let sub = 0;
    let disc = 0;
    items.forEach((basketItem) => {
      const item = basketItem.item;
      const quantity = basketItem.quantity;
      const itemTotal = item.price * quantity;
      const itemDiscount = (item.price * (item.offer || 0) / 100) * quantity;
      sub += itemTotal;
      disc += itemDiscount;
    });
    setSubtotal(sub);
    setDiscount(disc);
    setTotal(sub - disc + deliveryFee);

  }, [items]);

  const formatINR = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (<>
    <aside className="basket">
      <div className="basket-header">
        <h3>🛒 My Basket</h3>
      </div>
      
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="basket-items">
            {items.map((item, index) => (
              <div className="basket-item" key={index}>
                <div className="item-left">
                  <span className="item-qty">{item.quantity}x</span>
                  <div className="item-info">
                    <h4>{item.item.name}</h4>
                    {item.item.description && <p>{item.item.description}</p>}
                  </div>
                </div>
                <div className="item-right">
                  <span>{formatINR(item.item.price)}</span>
                  <button className="delete-btn" onClick={() => { handaleRemoveItem(item.item._id) }}>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="basket-summary">
            <div className="summary-row">
              <span>Sub Total:</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Discount:</span>
              <span>-{formatINR(discount)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>{formatINR(deliveryFee)}</span>
            </div>
          </div>

          <div className="total-to-pay">
            <p>Total to pay:</p>
            <h3>{formatINR(total)}</h3>
          </div>

          <div className="basket-options">
            <select>
              <option>Choose your free item</option>
            </select>
            <input type="text" placeholder="Apply Coupon Code here" />
          </div>

          <div className="basket-methods">
            <p>🚴 Delivery (from 17:00)</p>
            <p>📦 Collection (from 17:00)</p>
          </div>

          <button className="checkout-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            disabled={total <= 200}
            style={{ backgroundColor: total >= 200 ? "green" : "red" }}
            >Checkout!</button>

        </>
      )}
    </aside>
    <CheckoutModal total={total} items={items} userId={id}/>
  </>);
};

export default Basket;
