import { useData } from "../../../context/ContextData";

function ListProductOrder() {
  const { cart, paymentOrder } = useData();
  const totalProduct = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container_list_order">
      <h3>Đơn hàng (2 sản phẩm)</h3>
      <div className="list_product_order">
        {cart.map((c, index) => {
          return (
            <div className="item_product_order" key={index}>
              <div className="infor_order">
                <div className="image_product_order">
                  <img src={c.image} alt="" />
                  <span>{c.quantity}</span>
                </div>
                <div className="name_product_order">
                  <p>{c.title}</p>
                </div>
              </div>
              <div className="price_product_order">
                <span>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(c.price * 23000)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total_line_table">
        <div className="provisional_product">
          <span>Tạm tính</span>
          <span>
            {" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(totalProduct * 23000)}
          </span>
        </div>
        <div className="shipping_fee">
          <span>Phí vận chuyển</span>
          <span>40.000đ</span>
        </div>
      </div>
      <div className="total_summary">
        <span>Tổng tiền</span>
        <span className="price_total_order">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(totalProduct * 23000 + 40000)}
        </span>
      </div>
      <div className="footer_line_order">
        <div className="return_to_cart">
          <p>
            <i className="fa-solid fa-angle-left"></i> &nbsp; Quay về giỏ hàng
          </p>
        </div>
        <div className="btn_checkout">
          <button type="submit" onClick={() => paymentOrder()}>
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListProductOrder;
