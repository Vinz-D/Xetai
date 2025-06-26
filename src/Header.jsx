import React from "react";
import { Link } from "react-router-dom";
import './css/Xechitiet.css';
import './css/style.css';

export default function Header() {
  return (
    <>
      {/* --- TOP HEADER --- */}
<div className="header-top displaynone py-1 px-3 d-md-flex justify-content-end align-items-center small" style={{ backgroundColor: "#e5e5e5" }}>
  <div className="d-flex align-items-center gap-2 flex-wrap">

    <div className="d-flex align-items-center text-muted gap-2 me-2">
      <div className="rounded-circle border border-danger d-flex align-items-center justify-content-center" style={{ width: 33, height: 33 }}>
        <i className="bi bi-telephone text-danger" style={{ fontSize: "12px " }}></i>
      </div>
      <span className="fw-normal">Hotline: <span className="text-danger fw-bold">0977 452 970 - 0977 452 970</span></span>
    </div>

    {/* <div className="text-muted">|</div> */}

    {/* <div className="d-flex gap-2">
      <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
      <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
      <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
      <a href="#" className="social-icon">Zalo</a>
    </div> */}
  </div>
</div>


      {/* --- MAIN HEADER --- */}
      <header className="header shadow-sm top-0 bg-white" style={{ zIndex: 1050 }}>
        <div className="container-fluid py-2 px-3 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/Xetai">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Banner" alt="Logo" style={{ height: 32 }} />
          </Link>

          {/* === Mobile Buttons === */}
          <div className="d-flex d-md-none align-items-center">
            <button className="btn p-0 me-3 bg-light rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: 36, height: 36 }}>
              <i className="bi bi-search text-danger"></i>
            </button>
            <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
              <i className="bi bi-list" style={{ fontSize: 28, color: 'red' }}></i>
            </button>
          </div>

          {/* === Desktop Nav === */}
          <nav className="d-none d-md-flex gap-4 align-items-center header-menu fw-semibold">
            <Link to="/Xetai" className="nav-link-custom">TRANG CHỦ</Link>

            <div className="position-relative group">
              <span className="nav-link-custom">SẢN PHẨM ▾</span>
              <div className="dropdown-menu-custom">
                <Link to="/san-pham-1" className="dropdown-item-custom">Sản phẩm 1</Link>
                <Link to="/san-pham-2" className="dropdown-item-custom">Sản phẩm 2</Link>
              </div>
            </div>

            <Link to="/gioi-thieu" className="nav-link-custom">GIỚI THIỆU</Link>
            <Link to="/he-thong-dai-ly" className="nav-link-custom">HỆ THỐNG ĐẠI LÝ</Link>
            <Link to="/dich-vu" className="nav-link-custom">DỊCH VỤ</Link>
            <Link to="/tin-tuc" className="nav-link-custom">TIN TỨC - SỰ KIỆN</Link>
            <Link to="/tuyen-dung" className="nav-link-custom">TUYỂN DỤNG</Link>
            <Link to="/lien-he" className="nav-link-custom">LIÊN HỆ</Link>
            <button className="btn p-0 ms-2">
              <i className="bi bi-search text-danger fs-5"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer để tránh bị che bởi fixed header */}
      {/* <div style={{ height: "100px" }}></div> */}

      {/* === Mobile OFFCANVAS MENU === */}
      <div
        className="offcanvas offcanvas-end text-white"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        style={{ background: 'linear-gradient(#c4261d, #910101)' }}
      >
        <div className="offcanvas-header">
          <img src="/logo-teraco.png" alt="Logo" style={{ height: 30 }} />
          <button type="button" className="btn text-white" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="bi bi-x-lg fs-4"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled fs-6 fw-bold">
            <li className="py-2 border-bottom"><Link to="/" className="text-white text-decoration-none d-block">TRANG CHỦ</Link></li>
            <li className="py-2 border-bottom"><Link to="/gioi-thieu" className="text-white text-decoration-none d-block">GIỚI THIỆU</Link></li>
            <li className="py-2 border-bottom d-flex justify-content-between"><span>SẢN PHẨM</span> <span>▾</span></li>
            <li className="py-2 border-bottom d-flex justify-content-between"><span>HỆ THỐNG ĐẠI LÝ</span> <span>▾</span></li>
            <li className="py-2 border-bottom d-flex justify-content-between"><span>DỊCH VỤ</span> <span>▾</span></li>
            <li className="py-2 border-bottom d-flex justify-content-between"><span>TIN TỨC - SỰ KIỆN</span> <span>▾</span></li>
            <li className="py-2 border-bottom"><Link to="/tuyen-dung" className="text-white text-decoration-none d-block">TUYỂN DỤNG</Link></li>
            <li className="py-2"><Link to="/lien-he" className="text-white text-decoration-none d-block">LIÊN HỆ</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
