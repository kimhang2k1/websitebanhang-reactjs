function TwoBanner() {
  return (
    <div className="list-banner">
      <div className="two-banner">
        <div className="item-banner-1 ">
          <a href="{}" className="img-banner">
            <img
              src="http://theme.hstatic.net/200000389561/1000743597/14/two_banner_image_1_grande.jpg?v=220"
              alt="Mật ong"
            />
          </a>
          <div className="content-banner">
            <p>Mật ong rừng</p>
            <h3>
              Mật ong rừng <br />
              <span>Giảm giá 25%</span>
            </h3>
            <a href="{}" className="btn-buy">
              MUA NGAY
            </a>
          </div>
        </div>

        <div className="item-banner-1 orginal">
          <a href="{}" className="img-banner">
            <img
              src="//theme.hstatic.net/200000389561/1000743597/14/two_banner_image_2_grande.jpg?v=220"
              alt="Nước uống detox"
            />
          </a>
          <div className="content-banner">
            <p>Đồ uống organic</p>
            <h3>
              Giảm giá 30% <br />
              <span>Cho Đơn Hàng Của Bạn</span>
            </h3>
            <a href="{}" className="btn-buy">
              MUA NGAY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoBanner;
