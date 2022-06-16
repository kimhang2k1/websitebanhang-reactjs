function ItemProductTrend() {
  return (
    <div className="column-product">
      <div className="item-product-trend">
        <div className="img-product-trend">
          <img
            src="https://product.hstatic.net/200000389561/product/bap_e65d0c572b3e45aea2aecc9e97ccd362_8e1dd0fba1844b9db41550ccbd42acc8_large.jpg"
            width={"260"}
            alt="bắp"
          />
          <div className="icon-buy-product">
            <div className="btn-add-cart">
              <button>
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
            <div className="btn-preview-product">
              <button>
                <i className="fa fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="name-product-trend">
          <span>Bắp mỹ</span>
        </div>
        <div className="price-product-trend">
          <span>35.000₫</span>
        </div>
      </div>
    </div>
  );
}
export default ItemProductTrend;
