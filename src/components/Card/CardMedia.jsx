import Logo from '../Logo';

const CardMedia = () => {
  return (
    <div>
      <a href="/" className="media-card">
        <div className="mb-5 max-w-[40px]">
          <Logo />
        </div>
        <div className="media-card-img">
          <img src="https://via.placeholder.com/300" alt="Product Img" />
        </div>
        <h2 className="media-card-title">Depok Luncurkan Program Deprok untuk UMKM Go Digital</h2>
        <p className="media-card-desc">
          Peluncuran Program Depok Ekonomi Pro Rakyat - OK (Deprok) oleh Wali Kota Depok
        </p>
        <span className="media-card-date">26 Agustus 2024</span>
      </a>
    </div>
  );
};

export default CardMedia;
