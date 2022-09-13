import { Link } from "react-router-dom";
import { useData } from "../../../context/ContextData";

function TotalCart() {
  const { cart } = useData();
  const totalCart = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="footer-cart">
      <div className="continue_buy_product">
        <Link to="/product">
          <p>
            <i className="fa-solid fa-angle-left"></i> &nbsp; Tiếp tục mua hàng
          </p>
        </Link>
      </div>
      <div className="checkout">
        <div className="total-product">
          <div className="sub_total">
            <p>Tổng tiền</p>
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalCart * 23000)}
            </span>
          </div>
          <div className="btn_check_out">
            <Link to="/checkout">
              <button>Thanh Toán</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TotalCart;
