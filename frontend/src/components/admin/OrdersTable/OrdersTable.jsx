import React,{useState,useMemo} from 'react'


const statusVariant = {
  Delivered: "success",
  Preparing: "warning",
  "Out for delivery": "info",
  Cancelled: "danger",
};

/* --- Orders Table --- */
function  OrdersTable({ orders, setOrders }){
  const [statusFilter,setStatusFilter]=useState("all");
  const [search,setSearch]=useState("");
  const filtered=useMemo(()=>{
    return orders.filter(o=>{
      const matchStatus=statusFilter==="all"||o.status===statusFilter;
      const q=`${o.id} ${o.customer}`.toLowerCase();
      return matchStatus && q.includes(search.toLowerCase());
    });
  },[orders, statusFilter, search]);

  const updateStatus=(id,status)=>setOrders(prev=>prev.map(o=>o.id===id?{...o,status}:o));

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input type="text" className="form-control rounded-pill" placeholder="Search orders…" value={search} onChange={e=>setSearch(e.target.value)} />
        <select className="form-select w-auto rounded-pill" value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}>
          <option value="all">All</option><option>Preparing</option><option>Out for delivery</option><option>Delivered</option><option>Cancelled</option>
        </select>
      </div>
      <div className=" shadow-sm">
        <div className="card-header fw-bold">Orders</div>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Status</th><th>ETA</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map(o=>(
                <tr key={o.id}>
                  <td>{o.id}</td><td>{o.customer}</td><td>{o.totalItems}</td><td>₹{o.amount}</td>
                  <td><span className={`badge bg-${statusVariant[o.status]}`}>{o.status}</span></td>
                  <td>{o.eta}</td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">Update</button>
                      <ul className="dropdown-menu">
                        {["Preparing","Out for delivery","Delivered","Cancelled"].map(st=>
                          <li key={st}><button className="dropdown-item" onClick={()=>updateStatus(o.id,st)}>{st}</button></li>
                        )}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable