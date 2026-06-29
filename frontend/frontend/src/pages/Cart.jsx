import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../services/cartService";

const API_URL = "http://127.0.0.1:8000";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load cart.");
    } finally {
      setLoading(false);
    }
  };

  const increase = async (item) => {
    try {
      await updateCartQuantity(item.id, item.quantity + 1);
      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  const decrease = async (item) => {
    if (item.quantity <= 1) {
      await remove(item.id);
      return;
    }

    try {
      await updateCartQuantity(item.id, item.quantity - 1);
      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    try {
      await removeFromCart(id);
      loadCart();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading Cart...</h2>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>Shopping Cart</h1>
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.product_price) * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 10 : 0;
  const total = subtotal + delivery;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={`${API_URL}${item.product_image}`}
            alt={item.product_name}
            style={{
              width: "120px",
              borderRadius: "10px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h2>{item.product_name}</h2>

            <p>${item.product_price}</p>

            <div style={{ marginTop: "10px" }}>
              <button onClick={() => decrease(item)}>
                -
              </button>

              <span
                style={{
                  margin: "0 20px",
                  fontWeight: "bold",
                }}
              >
                {item.quantity}
              </span>

              <button onClick={() => increase(item)}>
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => remove(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <div
        style={{
          textAlign: "right",
          marginTop: "40px",
        }}
      >
        <h2>Subtotal: ${subtotal.toFixed(2)}</h2>

        <h3>Delivery: ${delivery.toFixed(2)}</h3>

        <h1>Total: ${total.toFixed(2)}</h1>

        <button
          onClick={() => navigate("/checkout")}
          style={{
            padding: "15px 35px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;