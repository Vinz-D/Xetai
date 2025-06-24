import React from 'react';
import './css/Xechitiet.css';

const TabSectionNav = () => {
  const sections = [
    { label: 'Tổng Quan Sản Phẩm', id: 'tong-quan' },
    { label: 'Ngoại Thất', id: 'ngoai-that' },
    { label: 'Nội Thất', id: 'noi-that' },
    { label: 'Vận Hành', id: 'van-hanh' },
    { label: 'Thông Số Kỹ Thuật', id: 'thong-so' },
    { label: 'Hình Ảnh', id: 'hinh-anh' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="tab-nav-container bg-white shadow-sm py-2 px-3 sticky-top" style={{ zIndex: 1000 }}>
      <div className="container-fluid overflow-auto">
        <div className="d-flex flex-nowrap gap-3">
          {sections.map((item) => (
            <button
              key={item.id}
              className="btn btn-link text-nowrap text-dark px-3 tab-nav-item"
              onClick={() => scrollToSection(item.id)}
              style={{
                textDecoration: 'none',
                borderBottom: '3px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottom = '3px solid red';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottom = '3px solid transparent';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSectionNav;
