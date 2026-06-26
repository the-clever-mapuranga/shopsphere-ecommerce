
function InventoryCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

export default InventoryCard;
