import { Link } from "react-router-dom";
import { useData } from "../../../context/ContextData";

function SuccessNotification() {
  const { closeModal } = useData();
  return (
    <div className="success">
      <div className="pop-up">
        <div className="add-cart-success">
          <div className="icon-sucess">
            <img
              src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png"
              alt=""
            />
          </div>
          <div className="content-add-cart">
            <h3>Thông báo</h3>
            <p>Thêm giỏ hàng thành công</p>
            <Link to="/cart">
              <button onClick={closeModal}>Xem giỏ hàng</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessNotification;
