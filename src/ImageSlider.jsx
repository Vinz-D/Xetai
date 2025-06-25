import React, { useState, useEffect, useRef } from "react";
import "./css/ImageSlider.css";

const getImages = () => {
  const isMobile = window.innerWidth <= 768;
  return isMobile
    ? [
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
      ]
    : [
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
        process.env.PUBLIC_URL + "/img/teracobanner1.jpg",
      ];
};

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(getImages());
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    // Cập nhật ảnh nếu đổi từ mobile sang desktop hoặc ngược lại
    const handleResize = () => {
      setImages(getImages());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => resetTimeout();
  }, [index, images]);

  return (
    <div className="slider-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`slider-image ${i === index ? "active" : ""}`}
        />
      ))}

      <div className="dot-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
