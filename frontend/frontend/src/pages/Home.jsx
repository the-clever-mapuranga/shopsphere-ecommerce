import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      <section className="bg-slate-900 text-white min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Shop Smarter with ShopSphere
          </h1>

          <p className="text-xl text-gray-300 mb-8">
             Discover thousands of products handpicked just for you. Quality guaranteed, always.The best products. The best prices.
          </p>

          <button
            className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Explore Products
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Home;