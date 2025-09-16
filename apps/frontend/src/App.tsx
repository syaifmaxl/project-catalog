import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import AppRoutes from "./routes";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollToTop />
      <div
        className="absolute inset-0 z-0 
                   bg-gradient-to-br from-slate-900 via-cyan-900 to-emerald-900
                   bg-300% animate-gradient"
      />
      <div
        className="absolute inset-0 z-10 
                   backdrop-blur-xl bg-black/20"
      />

      <Navbar />

      <main className="relative z-20 flex-1 pt-10">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
