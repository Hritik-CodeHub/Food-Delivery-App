import React, { useEffect, useMemo, useState,  useContext } from "react";
import logo2 from '../../assets/logo2.png';
import "./AdminDashboard.css"; 
import OrdersTable from "../../components/admin/OrdersTable/OrdersTable";
import MenuList from "../../components/admin/MenuList/MenuList";
import AddMenuItem from "../../components/admin/AddMenuItem/AddMenuItem";
import OrderHistory from "../../components/admin/OrderHistory/OrderHistory";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext"

import { 
  FiLayout, 
  FiList, 
  FiClock, 
  FiSearch, 
  FiPlus, 
  FiMoreVertical, 
  FiTrash2, 
  FiEdit, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiLoader
} from "react-icons/fi";


const mockOrders = [
  { orderId: "ODR-10213", customer: "Aman Gupta", totalItems: 4, amount: 749, status: "Preparing", eta: "15 min", placedAt: "2025-08-30 12:32", method: "UPI" },
  { orderId: "ODR-10214", customer: "Priya Singh", totalItems: 2, amount: 389, status: "Out for delivery", eta: "6 min", placedAt: "2025-08-30 12:46", method: "COD" },
  { orderId: "ODR-10212", customer: "Ravi Kumar", totalItems: 1, amount: 199, status: "Delivered", eta: "—", placedAt: "2025-08-29 20:15", method: "Card" },
  { orderId: "ODR-10211", customer: "Neha Verma", totalItems: 3, amount: 529, status: "Cancelled", eta: "—", placedAt: "2025-08-29 19:03", method: "UPI" },
];

const mockMenu = [
  { _id: "MN-001", name: "Margherita Pizza", catagory: "Pizza", price: 299, available: true, bestseller: true },
  { _id: "MN-002", name: "Paneer Butter Masala", catagory: "Indian", price: 249, available: true, bestseller: false },
  { _id: "MN-003", name: "Veg Burger", catagory: "Burger", price: 149, available: false, bestseller: false },
  { _id: "MN-004", name: "Hakka Noodles", catagory: "Chinese", price: 199, available: true, bestseller: false },
];

const statusVariant = {
  Delivered: "success",
  Preparing: "warning",
  "Out for delivery": "info",
  Cancelled: "danger",
};

export default function AdminDashboard() {
  const { admin, token }=useContext(AdminContext);
  const [active, setActive] = useState("overview");
  const [orders, setOrders] = useState(mockOrders);
  const [menu, setMenu] = useState(mockMenu);
  console.log(admin.restaurantId);

  useEffect(()=>{
    const fetchOrders= async ()=>{
       try {
        const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/orders/${admin.restaurantId}`);
       const {data, message, success}=res.data;
       if(success){
        console.log(res);
        setOrders(data);
       }else{
        console.log(message);
       }
       } catch (error) {
        console.log(error?.response?.data?.message);
       }
    }
    fetchOrders();
  },[])

  useEffect(()=>{
    const fetchMenuList= async ()=>{
       try {
        const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/menu-list/${admin.restaurantId}`);
       const {data, message, success}=res.data;
       if(success){
        console.log(res);
        setMenu(data.menus);
       }else{
        console.log(message);
       }
       } catch (error) {
        console.log(error?.response?.data?.message);
       }
    }
    fetchMenuList();
  },[])


  const kpis = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todayOrders = orders.filter((o) => o.placedAt.startsWith(today));
    const revenue = todayOrders.reduce((s, o) => s+o.amount, 0);
    const live = orders.filter((o) => ["Preparing", "Out for delivery"].includes(o.status)).length;
    const delivered = orders.filter((o) => o.status === "Delivered").length;
    return { revenue, live, delivered, items: menu.length };
  }, [orders, menu]);
                                                                        
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className=" bg-white border-end p-3 vh-100" style={{ width: "250px" }}>
        <h5 className="fw-bold mb-4">FoodBook Admin</h5>
        <nav className="nav flex-column gap-2">
          <button className={`btn ${active==="overview"?"btn-dark":"btn-light"} text-start`} onClick={() => setActive("overview")}><FiLayout/> Overview</button>
          <button className={`btn ${active==="orders"?"btn-dark":"btn-light"} text-start`} onClick={() => setActive("orders")}><FiClock/> Orders</button>
          <button className={`btn ${active==="menu"?"btn-dark":"btn-light"} text-start`} onClick={() => setActive("menu")}><FiList/> Menu</button>
          <button className={`btn ${active==="add"?"btn-dark":"btn-light"} text-start`} onClick={() => setActive("add")}><FiPlus/> Add Item</button>
          <button className={`btn ${active==="history"?"btn-dark":"btn-light"} text-start`} onClick={() => setActive("history")}><FiClock/> Order History</button>
        </nav>
        <img style={{position :"fixed", bottom:"5px" ,width:"150px",height:"52px"}} src={logo2} alt="Order-India Logo" />
      </aside>

      {/* Main */}
      <main className="flex-grow-1 p-4">
        <TopBar />
        {active === "overview" && <Overview kpis={kpis} orders={orders} />}
        {active === "orders" && <OrdersTable orders={orders} setOrders={setOrders} />}
        {active === "menu" && <MenuList menu={menu} setMenu={setMenu} />}
        {active === "add" && <AddMenuItem onAdd={(item)=>setMenu((m)=>[item,...m])} />}
        {active === "history" && <OrderHistory orders={orders} />}
      </main>
    </div>
  );
}

/* --- TopBar --- */
function TopBar() {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
      <div>
        <h3 className="fw-semibold">Admin Dashboard</h3>
        <p className="text-muted small">Manage menu, track live orders, and view history.</p>
      </div>
      
    </div>
  );
}

/* --- Overview KPIs --- */
function Overview({ kpis, orders }) {
  return (
    <div>
      <div className="row g-3 mb-4">
        <KpiCard title="Today's Revenue" value={`₹${kpis.revenue}`} />
        <KpiCard title="Live Orders" value={kpis.live} />
        <KpiCard title="Delivered (All)" value={kpis.delivered} />
        <KpiCard title="Menu Items" value={kpis.items} />
      </div>
      <div className=" shadow-sm">
        <div className="card-header fw-bold">Recent Orders</div>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>ETA</th></tr>
            </thead>
            <tbody>
              {orders.slice(0,5).map(o=>(
                <tr key={o.orderId}>
                  <td>{o.orderId}</td><td>{o.customer}</td><td>{o.totalItems}</td><td>₹{o.amount}</td>
                  <td><span className={`badge bg-${statusVariant[o.status]}`}>{o.status}</span></td>
                  <td>{o.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiCard({title,value}) {
  return (
    <div className="col-md-3">
      <div className="card shadow-sm text-center p-3 rounded-4">
        <div className="text-muted small">{title}</div>
        <div className="fs-4 fw-bold">{value}</div>
      </div>
    </div>
  );
}



