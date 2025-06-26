import React from 'react';
import './css/Xechitiet.css';

const IntroBanner = () => {
  return (
    <div className="intro-banner">
      <div className="banner-left">
        <span>Vượng Đoàn<br />Xe tải</span>
      </div>
      <div className="banner-right">
        <p>
          Với phương châm <strong>“Sản phẩm tốt nhất là sản phẩm không ngừng cải tiến”</strong>, 
          <span className="highlight"> Vượng Đoàn - Xe tải</span> luôn không ngừng hoàn thiện, 
          nâng cao chất lượng sản phẩm, dịch vụ và hậu mãi tốt nhất đến khách hàng.
        </p>
      </div>
    </div>
  );
};

export default IntroBanner;
