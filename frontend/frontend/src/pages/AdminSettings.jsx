import { useState } from "react";

function AdminSettings() {
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Settings</h1>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Maintenance Mode</h3>

        <label>
          <input
            type="checkbox"
            checked={maintenance}
            onChange={() =>
              setMaintenance(!maintenance)
            }
          />

          Enable Maintenance Mode
        </label>
      </div>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Store Information</h3>

        <input
          placeholder="Store Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <textarea
          placeholder="Store Description"
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
          }}
        />

        <button
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default AdminSettings;