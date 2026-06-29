import { useState } from "react";
import API from "../services/api";

function ContactForm() {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/security/contact/", form);
      alert("Message sent. Thank you!");
      setForm({ first_name: "", last_name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "24px auto", padding: 16 }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input name="first_name" placeholder="First name" value={form.first_name} onChange={handleChange} required style={{ flex: 1, padding: 8 }} />
          <input name="last_name" placeholder="Last name" value={form.last_name} onChange={handleChange} required style={{ flex: 1, padding: 8 }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: "100%", padding: 8 }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ width: "100%", minHeight: 120, padding: 8 }} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: "10px 16px", background: "#4f46e5", color: "white", border: "none", borderRadius: 6 }}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
