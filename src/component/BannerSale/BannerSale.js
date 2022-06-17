function BannerSale() {
  return (
    <div className="banner-sale-30">
      <div className="img-banner-sale">
        <img
          className="banner-desktop"
          src="http://theme.hstatic.net/200000389561/1000743597/14/banner-desktop.jpg?v=220"
          alt="giảm-giá"
        />
        <img
          className="banner-mobile"
          src="//theme.hstatic.net/200000389561/1000743597/14/banner-mobile.jpg?v=220"
          alt="banner-mobile"
        />
        <div className="content-banner-sale">
          <p>Giảm giá cuối mùa 2022 lên tới 30%</p>
          <h3>
            Stock is limited. Order now to avoid <br />
            disappointment.
          </h3>
          <button>Xem ngay</button>
        </div>
      </div>
    </div>
  );
}

export default BannerSale;
