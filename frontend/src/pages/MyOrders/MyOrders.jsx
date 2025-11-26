// frontend/src/pages/MyOrders/MyOrders.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import { UserContext } from '../../context/UserContext';

const MyOrders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatINR = (amt) =>
    typeof amt === 'number' ? amt.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) : amt;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?._id) return;
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/orders/history/${user._id}`);
        const { success, data } = res.data || {};
        if (success && Array.isArray(data)) {
          setOrders(data);
        } else if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else if (res.data?.orders) {
          setOrders(res.data.orders);
        }
      } catch (error) {
        console.log(error?.response?.data?.message || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user?._id]);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 80, paddingBottom: 80 }} className="container">
        <h3 className="fw-semibold mb-3">My Orders</h3>
        {!user ? (
          <div className="alert alert-warning">Please login to view your orders.</div>
        ) : loading ? (
          <Loading />
        ) : orders.length === 0 ? (
          <div className="alert alert-info">No orders found.</div>
        ) : (
          <div className="shadow-sm">
            <div className="card-header fw-bold">Order History</div>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Restaurant</th>
                    <th>Items</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Placed At</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, idx) => (
                    <tr key={o.orderId || idx}>
                      <td>{o.orderId}</td>
                      <td>{o.restaurantName}</td>
                      <td>
                        {Array.isArray(o.items) && o.items.length > 0 ? (
                          <ul className="mb-0">
                            {o.items.map((it, i) => (
                              <li key={i}>
                                {it.name} × {it.quantity ?? it.quntity} — {formatINR(it.price)}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td>{formatINR(o.amount)}</td>
                      <td>
                        <span className="badge bg-secondary">{o.status}</span>
                      </td>
                      <td>{o.placedAt}</td>
                      <td>{o.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;