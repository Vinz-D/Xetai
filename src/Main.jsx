import React, { useEffect } from 'react';

export default function Main() {
  useEffect(() => {
    if (window.$) {
      // Parallax
      const scrollBanner = () => {
        window.$(document).on('scroll', function () {
          const scrollPos = window.$(this).scrollTop();
          window.$('.parallax-fade-top').css({
            top: scrollPos / 2 + 'px',
            opacity: 1 - scrollPos / 700,
          });
          window.$('.parallax-00').css({ top: scrollPos / -3.5 + 'px' });
          window.$('.parallax-01').css({ top: scrollPos / -2.8 + 'px' });
          window.$('.parallax-top-shadow').css({ top: scrollPos / -2 + 'px' });
        });
      };
      scrollBanner();

      // Page cursors
      const t = document.getElementById('cursor');
      const e = document.getElementById('cursor2');
      const i = document.getElementById('cursor3');

      if (t && e && i) {
        document.body.addEventListener('mousemove', function (n) {
          t.style.left = n.clientX + 'px';
          t.style.top = n.clientY + 'px';
          e.style.left = n.clientX + 'px';
          e.style.top = n.clientY + 'px';
          i.style.left = n.clientX + 'px';
          i.style.top = n.clientY + 'px';
        });

        function hoverIn() {
          e.classList.add('hover');
          i.classList.add('hover');
        }

        function hoverOut() {
          e.classList.remove('hover');
          i.classList.remove('hover');
        }

        hoverOut();
        document.querySelectorAll('.hover-target').forEach((el) => {
          el.addEventListener('mouseover', hoverIn);
          el.addEventListener('mouseout', hoverOut);
        });
      }

      // Scroll back to top
      const offset = 300;
      const duration = 400;
      window.$(window).on('scroll', function () {
        if (window.$(this).scrollTop() > offset) {
          window.$('.scroll-to-top').addClass('active-arrow');
        } else {
          window.$('.scroll-to-top').removeClass('active-arrow');
        }
      });
      window.$('.scroll-to-top').on('click', function (event) {
        event.preventDefault();
        window.$('html, body').animate({ scrollTop: 0 }, duration);
        return false;
      });

      // Hero case study images hover effect
      for (let i = 1; i <= 4; i++) {
        window.$(`.case-study-name:nth-child(${i})`).on('mouseenter', function () {
          window.$('.case-study-name.active').removeClass('active');
          window.$('.case-study-images li.show').removeClass('show');
          window.$(`.case-study-images li:nth-child(${i})`).addClass('show');
          window.$(`.case-study-name:nth-child(${i})`).addClass('active');
        });
      }

      window.$('.case-study-name:nth-child(1)').trigger('mouseenter');
    }
  }, []);

  return (
    <>
      <div className="modal fade modal-form" id="exampleModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <img src="/img/logo-fb.png" alt="Logo" className="mb-2 inner-image" />
              <h5 className="modal-title inner-tittle">
                Gửi yêu cầu tư vấn miễn phí
              </h5>
              <p className="inner-decs">
                38.000+ doanh nghiệp & chủ shop đã tin dùng
              </p>
              <button type="button" className="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-12 inner-decs">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Họ Và Tên *" />
                    </div>
                  </div>
                  <div className="col-12 inner-decs">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Số Điện Thoại *" />
                    </div>
                  </div>
                  <div className="col-12 inner-decs">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nội Dung *" />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="button">Gửi ngay</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two">
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 inner-decs wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
              <p>
                Các sản phẩm xe tải, xe ben, xe đầu kéo, xe chuyên dùng và xe năng lượng mới được nhập khẩu và phân phối chính hãng, chất lượng tuyệt đối. Giá thành rẻ nhất đi kèm các chương trình khuyến mãi hấp dẫn. Quy trình bảo hành, bảo dưỡng, sửa chữa và cung cấp phụ tùng đạt tiêu chuẩn toàn cầu của các hãng xe, đáp ứng mọi nhu cầu của quý khách hàng.
              </p>
            </div>
            <div className="col-md-6 inner-picture wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
              <img src="/img/sectionbot.jpg" className="img-fluid rounded" alt="Ảnh sản phẩm" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-two-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 inner-order">
              <div className="inner-picture">
                <img src="/img/picture-two.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="inner-decs">
                <h2>Connect to social media in seconds</h2>
                <p>Already using Facebook? That makes it even easier to build your online portfolio. Pull in photos right from your existing accounts, so your website is ready in a snap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map">
        <div className="inner-top">
          <h2 className="box-tittle wow zoomIn">Show Room</h2>
          <div className="inner-box-inline"></div>
          <p className="inner-box-decs">Địa chỉ: 579, QL 1A, Tổ 18, Ấp Ngũ Phúc, Xã Hố Nai 3, H. Trảng Bom, Đồng Nai</p>
          <p className="inner-box-decs">Thứ 2 đến Thứ 6: Từ 7h30 đến 17h. Thứ 7: Từ 7h30 đến 16h</p>
          <p className="inner-box-decs">Điện thoại: 0901.308.178 – 0919.863.279</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.972546022007!2d106.9225955742251!3d10.965444755680458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e744c3862473%3A0x4da31733f53d4495!2zw5QgVMO0IEhvw6AgUGjDumM!5e0!3m2!1svi!2s!4v1681530524897!5m2!1svi!2s"
          width="100%"
          height="650"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="section-four">
        <div className="container">
          <div className="row">
            <div className="inner-top">
              <h2 className="box-tittle wow zoomIn">Talk To Us</h2>
              <div className="inner-box-inline"></div>
              <p className="inner-box-decs">Nơi chia sẻ kiến thức quản lý và bán hàng trên website thiết thực nhất</p>
            </div>
          </div>
          <div className="inner-body">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="inner-content">
                  <h4 className="inner-tittle">Keep in touch</h4>
                  <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem</p>
                  <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobie-phone">
        <a href="tel:0987654321" className="call-button">
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </>
  );
}
