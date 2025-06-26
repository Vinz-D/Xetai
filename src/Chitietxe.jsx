import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Xechitiet.css';
import ImageSlider from "./ImageSlider";
import { productData } from "./AccordionXe";
import TabSectionNav from './TabSectionNav';
import { Accordion } from 'react-bootstrap';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e1e1e1',
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      zIndex: 2,
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    <span style={{ color: '#fff', fontSize: '20px' }}></span>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e1e1e1',
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      zIndex: 2,
      left: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
    }}
  >
    <span style={{ color: '#fff', fontSize: '20px' }}></span>
  </div>
);

const XeChiTiet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setSelectedColorIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleNavigate = (item) => {
    navigate(`/chi-tiet/${item.id}`);
  };

  const currentGroup = productData.find(group =>
    group.products.some(p => p.id === product.id)
  );

  const relatedProducts = currentGroup
    ? currentGroup.products.filter(p => p.id !== product.id).slice(0, 6)
    : [];

  const relatedSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderRelatedProduct = (p, i) => (
    <div key={i} className="px-2 mb-4">
      <div className="card h-100 text-center border-0">
        <div onClick={() => handleNavigate(p)} style={{ cursor: 'pointer' }}>
          <img
            src={p.img}
            alt={p.title}
            className="card-img-top img-fluid p-3"
            style={{ objectFit: 'contain', height: '200px', width: '100%' }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-danger fw-bold">{p.title}</h5>
          <p className="card-text text-muted">
            <small>{Object.keys(p.imageData?.white || {}).join("KG | ") + "KG"}</small>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ImageSlider />
      <TabSectionNav />
      <div className="product-detail container py-3">
        <div className="row">
          {/* PHẦN SLIDER ẢNH */}
          <div className="col-md-6">
            {isMobile ? (
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
            ) : (
              <img
                src={imageData[selectedColor]?.[selectedWeight] || '/img/default.jpg'}
                alt={`Xe màu ${selectedColor}`}
                className="img-fluid rounded"
              />
            )}

            {/* CHỌN MÀU – dưới ảnh, chỉ mobile hiển thị kiểu riêng */}
            <div className="d-flex justify-content-center gap-3 my-3">
              {colorKeys.map((color, i) => (
                <span
                  key={color}
                  className={`color-dot ${selectedColorIndex === i ? 'border-3 ' : 'border-2 border-secondary'}`}
                  style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: color,
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

          {/* PHẦN THÔNG TIN BÊN PHẢI */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="product-title fw-bold mb-3">{product.title}</h2>
            <p className="product-price mb-2">
              <strong className="text-muted">Mô tả:</strong> {product.contact}
            </p>
            <p className="mb-3">{product.description}</p>

            {/* TẢI TRỌNG */}
            <div className="mb-4">
              <strong className="d-block mb-2">Tải trọng:</strong>
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(imageData[selectedColor] || {}).map((w) => (
                  <button
                    key={w}
                    className={`btn btn-outline-danger ${selectedWeight === w ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(w)}
                  >
                    {w} KG
                  </button>
                ))}
              </div>
            </div>

            {/* NÚT LIÊN HỆ */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <button className="btn btn-danger">
                <i className="bi bi-telephone me-1"></i> 0977 542 970
              </button>
              <button className="btn btn-outline-dark">
                <i className="bi bi-receipt me-1"></i> NHẬN BÁO GIÁ
              </button>
            </div>
          </div>
        </div>
        {/* SẢN PHẨM LIÊN QUAN */}
        <div className="inner-main">
          <h2 className="box-tittle wow zoomIn">Sản phẩm khác</h2>
          <div className="inner-box-inline"></div>
          {relatedProducts.length > 0 ? (
            isMobile ? (
              <Slider {...relatedSliderSettings}>
                {relatedProducts.map((p, i) => renderRelatedProduct(p, i))}
              </Slider>
            ) : (
              <div className="row">
                {relatedProducts.map((p, i) => (
                  <div key={i} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
                    {renderRelatedProduct(p, i)}
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="col-12 text-center text-muted">Không có sản phẩm khác để hiển thị.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default XeChiTiet;
