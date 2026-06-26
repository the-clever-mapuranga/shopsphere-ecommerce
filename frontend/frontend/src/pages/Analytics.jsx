function Analytics() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Store Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#f3f4f6",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h2>Total Sales</h2>
          <h1>$15,240</h1>
        </div>

        <div
          style={{
            background: "#f3f4f6",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h2>Orders</h2>
          <h1>187</h1>
        </div>

        <div
          style={{
            background: "#f3f4f6",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h2>Customers</h2>
          <h1>89</h1>
        </div>
      </div>
    </div>
  );
}

export default Analytics;