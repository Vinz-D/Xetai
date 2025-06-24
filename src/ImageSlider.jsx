import React, { useState, useEffect, useRef } from "react";
import "./css/ImageSlider.css";

const images = [
  process.env.PUBLIC_URL + "/img/banner (1).png",
  process.env.PUBLIC_URL + "/img/banner (2).jpg",
  process.env.PUBLIC_URL + "/img/banner (3).jpg",
  process.env.PUBLIC_URL + "/img/banner (1).jpg",
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
