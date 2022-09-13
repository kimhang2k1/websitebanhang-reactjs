import { useState } from "react";
import { useData } from "../../../context/ContextData";

function ItemProductDetail({ item }) {
  const [number, setNumber] = useState(1);
  const { addToCart } = useData();
  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };
  const rate = item["rating"];
  return (
    <div className="information-detail-product">
      <div className="image-product-main">
        <img src={item.image} alt="" />
      </div>
      <div className="content-infor-product">
        <div className="name-infor-product">
          <p>{item.title}</p>
        </div>
        <div className="review-infor-product">
          <p className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>

          <p>Đã bán {rate.count}</p>
        </div>
        <div className="price-infor-product">
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(item.price * 23000)}
          </span>
        </div>
        <div className="product-promotion">
          <h3>
            <img
              src="//theme.hstatic.net/200000525857/1000897147/14/icon-product-promotion.png?v=126"
              width="22"
              height="22"
              alt="gift"
            />
            KHUYẾN MÃI - ƯU ĐÃI
          </h3>
          <ul>
            <li>
              Nhập mã EGANY thêm 5% đơn hàng <span>Sao chép</span>
            </li>
            <li>Đồng giá Ship toàn quốc 25.000đ</li>
            <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
            <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
            <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
          </ul>
        </div>
        <div className="btn-product-detail">
          <div className="amount-product">
            <button onClick={decreaseNumber}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <input type="text" value={number} />
            <button onClick={increaseNumber}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="btn-add-product">
          <button onClick={() => addToCart(item, number)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemProductDetail;
