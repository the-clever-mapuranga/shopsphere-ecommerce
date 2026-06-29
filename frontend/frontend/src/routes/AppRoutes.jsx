import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Register from "../pages/Register";

/* User Pages */
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import OrderSuccess from "../pages/OrderSuccess";
import Report from "../pages/Report";
import AdminRoute from "../components/AdminRoute";

/* Admin Pages */
import AdminProductTable from "../pages/AdminProductTable";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Inventory from "../pages/Inventory";
import Coupons from "../pages/Coupons";
import Analytics from "../pages/Analytics";
import Security from "../pages/Security";

/* Protected Route */
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:slug"
        element={<ProductDetail />}
      />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* User */}

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/report"
        element={
          <AdminRoute>
            <Report />
          </AdminRoute>
        }
      />

      {/* Admin */}

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute>
            <AdminProductTable />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/add"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/edit/:id"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/inventory"
        element={
          <ProtectedRoute>
            <Inventory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/coupons"
        element={
          <ProtectedRoute>
            <Coupons />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/security"
        element={
          <ProtectedRoute>
            <Security />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;