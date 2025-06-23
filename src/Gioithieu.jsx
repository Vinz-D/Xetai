import React from "react";

export default function GioiThieu() {
  return (
    <div className="container">
      <h1 className="text-center text-uppercase mb-4">Giới Thiệu</h1>
      <p>
        Chúng tôi là Vượng Đoàn – đại lý chính hãng cung cấp các dòng xe tải, xe du lịch, phụ tùng và dịch vụ bảo dưỡng uy tín hàng đầu.
      </p>
      <p>
        Với nhiều năm kinh nghiệm trong ngành ô tô, chúng tôi cam kết mang đến cho khách hàng sản phẩm chất lượng cao, dịch vụ tận tâm và giá cả hợp lý.
      </p>
      <img
        src="/img/about-us.jpg"
        alt="Giới thiệu"
        className="img-fluid my-4 rounded"
      />
      <p>
        Đến với Vượng Đoàn, bạn sẽ được phục vụ bởi đội ngũ tư vấn chuyên nghiệp, hỗ trợ tận tình từ khâu lựa chọn sản phẩm cho đến hậu mãi sau bán hàng.
      </p>
    </div>
  );
}
