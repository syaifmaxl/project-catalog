import React from "react";

const ProductDescription: React.FC = () => {
  const productSpecs = {
    code: "MG-GSD-05",
    weight: "500 gram",
    stock: 2,
    shippedFrom: "Kota Pekalongan",
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">
          Spesifikasi Produk
        </h3>
        <div className="grid grid-cols-2 gap-y-3 text-base">
          <span className="text-slate-400">Kode Produk</span>
          <span className="text-slate-100 font-medium">
            {productSpecs.code}
          </span>

          <span className="text-slate-400">Berat Produk</span>
          <span className="text-slate-100 font-medium">
            {productSpecs.weight}
          </span>

          <span className="text-slate-400">Stok Produk</span>
          <span
            className={`font-medium ${
              productSpecs.stock > 0 ? "text-green-400" : "text-red-500"
            }`}
          >
            Tersedia (Sisa {productSpecs.stock})
          </span>

          <span className="text-slate-400">Dikirim Dari</span>
          <span className="text-slate-100 font-medium">
            {productSpecs.shippedFrom}
          </span>
        </div>
      </div>

      <hr className="border-slate-800" />

      <div>
        <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">
          Deskripsi Produk
        </h3>
        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
          <p>
            Sarung Tenun Premium dengan motif eksklusif yang ditenun oleh
            pengrajin ahli di Pekalongan. Bahan katun berkualitas tinggi
            menjamin kenyamanan maksimal saat dipakai untuk ibadah maupun
            kegiatan sehari-hari.
          </p>
          <p>
            Setiap helai benang dipilih dengan cermat untuk menghasilkan warna
            yang tajam dan tidak mudah luntur. Desainnya yang modern namun tetap
            elegan mencerminkan kekayaan budaya Nusantara.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bahan: Katun Premium Mercerized</li>
            <li>Ukuran: Dewasa (All Size)</li>
            <li>Motif: Batik Kontemporer</li>
            <li>Perawatan: Cuci dengan tangan, jangan gunakan pemutih.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
