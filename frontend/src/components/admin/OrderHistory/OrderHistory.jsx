import React from 'react'

/* --- Order History --- */
function OrderHistory({ orders }) {
  const exportCSV = () => {
    const headers = [
      "Order ID",
      "Customer",
      "Items",
      "Amount",
      "Status",
      "ETA",
      "Placed At",
      "Method",
    ];
    const rows = orders.map((o) => [
      o.id,
      o.customer,
      o.items,
      o.amount,
      o.status,
      o.eta,
      o.placedAt,
      o.method,
    ]);

    let csv = [];
    csv.push(headers.join(","));
    rows.forEach((row) => {
      csv.push(row.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "order_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Order History</h4>
        <button className="btn btn-success" onClick={exportCSV}>
          Export CSV
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>ETA</th>
              <th>Placed At</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.items}</td>
                  <td>₹{o.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        o.status === "Delivered"
                          ? "bg-success"
                          : o.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td>{o.eta}</td>
                  <td>{o.placedAt}</td>
                  <td>{o.method}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No order history available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;