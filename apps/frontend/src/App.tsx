import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  return (
    <div
      className="min-h-screen text-white 
                 bg-gradient-to-br from-slate-900 via-cyan-900 to-emerald-900
                 bg-300% animate-gradient"
    >
      <Navbar />

      <div
        className="absolute inset-0 z-10 
                   backdrop-blur-xl bg-white/5"
      >
      </div>
    </div>
  );
}

export default App;
