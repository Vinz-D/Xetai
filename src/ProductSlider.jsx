import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ title, products }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/chi-tiet/${product.id}`, { state: product });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="product-slider mb-5">
      {title && <h3 className="mb-3 text-danger">{title}</h3>}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div
              className="inner-product"
              onClick={() => handleClick(product)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                border: '1px solid #eee',
                borderRadius: '8px',
              }}
            >
              <div className="inner-image text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="img-fluid"
                  style={{ height: '150px', objectFit: 'contain' }}
                />
              </div>
              <div className="inner-tittle text-center mt-2">
                <p className="fw-bold">{product.title}</p>
                <p className="inner-contact text-muted">{product.contact}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
