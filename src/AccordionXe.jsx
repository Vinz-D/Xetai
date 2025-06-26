// AccordionXe.jsx
import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/Xechitiet.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  <meta name="description" content="Công ty Ô tô Hòa Phúc chuyên xe tải Tera 100S, Tera 190, xe tải ben, xe tải van chính hãng. Giao xe tận nơi, giá hợp lý, hỗ trợ trả góp." />


export const productData = [
  {
    id: 1,
    group: 'TỪ 900KG - 3 TẤN',
    products: [
      {
        id: 'teraco',
        title: 'TERA100S xe van tải nhẹ ',
        img: process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
        contact: 'Liên hệ: 0977 452 970',
        description: 'Tải nhẹ máy xăng TERA100S với tải trọng 990kg sở hữu khối động cơ Mitsubishi Tech bền bỉ - hiệu suất cao, tiết kiệm nhiên liệu, khung sườn chắc chắn và khả năng di chuyển linh hoạt trên mọi cung đường nông thôn hay đô thị.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
            
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-3.png",
     
          }
        }
      },
      {
        id: 'teracostar',
        title: 'TERASTAR',
        img: process.env.PUBLIC_URL + "/img/trang-1.png",
        contact: 'ĐỘNG CƠ BỀN BỈ',
        description: 'Thuộc dải sản phẩm thế hệ mới tải nhẹ máy xăng của TERACO, TERA STAR sở hữu động cơ xăng 1.5L công nghệ Nhật Bản kết hợp hệ thống bơm xăng trực tiếp buồng đốt GDI và van biến thiên dạng kép DVVT duy nhất trong phân khúc tại thị trường Việt Nam. Xe có công suất toàn tải tối ưu và siêu tiết kiệm nhiên liệu.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/trang-1.png"
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-1.png",
          }
        }
      },
      {
        id: 'teracostarplus',
        title: 'TERASTARPLUS',
        img: process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
        contact: 'DẪN ĐẦU XU HƯỚNG',
        description: 'Ra mắt thị trường Việt Nam vào đầu năm 2024, mẫu xe tải nhẹ máy xăng 1.25T TERA STAR PLUS (TERA STAR+) đã nhanh chóng thu hút sự quan tâm của khách hàng, tạo nên cơn sốt đặt hàng bởi hàng loạt trang bị vượt trội phân khúc.',
        imageData: {
          white: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
          },
          blue: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-bat-xanh (1).png",
          }
        }
      },
      {
        id: 'tera190sl',
        title: 'TERA190SL-TERA245SL-TERA345SL', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'CHUYÊN GIA VẬN CHUYỂN SẢN PHẨM KÍCH THƯỚC DÀI',
        description: 'Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera24Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera245SL & Tera345SL phân khúc tải trọng 1.9T, 2.49T và 3.49T lại liên tục đạt doanh số dẫn đầu trong phân khúc xe tải nhẹ thùng siêu dài 6.3m. Vận hành bền bỉ, công năng linh hoạt, thiết kế hiện đại cùng những ưu đãi hấp dẫn mang lại lợi thế cạnh tranh lớn cho sản phẩm này so với các đối thủ khác cùng phân khúc.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
          }
        }
      },
      {
        id: 'tera350',
        title: 'TERA350', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'THÙNG DÀI ĐA DỤNG',
        description: 'TERA350 với trái tim là khối động cơ ISUZU Nhật Bản đầy mạnh mẽ và bền bỉ, được thiết kế tải trọng 3.49 tấn và kích thước thùng 5.2m, là giải pháp kinh tế tối ưu, đáp ứng đa dạng nhu cầu chuyên chở của khách hàng khi di chuyển liên miền.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-white.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-blue.png",
          }
        }
      },
    ]
  },
  {
    id: 2,
    group: 'TỪ 3 TẤN - 5 TẤN',
    products: [
      {
        id: 'teraco',
        title: 'TERA100S',
        img: process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
        contact: 'XE VAN TẢI NHẸ',
        description: 'Tải nhẹ máy xăng TERA100S với tải trọng 990kg sở hữu khối động cơ Mitsubishi Tech bền bỉ - hiệu suất cao, tiết kiệm nhiên liệu, khung sườn chắc chắn và khả năng di chuyển linh hoạt trên mọi cung đường nông thôn hay đô thị.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
            
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-3.png",
     
          }
        }
      },
      {
        id: 'teracostar',
        title: 'TERASTAR',
        img: process.env.PUBLIC_URL + "/img/trang-1.png",
        contact: 'ĐỘNG CƠ BỀN BỈ',
        description: 'Thuộc dải sản phẩm thế hệ mới tải nhẹ máy xăng của TERACO, TERA STAR sở hữu động cơ xăng 1.5L công nghệ Nhật Bản kết hợp hệ thống bơm xăng trực tiếp buồng đốt GDI và van biến thiên dạng kép DVVT duy nhất trong phân khúc tại thị trường Việt Nam. Xe có công suất toàn tải tối ưu và siêu tiết kiệm nhiên liệu.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/trang-1.png"
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-1.png",
          }
        }
      },
      {
        id: 'teracostarplus',
        title: 'TERASTARPLUS',
        img: process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
        contact: 'DẪN ĐẦU XU HƯỚNG',
        description: 'Ra mắt thị trường Việt Nam vào đầu năm 2024, mẫu xe tải nhẹ máy xăng 1.25T TERA STAR PLUS (TERA STAR+) đã nhanh chóng thu hút sự quan tâm của khách hàng, tạo nên cơn sốt đặt hàng bởi hàng loạt trang bị vượt trội phân khúc.',
        imageData: {
          white: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
          },
          blue: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-bat-xanh (1).png",
          }
        }
      },
      {
        id: 'tera190sl',
        title: 'TERA190SL-TERA245SL-TERA345SL', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'CHUYÊN GIA VẬN CHUYỂN SẢN PHẨM KÍCH THƯỚC DÀI',
        description: 'Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera24Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera245SL & Tera345SL phân khúc tải trọng 1.9T, 2.49T và 3.49T lại liên tục đạt doanh số dẫn đầu trong phân khúc xe tải nhẹ thùng siêu dài 6.3m. Vận hành bền bỉ, công năng linh hoạt, thiết kế hiện đại cùng những ưu đãi hấp dẫn mang lại lợi thế cạnh tranh lớn cho sản phẩm này so với các đối thủ khác cùng phân khúc.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
          }
        }
      },
      {
        id: 'tera350',
        title: 'TERA350', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'THÙNG DÀI ĐA DỤNG',
        description: 'TERA350 với trái tim là khối động cơ ISUZU Nhật Bản đầy mạnh mẽ và bền bỉ, được thiết kế tải trọng 3.49 tấn và kích thước thùng 5.2m, là giải pháp kinh tế tối ưu, đáp ứng đa dạng nhu cầu chuyên chở của khách hàng khi di chuyển liên miền.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-white.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-blue.png",
          }
        }
      },
    ]
  },
  {
    id: 3,
    group: 'TỪ 3 TẤN - 5 TẤN',
    products: [
      {
        id: 'teraco',
        title: 'TERA100S',
        img: process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
        contact: 'XE VAN TẢI NHẸ',
        description: 'Tải nhẹ máy xăng TERA100S với tải trọng 990kg sở hữu khối động cơ Mitsubishi Tech bền bỉ - hiệu suất cao, tiết kiệm nhiên liệu, khung sườn chắc chắn và khả năng di chuyển linh hoạt trên mọi cung đường nông thôn hay đô thị.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/tai-nhe-tera-100-thung-lung.png",
            
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-3.png",
     
          }
        }
      },
      {
        id: 'teracostar',
        title: 'TERASTAR',
        img: process.env.PUBLIC_URL + "/img/trang-1.png",
        contact: 'ĐỘNG CƠ BỀN BỈ',
        description: 'Thuộc dải sản phẩm thế hệ mới tải nhẹ máy xăng của TERACO, TERA STAR sở hữu động cơ xăng 1.5L công nghệ Nhật Bản kết hợp hệ thống bơm xăng trực tiếp buồng đốt GDI và van biến thiên dạng kép DVVT duy nhất trong phân khúc tại thị trường Việt Nam. Xe có công suất toàn tải tối ưu và siêu tiết kiệm nhiên liệu.',
        imageData: {
          white: {
            '990': process.env.PUBLIC_URL + "/img/trang-1.png"
          },
          blue: {
            '990': process.env.PUBLIC_URL + "/img/xanh-1.png",
          }
        }
      },
      {
        id: 'teracostarplus',
        title: 'TERASTARPLUS',
        img: process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
        contact: 'DẪN ĐẦU XU HƯỚNG',
        description: 'Ra mắt thị trường Việt Nam vào đầu năm 2024, mẫu xe tải nhẹ máy xăng 1.25T TERA STAR PLUS (TERA STAR+) đã nhanh chóng thu hút sự quan tâm của khách hàng, tạo nên cơn sốt đặt hàng bởi hàng loạt trang bị vượt trội phân khúc.',
        imageData: {
          white: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-kin.png",
          },
          blue: {
            '1250': process.env.PUBLIC_URL + "/img/tera-star-plus-bat-xanh (1).png",
          }
        }
      },
      {
        id: 'tera190sl',
        title: 'TERA190SL-TERA245SL-TERA345SL', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'CHUYÊN GIA VẬN CHUYỂN SẢN PHẨM KÍCH THƯỚC DÀI',
        description: 'Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera24Không phải ngẫu nhiên mà 3 mẫu xe tải nhẹ Tera190SL, Tera245SL & Tera345SL phân khúc tải trọng 1.9T, 2.49T và 3.49T lại liên tục đạt doanh số dẫn đầu trong phân khúc xe tải nhẹ thùng siêu dài 6.3m. Vận hành bền bỉ, công năng linh hoạt, thiết kế hiện đại cùng những ưu đãi hấp dẫn mang lại lợi thế cạnh tranh lớn cho sản phẩm này so với các đối thủ khác cùng phân khúc.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '2.490': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
            '1.900': process.env.PUBLIC_URL + "/img/tera345sl-bat-xanh.png",
          }
        }
      },
      {
        id: 'tera350',
        title: 'TERA350', 
        img: process.env.PUBLIC_URL + "/img/tera190sl-lung.png",
        contact: 'THÙNG DÀI ĐA DỤNG',
        description: 'TERA350 với trái tim là khối động cơ ISUZU Nhật Bản đầy mạnh mẽ và bền bỉ, được thiết kế tải trọng 3.49 tấn và kích thước thùng 5.2m, là giải pháp kinh tế tối ưu, đáp ứng đa dạng nhu cầu chuyên chở của khách hàng khi di chuyển liên miền.',
        imageData: {
          white: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-white.png",
          },
          blue: {
            '3.490': process.env.PUBLIC_URL + "/img/tera350-blue.png",
          }
        }
      },
    ]
  },
];


const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e1e1e1',
      borderRadius: '50%',
      width: '25px',
      height: '25px',
      zIndex: 2,
      right: '10px',
      top: '40%',
      transform: 'translateY(-50%)',
    }}
  >
    <span style={{ color: '#fff', fontSize: '20px' }}>{''}</span>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e1e1e1',
      borderRadius: '50%',
      width: '30px',
      height: '25px',
      zIndex: 2,
      left: '10px',
      top: '40%',
      transform: 'translateY(-50%)',
    }}
  >
    <span style={{ color: '#fff', fontSize: '20px' }}>{''}</span>
  </div>
);


export default function AccordionXe() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShow = (product) => {
    navigate(`/chi-tiet/${product.id}`, { state: product });
  };


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const renderProductCard = (product, index) => (
    <div key={index} className="px-2 ">
      <div
        className="inner-product"
        onClick={() => handleShow(product)}
        style={{
          cursor: 'pointer',
          border: '1px solid #eee',
          borderRadius: '8px',
          background: '#fff',
          height: '100%',
        }}
      >
        <div className="inner-image text-center">
          <img
            src={product.img}
            alt={product.title}
            className="img-fluid"
            style={{ height: '150px', objectFit: 'contain' }}
          />
        </div>
        <div className="inner-tittle text-center mt-2">
          <p className="fw-bold">{product.title}</p>
          <p className="inner-contact text-muted">{product.contact}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="section-loaixe">
      <div className="container-xl">
        {productData.map((item, idx) => (
          <div key={idx} className="product-slider mb-5">
            <h3 className="mb-3 text-danger">{item.group}</h3>

            {isMobile ? (
              <Slider {...sliderSettings}>
                {item.products.map((product, index) => renderProductCard(product, index))}
              </Slider>
            ) : (
              <div className="row">
                {item.products.map((product, index) => (
                  <div key={index} className="col-md-4 col-lg-3">
                    {renderProductCard(product, index)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}