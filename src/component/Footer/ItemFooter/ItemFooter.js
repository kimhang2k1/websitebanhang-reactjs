function ItemFooter() {
  return (
    <>
      <div className="item-footer-1">
        <div className="title-footer">
          <span>Giới Thiệu</span>
          <hr />
        </div>
        <div className="information-wandave">
          <div className="introduce-wandave">
            <span>
              Thực phẩm Organic Wandave chuyên cung cấp các thực phẩm tươi sạch,
              giá cả phải chăng. Đạt tiêu chuẩn chất lượng
            </span>
          </div>
          <ul>
            <li>
              <i className="fa fa-map-marker"></i> &nbsp; 59A Âu cơ, Phường 14,
              Quận 11, TP. HCM
            </li>
            <li>
              <i className="fa fa-phone"></i> &nbsp; 0385942049
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> &nbsp; wandave@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="item-footer-2">
        <div className="title-footer">
          <span>Liên Kết</span>
          <hr />
        </div>
        <div className="information-wandave">
          <ul>
            <li>Tìm kiếm</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Hệ thống cửa hàng</li>
          </ul>
        </div>
      </div>
      <div className="item-footer-3">
        <div className="title-footer">
          <span>Chính sách</span>
          <hr />
        </div>
        <div className="information-wandave">
          <ul>
            <li>Chính sách thanh toán</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
          </ul>
        </div>
      </div>
      <div className="item-footer-4">
        <div className="title-footer">
          <span>Panpage</span>
          <hr />
        </div>
        <div className="information-wandave">
          <img src="./img/fb.png" alt="fb" />
        </div>
      </div>
      <div className="item-footer-5">
        <div className="title-footer">
          <span>Đăng ký nhận khuyến mãi</span>
          <hr />
        </div>
        <div className="information-wandave">
          <div className="content-contact">
            <span>Hãy là người đầu tiên nhận khuyến mãi lớn!</span>
          </div>
          <div className="input-contact-email">
            <input type="text" placeholder="Email" />
            <button>ĐĂNG KÝ</button>
          </div>
          <div className="social-network"></div>
        </div>
      </div>
    </>
  );
}

export default ItemFooter;
