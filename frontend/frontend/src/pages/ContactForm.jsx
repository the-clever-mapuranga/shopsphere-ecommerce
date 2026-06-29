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
    <div className="container page">
      <div className="card">
        <h1 className="h1">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row" style={{ marginBottom: 12 }}>
            <input className="form-input" name="first_name" placeholder="First name" value={form.first_name} onChange={handleChange} required />
            <input className="form-input" name="last_name" placeholder="Last name" value={form.last_name} onChange={handleChange} required />
          </div>

          <div style={{ marginBottom: 12 }}>
            <input className="form-input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>

          <div style={{ marginBottom: 12 }}>
            <textarea className="form-input" name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ minHeight: 140 }} />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Sending..." : "Send Message"}</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
