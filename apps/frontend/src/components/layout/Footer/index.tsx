import whatsapp from "/whatsapp.png?url";
import instagram from "/Instagram.png?url";
import facebook from "/facebook.png?url";
import youtube from "/youtube.png?url";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="lg:col-span-5 space-y-4 lg:space-y-6">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                SARUNG
                <span className="block text-sm sm:text-base lg:text-lg font-medium text-emerald-400 tracking-wide">
                  MANGGA OFFICIAL
                </span>
              </h1>

              <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-md">
                Website resmi Sarung Mangga untuk melayani penjualan online.
                Produksi PT Panggung Jaya Indah Textile dengan desain menawan
                dan paduan warna berani yang menampilkan keindahan luar biasa.
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-white font-semibold text-base lg:text-lg">
                Ikuti Kami
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <div className="group relative p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-white/40">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                  />
                </div>
                <div className="group relative p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-white/40">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                  />
                </div>
                <div className="group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-white/40">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                  />
                </div>
                <div className="group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bgwhbg-white/10 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-white/40">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="p-1.5 lg:p-2 bg-emerald-500/20 rounded-lg">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-white">
                Jadwal Operasional
              </h2>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <div className="p-3 lg:p-4 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 font-semibold text-sm lg:text-base">
                    Hari Kerja
                  </span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">
                    AKTIF
                  </span>
                </div>
                <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">
                  Senin - Jumat
                  <br />
                  <span className="text-white font-medium">
                    09:00 - 15:00 WIB
                  </span>
                </p>
              </div>

              <div className="p-3 lg:p-4 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-semibold text-sm lg:text-base">
                    Weekend & Libur
                  </span>
                  <span className="text-xs bg-slate-500/20 text-slate-400 px-2 py-1 rounded-full">
                    TUTUP
                  </span>
                </div>
                <p className="text-slate-400 text-xs lg:text-sm">
                  Transaksi diproses hari kerja berikutnya
                </p>
              </div>

              <div className="p-2.5 lg:p-3 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-lg border border-blue-500/20">
                <p className="text-blue-300 text-xs lg:text-sm font-medium">
                  💡 Pembayaran sebelum 13:00 WIB diproses hari yang sama
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 lg:space-y-6">
            <h2 className="text-lg lg:text-xl font-bold text-white">
              Hubungi Kami
            </h2>

            <div className="space-y-2 lg:space-y-3">
              <a
                href="mailto:banggabersarung.official@gmail.com"
                className="group flex items-center gap-2 lg:gap-3 p-2.5 lg:p-3 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="p-1.5 lg:p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-xs lg:text-sm truncate">
                    banggabersarung.official@gmail.com
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="tel:+6281358838686"
                className="group flex items-center gap-2 lg:gap-3 p-2.5 lg:p-3 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="p-1.5 lg:p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 text-xs lg:text-sm">
                    +62 813-5883-8686
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-white font-semibold text-sm lg:text-base">
                Informasi
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-2">
                <a className="block text-slate-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 hover:translate-x-1 transform cursor-pointer py-1">
                  Tentang Kami
                </a>
                <a className="block text-slate-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 hover:translate-x-1 transform cursor-pointer py-1">
                  Kebijakan Privasi
                </a>
                <a className="block text-slate-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 hover:translate-x-1 transform cursor-pointer py-1">
                  Syarat & Ketentuan
                </a>
                <a className="block text-slate-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 hover:translate-x-1 transform cursor-pointer py-1">
                  Panduan Belanja
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-white/10">
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center lg:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-400 text-xs lg:text-sm">
              <span>© 2025 Sarung Mangga Official.</span>
              <span className="text-xs lg:text-sm">
                Powered by PT Poter Teknik Nusantara
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Made with</span>
              <span className="text-red-400">♥</span>
              <span>in Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
