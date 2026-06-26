
function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        minHeight: "120px",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

function AdminStats() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      <Card
        title="Products"
        value="0"
        color="#4f46e5"
      />

      <Card
        title="Orders"
        value="0"
        color="#059669"
      />

      <Card
        title="Customers"
        value="0"
        color="#dc2626"
      />

      <Card
        title="Revenue"
        value="$0"
        color="#f59e0b"
      />
    </div>
  );
}

export default AdminStats;

