// Imagebottom.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Imagebottom = ({ images }) => {
  // Kiểm tra images có phải là mảng không
  if (!Array.isArray(images)) {
    console.error("❌ 'images' không phải là một mảng:", images);
    return <div>Không có ảnh để hiển thị</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // số lượng ảnh hiển thị
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`img-${idx}`}
              style={{
                width: '95%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px',
                margin: 'auto'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Imagebottom;
