import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout, isAdmin } from "../utils/auth";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    return (
      <nav className="site-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="site-title">ShopSphere</h2>

          <div className="nav-links">
            <Link className="link" to="/">Home</Link>

            <Link className="link" to="/products">Products</Link>

            <Link className="link" to="/wishlist">Wishlist</Link>

            <Link className="link" to="/cart">Cart</Link>

            <Link className="link" to="/checkout">Checkout</Link>

            {isAuthenticated() ? (
              <>
                <Link className="link" to="/dashboard">Dashboard</Link>

                {isAdmin() && (
                  <Link className="link" to="/orders">Orders</Link>
                )}

                <Link className="link" to="/profile">Profile</Link>

                {isAdmin() && (
                  <Link className="link" to="/report">Report</Link>
                )}

                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
              </>
            ) : (
              <>
                <Link className="link" to="/login">Login</Link>

                <Link className="link" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    );
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