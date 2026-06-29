import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainLayout>
        <AppRoutes />
      </MainLayout>

      <Footer />
    </>
  );
}

export default App;