import { useState } from "react";
import API from "../services/api";

function AdminCreateUser() {
  const [form, setForm] = useState({ username: "", email: "", password: "", is_staff: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/admin/create-user/", form);
      alert("User created successfully");
      setForm({ username: "", email: "", password: "", is_staff: false });
    } catch (err) {
      console.error(err);
      alert("Failed to create user. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Create User</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required style={{ width: "100%", padding: 8, marginBottom: 8 }} />

        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required style={{ width: "100%", padding: 8, marginBottom: 8 }} />

        <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" required style={{ width: "100%", padding: 8, marginBottom: 8 }} />

        <label style={{ display: "block", marginBottom: 12 }}>
          <input type="checkbox" name="is_staff" checked={form.is_staff} onChange={handleChange} /> Admin user
        </label>

        <button type="submit" disabled={loading} style={{ padding: "8px 16px", background: "#4f46e5", color: "white", border: "none", borderRadius: 6 }}>
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default AdminCreateUser;
