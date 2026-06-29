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
    <div className="container page">
      <div className="card" style={{ maxWidth: 520 }}>
        <h1 className="h1">Create User</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <input className="form-input" name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
          </div>

          <div style={{ marginBottom: 10 }}>
            <input className="form-input" name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
          </div>

          <div style={{ marginBottom: 10 }}>
            <input className="form-input" name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" required />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" name="is_staff" checked={form.is_staff} onChange={handleChange} /> <span>Admin user</span>
            </label>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Creating..." : "Create User"}</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCreateUser;
