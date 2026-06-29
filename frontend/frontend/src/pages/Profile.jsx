function Profile() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
      }}
    >
      <h1>My Profile</h1>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow:
            "0 5px 20px rgba(0,0,0,.1)",
        }}
      >
        <p>
          <strong>Username:</strong> Clever Mapuranga
        </p>

        <p>
          <strong>Email:</strong>
          mapurangaclever354@gmail.com
        </p>

        <p>
          <strong>Member Since:</strong>
          June 2026
        </p>

        <button
          style={{
            marginTop: "20px",
            background: "#4f46e5",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;