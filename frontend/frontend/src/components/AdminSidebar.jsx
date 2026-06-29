
import { Link } from "react-router-dom";

function AdminSidebar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>ShopSphere Admin</h2>

      <hr style={{ margin: "20px 0" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Link to="/admin/products" style={linkStyle}>
          📦 Products
        </Link>

        <Link to="/admin/products/add" style={linkStyle}>
          ➕ Add Product
        </Link>

        <Link to="/admin/inventory" style={linkStyle}>
          📊 Inventory
        </Link>

        <Link to="/admin/coupons" style={linkStyle}>
          🎟 Coupons
        </Link>

        <Link to="/admin/analytics" style={linkStyle}>
          📈 Analytics
        </Link>

        <hr />

        <Link to="/admin/users" style={linkStyle}>
          👥 Users
        </Link>

        <Link to="/admin/users/create" style={linkStyle}>
          ➕ Create User
        </Link>

        <Link to="/admin/roles" style={linkStyle}>
          🔐 Roles
        </Link>

        <Link to="/admin/referrals" style={linkStyle}>
          🎁 Referral Codes
        </Link>

        <Link to="/admin/audit-logs" style={linkStyle}>
          📜 Audit Logs
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
