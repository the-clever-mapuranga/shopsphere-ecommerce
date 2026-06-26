
import AdminStats from "../components/AdminStats";

function AdminDashboard() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Admin Dashboard</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Welcome back, Administrator.
      </p>

      <AdminStats />

      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,.1)",
        }}
      >
        <h2>Overview</h2>

        <p>
          Use the navigation to manage products,
          orders, customers and inventory.
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;
