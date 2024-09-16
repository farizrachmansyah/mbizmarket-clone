// import React from 'react'

const CardProduct = () => {
  return (
    <a className="product-card">
      <div className="product-card-img">
        <img src="https://via.placeholder.com/180" alt="Product Img" />
      </div>
      <h2 className="product-card-title">Product Title</h2>
      <p className="product-card-start-price">Mulai dari</p>
      <span className="product-card-price">Rp 90.000,00</span>
      <div className="product-card-store">
        <span className="product-card-store__badge">
          <img src="https://via.placeholder.com/16" alt="Verif Badge" />
        </span>
        <span className="product-card-store__name">ARNIDA ABADI</span>
      </div>
      <p className="product-card-tax">Status Pajak: Non PKP</p>
      <div className="product-card-location">
        <span className="product-card-location__icon">l</span>
        <span className="product-card-location_name">Kalimantan Timur</span>
      </div>
    </a>
  );
};

export default CardProduct;
