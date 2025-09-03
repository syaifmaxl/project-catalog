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
        <main className="pt-32 text-center relative z-20">
          {" "}
          <h1
            className="text-5xl font-bold text-gray-100"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
          >
            Konten Halaman Utama
          </h1>
          <p
            className="mt-4 text-xl text-gray-300"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
          >
            Sekarang background berwarna dengan efek blur!
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
