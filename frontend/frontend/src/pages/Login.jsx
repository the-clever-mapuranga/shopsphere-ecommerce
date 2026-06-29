import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/login/", formData);

      console.log("================================");
      console.log("LOGIN RESPONSE");
      console.log(response.data);
      console.log("================================");

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // fetch current user info (is_staff) and store it for frontend role checks
      try {
        const me = await API.get("/me/");
        localStorage.setItem("is_staff", me.data.is_staff ? "true" : "false");
      } catch (err) {
        console.warn("Could not fetch current user info", err);
      }

      console.log(
        "Saved Access Token:",
        localStorage.getItem("access")
      );

      console.log(
        "Saved Refresh Token:",
        localStorage.getItem("refresh")
      );

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Invalid username or password.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;