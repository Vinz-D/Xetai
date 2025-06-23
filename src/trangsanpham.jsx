import React, { useState } from 'react';
import './css/Xechitiet.css';

const TruckDisplay = ({ product }) => {
  const { title, description, price, images } = product;

  const [selectedColor, setSelectedColor] = useState(Object.keys(images)[0]);
  const [selectedWeight, setSelectedWeight] = useState(Object.keys(images[selectedColor])[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (!images[color][selectedWeight]) {
      setSelectedWeight(Object.keys(images[color])[0]);
    }
  };

  return (
    <div className="truck-detail-container">
      <div className="truck-image-wrapper">
        <img
          src={images[selectedColor][selectedWeight]}
          alt="Xe tải"
          className="truck-image"
        />
      </div>

      <div className="truck-info">
        <h3 className="title">{title}</h3>
        <p className="desc">{description}</p>
        <p className="price">Giá từ: <span className="highlight">{price}</span></p>

        <div className="weight-options">
          {Object.keys(images[selectedColor]).map(w => (
            <button
              key={w}
              className={`btn-weight ${selectedWeight === w ? 'active' : ''}`}
              onClick={() => setSelectedWeight(w)}
            >
              {w} KG
            </button>
          ))}
        </div>

        <div className="color-options">
          {Object.keys(images).map(color => (
            <span
              key={color}
              className={`color-dot ${color} ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TruckDisplay;