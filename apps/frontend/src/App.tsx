import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './pages/HomesPage';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* background */}
      <div
        className="absolute inset-0 z-0 
                   bg-gradient-to-br from-slate-900 via-cyan-900 to-emerald-900
                   bg-300% animate-gradient"
      />
      <div
        className="absolute inset-0 z-10 
                   backdrop-blur-xl bg-black/20"
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="relative z-20 flex-1 pt-10">
        <HomePage />
      </main>

      {/* Footer di paling bawah */}
      <Footer />
    </div>
  );
}

export default App;