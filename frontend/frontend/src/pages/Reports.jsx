import { useEffect, useState } from "react";
import API from "../services/api";

function Reports() {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    try {
      const response = await API.get("/admin/reports/");
      setStats(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Business Reports</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div className="card">
          <h2>Total Users</h2>
          <h1>{stats.users}</h1>
        </div>

        <div className="card">
          <h2>Total Products</h2>
          <h1>{stats.products}</h1>
        </div>

        <div className="card">
          <h2>Total Orders</h2>
          <h1>{stats.orders}</h1>
        </div>

        <div className="card">
          <h2>Total Revenue</h2>
          <h1>${stats.revenue}</h1>
        </div>
      </div>
    </div>
  );
}

export default Reports;