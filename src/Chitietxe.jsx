import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Xechitiet.css';
import ImageSlider from "./ImageSlider";
import { productData } from "./AccordionXe";
import TabSectionNav from './TabSectionNav';

const XeChiTiet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('');

  const product = productData
    .flatMap(group => group.products)
    .find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const imageData = product?.imageData || {};
  const colorKeys = Object.keys(imageData);
  const selectedColor = colorKeys[selectedColorIndex];

  useEffect(() => {
    if (colorKeys.length > 0) {
      const defaultColor = colorKeys[0];
      const weightsForDefaultColor = Object.keys(imageData[defaultColor] || {});
      if (weightsForDefaultColor.length > 0) {
        setSelectedWeight(weightsForDefaultColor[0]);
      }
    }
  }, [product]);

  if (!product) return <div className="container py-5 text-center">Không tìm thấy thông tin xe.</div>;

  const sliderSettings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setSelectedColorIndex(next),
  };

  const handleNavigate = (item) => {
    navigate(`/chi-tiet/${item.id}`);
  };

  // ✅ Lấy group hiện tại chứa sản phẩm đang xem
  const currentGroup = productData.find(group =>
    group.products.some(p => p.id === product.id)
  );

  // ✅ Lọc sản phẩm khác trong cùng group
  const relatedProducts = currentGroup
    ? currentGroup.products.filter(p => p.id !== product.id).slice(0, 6)
    : [];

  return (
    <>
      <ImageSlider />
      <TabSectionNav />
      <div className="product-detail container-xl">
        <div className="row">
          <div className="col-md-6">
            <Slider {...sliderSettings} ref={sliderRef}>
              {colorKeys.map((color) => (
                <div key={color}>
                  <img
                    src={imageData[color]?.[selectedWeight] || '/img/default.jpg'}
                    alt={`Xe màu ${color}`}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="col-md-6">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Mô tả: <strong>{product.contact}</strong></p>
            <p>{product.description}</p>

            <div className="weight-selector">
              <strong>Tải trọng:</strong>
              {Object.keys(imageData[selectedColor] || {}).map(w => (
                <button
                  key={w}
                  className={`btn btn-outline-danger m-1 ${selectedWeight === w ? 'active' : ''}`}
                  onClick={() => setSelectedWeight(w)}
                >
                  {w} KG
                </button>
              ))}
            </div>

            <div className="mt-4 d-flex gap-3 flex-wrap">
              <button className="btn btn-danger">
                <i className="bi bi-telephone"></i> 091.234.5678
              </button>
              <button className="btn btn-outline-dark">
                <i className="bi bi-receipt"></i> NHẬN BÁO GIÁ
              </button>
            </div>

            <div className="color-selector mt-4 d-flex gap-3 align-items-center">
              <strong className="me-2">Màu sắc:</strong>
              {colorKeys.map((color, i) => (
                <span
                  key={color}
                  className={`color-dot ${selectedColorIndex === i ? 'selected' : ''}`}
                  style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    border: '2px solid #999',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setSelectedColorIndex(i);
                    sliderRef.current?.slickGoTo(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* SẢN PHẨM KHÁC */}
        <div className="mt-5">
          <h3 className="text-danger fw-bold mb-4">SẢN PHẨM KHÁC</h3>
          <div className="row">
            {relatedProducts.map((p, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <div onClick={() => handleNavigate(p)} style={{ cursor: 'pointer' }}>
                    <img src={p.img} alt={p.title} className="card-img-top p-3" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-danger fw-bold">{p.title}</h5>
                    <p className="mb-1">
                      <small>{Object.keys(p.imageData?.white || {}).join("KG | ") + "KG"}</small>
                    </p>
                    <p className="fw-bold">Giá từ: {p.contact}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleNavigate(p)}
                    >
                      LIÊN HỆ
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {relatedProducts.length === 0 && (
              <div className="col-12 text-center text-muted">
                Không có sản phẩm khác để hiển thị.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default XeChiTiet;
