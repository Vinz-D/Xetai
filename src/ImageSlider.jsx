import React, { useState, useEffect, useRef } from "react";
import "./css/ImageSlider.css";

const images = [
  
  "img/banner (1).png",
    "/img/banner (2).jpg",
      "/img/banner (3).jpg",
          "/img/banner (1).jpg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => resetTimeout();
  }, [index]);

  const handleDotClick = (i) => {
    setIndex(i);
  };

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
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
