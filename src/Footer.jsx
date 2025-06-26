import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
    <div class="section-six">
      <div class="container">
        <div class="row">
          <div class="footer-list col-md-2 col-sm-12">
            <div class="footer-info">
              <div class="footer-tittle">
                <h2>Logo</h2> 
              </div>
              <img src="" alt=""/>
            </div>
          </div>
          <div class="footer-list col-md-4 col-sm-12">
            <div class="footer-tittle">
              <h2>vuongoto.vn</h2>
            </div>
            <address>
              <p>CÔNG TY TNHH MTV Ô TÔ HÒA PHÚC</p>
              <p>Trụ Sở :Số 579, QL1A ,Tổ 18, Ấp Ngũ Phúc , Xã Hố Nai 3, H.Trảng Bom,T. Đồng Nai</p>
              <p>Hotline: 0977 452 970</p>
              <p>Email: vuongdoan660@gmail.com</p>
              <p>ĐKKD Số : 3603266238.</p>
            </address>
          </div>
          <div class="footer-list col-md-3 col-sm-12">
            <div class="footer-tittle">
              <h2>Mạng xã hội</h2>
              {/* <iframe width="340" height="500" padding="10px"
    src="https://www.youtube.com/embed/f6aUmjRjniM?feature=share"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
    allowfullscreen>
</iframe> */}
            </div>

          </div>
          <div class="footer-list col-md-3 col-sm-12">
            <div class="footer-title">
              <h2>Theo dõi Fanpage</h2>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHotline.0977.452.970&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340" height="350" scrolling="no" frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
    </>
  );
}