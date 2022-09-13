import { useState } from "react";

function TabReviewProduct({ products }) {
  const [tabCurrent, setTabCurrent] = useState(1);
  const handleTab = (tab) => {
    setTabCurrent(tab);
  };
  return (
    <div className="tab-review-product">
      <div className="tab-title tab-title-2">
        <div
          className={tabCurrent === 1 ? "tab tab_active" : "tab"}
          onClick={() => handleTab(1)}
        >
          MÔ TẢ SẢN PHẨM
        </div>
        <div
          className={tabCurrent === 2 ? "tab tab_active" : "tab"}
          onClick={() => handleTab(2)}
        >
          CHÍNH SÁCH THANH TOÁN
        </div>
        <div
          className={tabCurrent === 3 ? "tab tab_active" : "tab"}
          onClick={() => handleTab(3)}
        >
          CHÍNH SÁCH ĐỔI TRẢ
        </div>
        <div
          className={tabCurrent === 4 ? "tab tab_active" : "tab"}
          onClick={() => handleTab(4)}
        >
          BÌNH LUẬN
        </div>
      </div>
      <div className="tab-content">
        <div
          className={tabCurrent === 1 ? "content_active" : "decription-product"}
        >
          {products.map((pro, index) => {
            return <p key={index}>{pro.description}</p>;
          })}
        </div>
        <div className={tabCurrent === 2 ? "content_active" : "payment-policy"}>
          <p>
            <strong>1. Các hình thức thanh toán</strong>
          </p>
          <p>
            Khách hàng có thể lựa chọn các hình thức thanh toán sau để thanh
            toán cho đơn hàng của mình khi mua sản phẩm trên website wandave
          </p>
          <p>
            1.1. Thanh toán trả trước: là hình thức thanh toán trực tuyến mà
            khách hàng sử dụng để thanh toán cho đơn hàng, bao gồm:​​
          </p>
          <ul>
            <li>Thẻ ATM (Thẻ ghi nợ/thanh toán/trả trước nội địa);</li>
            <li>Thẻ thanh toán quốc tế, thẻ tín dụng.</li>
          </ul>
          <p>
            1.2. Thanh toán trả sau: là hình thức mà khách hàng sử dụng để thanh
            toán cho đơn hàng khi Nam An Market giao hàng, bao gồm:
          </p>
          <ul>
            <li>Tiền mặt</li>
            <li>
              Thẻ ATM (thẻ ngân hàng, thẻ thanh toán nội địa), thẻ tín dụng và
              thẻ thanh toán quốc tế (Visa, Master, JCB, UnionPay…) qua máy quẹt
              thẻ (POS, mPOS) của Ngân hàng
            </li>
          </ul>
        </div>
        <div className={tabCurrent === 3 ? " content_active" : "return-policy"}>
          <p>
            <strong>1. Điều kiện đổi trả</strong>
          </p>
          <p>
            Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/
            trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường
            hợp sau:
          </p>
          <ul>
            <li>
              Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như
              trên website tại thời điểm đặt hàng.
            </li>
            <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
            <li>
              Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể
              vỡ…
            </li>
          </ul>
          <p>
            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự
            thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
          </p>
          <p>
            <strong>
              2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
            </strong>
          </p>
          <ul>
            <li>
              <strong>Thời gian thông báo đổi trả</strong>:&nbsp;trong vòng 48h
              kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ
              kiện, quà tặng hoặc bể vỡ.
            </li>
            <li>
              <strong>Thời gian gửi chuyển trả sản phẩm</strong>: trong vòng 14
              ngày kể từ khi nhận sản phẩm.
            </li>
            <li>
              <strong>Địa điểm đổi trả sản phẩm</strong>: Khách hàng có thể mang
              hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển
              qua đường bưu điện.
            </li>
          </ul>
          <p>
            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên
            quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường
            dây chăm sóc khách hàng của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
}
export default TabReviewProduct;
