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
    <div className="tab-nav-container shadow-sm">
      {sections.map((item) => (
        <span
          key={item.id}
          className="tab-nav-item"
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default TabSectionNav;
