function TwoBanner() {
  return (
    <div className="list-banner">
      <div className="two-banner">
        <div className="item-banner-1 ">
          <a href="{}" className="img-banner">
            <img
              src="https://hstatic.net/775/1000119775/1000165422/b1.jpg?v=34"
              alt="Mật ong"
            />
          </a>
          {/* <div className="content-banner">
            <p>Trang sức</p>
            <h3>
              Trang sức vàng
              <br />
              <span>Giảm giá 25%</span>
            </h3>
            <a href="{}" className="btn-buy">
              MUA NGAY
            </a>
          </div> */}
        </div>

        <div className="item-banner-1 orginal">
          <a href="{}" className="img-banner">
            <img
              src="https://theme.hstatic.net/200000301562/1000687964/14/categorybanner_2_img.jpg?v=3265"
              alt="Nước uống detox"
            />
          </a>
          {/* <div className="content-banner">
            <p>Thời trang</p>
            <h3>
              Giảm giá 30% <br />
              <span>Cho Đơn Hàng Của Bạn</span>
            </h3>
            <a href="{}" className="btn-buy">
              MUA NGAY
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TwoBanner;
