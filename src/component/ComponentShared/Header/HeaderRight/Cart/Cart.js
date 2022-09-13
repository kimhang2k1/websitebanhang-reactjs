import { Link } from "react-router-dom";
import { useData } from "../../../../../context/ContextData";

function Cart() {
  const { cart } = useData();

  return (
    <>
      <div className="icon-cart">
        <Link to="/cart">
          <img
            src="https://theme.hstatic.net/200000389561/1000743597/14/shopping-cart.svg?v=220"
            alt=""
            height={"24"}
            width={"24"}
          />
        </Link>
        <span>{cart.length}</span>
        <div className="sub_cart">
          {cart.length === 0 ? (
            <div className="hover_empty_cart">
              <img
                className="no_cart"
                src="https://theme.hstatic.net/200000525857/1000897147/14/cart_empty_background.png?v=126"
                alt=""
              />
              <p className="content_cart">Chưa có sản phẩm</p>
            </div>
          ) : (
            <div className="hover-cart">
              <h4>Giỏ hàng của bạn </h4>
              {cart.map((c, index) => {
                return (
                  <div className="product_in_cart" key={index}>
                    <div className="left_cart">
                      <div className="img_in_cart">
                        <img src={c.image} alt="" />
                      </div>
                      <div className="name_in_cart">
                        <p>{c.title}</p>
                      </div>
                    </div>

                    <div className="price_in_cart">
                      <p>
                        {" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(c.price * 23000)}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="end_cart">
                <p>{cart.length} sản phẩm trong giỏ hàng </p>
                <Link to="/cart">
                  <button>Xem giỏ hàng</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
