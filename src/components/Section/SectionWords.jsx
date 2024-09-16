import { useState } from 'react';

const SectionWords = () => {
  const notes = [];
  for (let i = 0; i < 5; i++) {
    notes.push(
      <div className="pb-8">
        <h1 className="text-2xl font-bold mb-2.5">Mbizmarket, Trendsetter B2B Marketplace di Indonesia</h1>
        <p className="text-xs">
          Mbizmarket adalah B2B Marketplace dengan solusi terlengkap untuk pebisnis, mulai dari solusi transaksi bisnis,
          solusi promosi bisnis, solusi e-procurement, hingga solusi pinjaman modal untuk pebisnis. Dengan dukungan
          sistem terbaik, ketersediaan puluhan ribu produk, dan juga ribuan penjual terpercaya, Mbizmarket.co.id siap
          memenuhi kebutuhan pengadaan perusahaan Anda.
        </p>
      </div>
    );
  }

  const [isExpand, setIsExpand] = useState(false);
  const toggleExpand = () => setIsExpand((prev) => !prev);

  return (
    <section className="container py-6">
      <div
        className={`${
          isExpand ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } grid grid-rows-[0fr] transition-all duration-300`}
      >
        <div className="min-h-[100px] overflow-hidden">
          {notes.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="btn p-0 shadow-none border-none text-xs text-primary hover:underline"
        onClick={toggleExpand}
      >
        {isExpand ? 'Tampilkan Lebih Sedikit' : 'Lihat Selengkapnya'}
      </button>
    </section>
  );
};

export default SectionWords;
