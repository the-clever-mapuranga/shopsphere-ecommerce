import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#4f46e5",
      }}
    >
      <h2 style={{ color: "white" }}>
        ShopSphere
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link style={linkStyle} to="/">Home</Link>

        <Link style={linkStyle} to="/products">Products</Link>

        <Link style={linkStyle} to="/wishlist">Wishlist</Link>

        <Link style={linkStyle} to="/cart">Cart</Link>

        <Link style={linkStyle} to="/checkout">Checkout</Link>

        {isAuthenticated() ? (
          <>
            <Link style={linkStyle} to="/dashboard">
              Dashboard
            </Link>

            <Link style={linkStyle} to="/orders">
              Orders
            </Link>

            <Link style={linkStyle} to="/profile">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link style={linkStyle} to="/login">
              Login
            </Link>

            <Link style={linkStyle} to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;