import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="ui_cart_empty">
      <div className="empty">
        <img
          src="https://theme.hstatic.net/200000525857/1000897147/14/cart_empty_background.png?v=126"
          alt=""
          width="289"
          height="152"
        />
        <h4>"Hổng" có gì trong giỏ hết</h4>
        <p>Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
        <Link to="/">
          <button>Mua sắm ngay</button>
        </Link>
      </div>
    </div>
  );
}
export default CartEmpty;
