import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
      const response = await API.get("/orders/");
      setOrders(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1>Admin Orders</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "30px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#4f46e5",
              color: "white",
            }}
          >
            <th style={{ padding: "12px" }}>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No Orders Found
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.id}
                style={{
                  borderBottom: "1px solid #ddd",
                }}
              >
                <td style={{ padding: "15px" }}>
                  #{order.id}
                </td>

                <td>
                  {order.user_name || "Customer"}
                </td>

                <td>
                  ${order.total}
                </td>

                <td>
                  {order.status}
                </td>

                <td>
                  {new Date(order.created_at).toLocaleDateString()}
                </td>

                <td>
                  <Link
                    to={`/admin/orders/${order.id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;