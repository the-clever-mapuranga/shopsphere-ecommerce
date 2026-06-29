function Register() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Username"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;