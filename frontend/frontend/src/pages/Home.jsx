import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section
        style={{
          background:"#4f46e5",
          color:"white",
          padding:"90px",
          textAlign:"center"
        }}
      >

        <h1 style={{fontSize:"60px"}}>

          Welcome to ShopSphere

        </h1>

        <p style={{fontSize:"22px"}}>

          Buy the latest electronics at affordable prices.

        </p>

        <Link to="/products">

          <button
            style={{
              marginTop:"30px",
              padding:"15px 40px",
              fontSize:"18px",
              cursor:"pointer"
            }}
          >

            Shop Now

          </button>

        </Link>

      </section>

      <section
        style={{
          padding:"60px",
          textAlign:"center"
        }}
      >

        <h2>

          Featured Products

        </h2>

        <p>

          Explore our newest arrivals.

        </p>

      </section>

    </div>
  );
}

export default Home;