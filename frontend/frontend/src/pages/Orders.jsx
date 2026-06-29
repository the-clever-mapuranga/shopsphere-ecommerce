import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get("/orders/");
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to load orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading orders...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
      }}
    >
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No orders found.</h3>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Order Number</th>
              <th style={th}>Date</th>
              <th style={th}>Total</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={td}>{order.order_number}</td>
                <td style={td}>
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
                <td style={td}>${order.total_price}</td>
                <td style={td}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = {
  background: "#4f46e5",
  color: "white",
  padding: "15px",
};

const td = {
  padding: "15px",
  borderBottom: "1px solid #ddd",
};

export default Orders;