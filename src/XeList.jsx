// XeList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const danhSachXe = [
  {
    title: 'TERA240',
    contact: 'Liên hệ',
    description: 'Xe tải 2.4 tấn mạnh mẽ, tiết kiệm nhiên liệu.',
    imageData: {
      white: {
        '2.400': '/img/tera240_white_2400.png',
        '3.490': '/img/tera240_white_3490.png'
      },
      blue: {
        '2.400': '/img/tera240_blue_2400.png',
        '3.490': '/img/tera240_blue_3490.png'
      }
    },
    thumb: '/img/tera240_thumb.jpg'
  },
  {
    title: 'TERA190SL',
    contact: '526.000.000đ',
    description: 'Xe tải 1.9 tấn với nhiều lựa chọn tải trọng.',
    imageData: {
      white: {
        '1.900': '/img/tera_white_1900.png',
        '3.490': '/img/tera_white_3490.png'
      },
      blue: {
        '1.900': '/img/tera_blue_1900.png',
        '3.490': '/img/tera_blue_3490.png'
      }
    },
    thumb: '/img/tera190_thumb.jpg'
  }
];

export default function XeList() {
  const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h2 className="text-danger fw-bold mb-4">DANH SÁCH XE</h2>
      <div className="row">
        {danhSachXe.map((xe, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
              <img src={xe.thumb} alt={xe.title} className="card-img-top p-3" />
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">{xe.title}</h5>
                <p className="mb-1"><small>{xe.description}</small></p>
                <p className="fw-bold">Giá từ: {xe.contact}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => navigate('/xe-chi-tiet', { state: xe })}
                >
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
