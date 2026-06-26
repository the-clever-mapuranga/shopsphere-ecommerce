function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        marginTop: "60px",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2>ShopSphere</h2>

          <p>
            Your trusted online electronics store.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>

          <p>Products</p>

          <p>Cart</p>

          <p>Dashboard</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>Bulawayo, Zimbabwe</p>

          <p>shopsphere@gmail.com</p>

          <p>+263 7878 40226</p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <p>Facebook</p>

          <p>Instagram</p>

          <p>LinkedIn</p>

          <p>GitHub</p>
        </div>

      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#333",
        }}
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        © 2026 ShopSphere. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;