import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ImageSlider from "./ImageSlider"; // điều chỉnh path nếu khác
import XeChiTiet from './Chitietxe';
import AccordionXe from './AccordionXe';
import GioiThieu from './Gioithieu';
// import TabSectionNav from './TabSectionNav';
import Main from './Main';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/reset.css';

export default function App() {
  useEffect(() => {
    if (window.$ && window.$('.product-list').slick) {
      window.$('.product-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } }
        ]
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider/>
                {/* <TabSectionNav /> */}
                  <AccordionXe />
                <Main />
              </>
            }
          />
          <Route path="/chi-tiet/:id" element={<XeChiTiet />} />
          <Route path="/gioi-thieu" element={<GioiThieu />}/>
          {/* <Route path="/" element={<XeList />} />
        <Route path="/xe-chi-tiet" element={<XeChiTiet />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
