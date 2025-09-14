import whatsapp from "/whatsapp.png?url"
import instagram from "/Instagram.png?url"
import facebook from "/facebook.png?url"
import youtube from "/youtube.png?url"
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="z-20 p-6 md:p-10 mt-15 text-gray-300
                       bg-white/10 backdrop-blur-lg border-t border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* contact left */}
        <div>
          <h1 className="font-bold text-2xl">SARUNG</h1>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Sarung Mangga Official adalah website resmi Sarung Mangga untuk melayani penjualan melalui online. 
            Sarung Mangga produksi PT Panggung Jaya Indah Textile (PT PAJITEX) selalu tampil dengan desain yang 
            menawan menggunakan paduan warna yang berani sehingga mampu menampilkan keindahan yang tidak biasa.
          </p>
          <p className="font-semibold mt-4">Sosial Media</p>
          <div className="mt-2 flex gap-3">
            <img src={whatsapp} alt="whatsapp" className="w-8 md:w-10"/>
            <img src={instagram} alt="instagram" className="w-8 md:w-10"/>
            <img src={facebook} alt="facebook" className="w-8 md:w-10"/>
            <img src={youtube} alt="youtube" className="w-8 md:w-10"/>
          </div>
        </div>

        {/* content middle */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-2">Jadwal Toko</h1>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Proses packing & pengiriman dilakukan Senin - Jumat pk. 09.00 - 15.00 WIB.</li>
            <li>Hari Sabtu, Ahad, & libur nasional: libur. Transaksi diproses hari kerja berikutnya.</li>
            <li>Transaksi dengan pembayaran sebelum pk. 13.00 WIB akan diproses hari yang sama.</li>
          </ul>
        </div>

        {/* content right */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-2">Informasi</h1>
          <ul className="space-y-2 text-sm md:text-base mb-4">
            <li>Tentang</li>
            <li>Kebijakan Privasi</li>
            <li>Kebijakan Layanan</li>
            <li>Panduan Belanja</li>
          </ul>
          <h1 className="font-bold text-lg md:text-xl">Kontak Kami</h1>
          <div className="mt-3 flex gap-2 justify-center items-center w-max">
            <Mail size={20}/>
            <p>banggabersarung.official@gmail.com</p>
          </div>
          <div className="mt-3 flex gap-2 justify-center items-center w-max">
            <Phone size={20}/>
            <p>+62 81358838686</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer