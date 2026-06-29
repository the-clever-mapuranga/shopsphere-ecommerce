function Dashboard() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >

        <div style={card}>
          <h2>🛒 Cart</h2>
          <h1>3</h1>
        </div>

        <div style={card}>
          <h2>❤️ Wishlist</h2>
          <h1>4</h1>
        </div>

        <div style={card}>
          <h2>📦 Orders</h2>
          <h1>2</h1>
        </div>

        <div style={card}>
          <h2>⭐ Reviews</h2>
          <h1>7</h1>
        </div>

      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          borderRadius: "10px",
          background: "#eef2ff",
        }}
      >
        <h2>Welcome Back 👋</h2>

        <p>
          Manage your products, orders, wishlist and account
          from your dashboard.
        </p>

      </div>

    </div>
  );
}

const card = {
  background: "#4f46e5",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
};

export default Dashboard;