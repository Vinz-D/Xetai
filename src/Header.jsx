import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        {/* Top header */}
        {/* <div className="header-top py-2 text-white text-center bg-dark">
          Vượng Đoàn
        </div> */}

        {/* Main header */}
        <div className="header-main d-flex justify-content-between align-items-center bg-dark text-white">
          {/* Logo + Title */}
          <div className="d-flex align-items-center">
            {/* <Link to="/">
              <img
                src="/img/logo-fb.png"
                alt="Logo"
                style={{ height: "40px" }}
                className="me-2"
              />
            </Link>
            <Link to="/" className="text-danger fw-bold fs-5 text-decoration-none">
              VƯỢNG ĐOÀN
            </Link> */}
          </div>

          {/* Desktop Nav */}
          <nav className="d-none d-md-flex align-items-center">
            <Link to="/" className="dropdown"><a href="" className="text-white text-decoration-none dropdown">TRANG CHỦ</a></Link>
            <div className="dropdown">
              <a className="btn-dark dropdown-toggle dropdown text-white text-decoration-none" data-bs-toggle="dropdown">
                SẢN PHẨM
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/san-pham-1">Item 1</Link></li>
                <li><Link className="dropdown-item" to="/san-pham-2">Item 2</Link></li>
                <li><Link className="dropdown-item" to="/san-pham-3">Item 3</Link></li>
              </ul>
            </div>
            <Link to="/gioi-thieu" className="dropdown"><a href="" className="text-white text-decoration-none dropdown">GIỚI THIỆU</a></Link>
            <Link to="/dich-vu" className="dropdown"><a href="" className="text-white text-decoration-none dropdown">DỊCH VỤ</a></Link>
            <Link to="/tin-tuc" className="dropdown"><a href="" className="text-white text-decoration-none dropdown">TIN TỨC</a></Link>
          </nav>

          {/* Mobile button */}
          <button
            className="btn d-md-none text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <i className="fa-solid fa-bars me-2"></i> MENU
          </button>
        </div>
      </header>

      {/* Offcanvas Mobile Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 id="mobileMenuLabel" className="mb-0">MENU</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled fs-5">
            <li><Link to="/" className="d-block py-2">Trang Chủ</Link></li>
            <li><Link to="/gioi-thieu" className="d-block py-2">Giới Thiệu</Link></li>
            <li><Link to="/xe-hyundai" className="d-block py-2">Xe Hyundai <span className="float-end">+</span></Link></li>
            <li><Link to="/dich-vu" className="d-block py-2 text-primary">Dịch Vụ <span className="float-end">+</span></Link></li>
            <li><Link to="/tra-gop" className="d-block py-2">Trả Góp</Link></li>
            <li><Link to="/chi-phi" className="d-block py-2">Dự Toán Chi Phí</Link></li>
            <li><Link to="/khuyen-mai" className="d-block py-2">Khuyến Mãi</Link></li>
            <li><Link to="/tin-tuc" className="d-block py-2">Tin Tức</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
