import ItemMenuMobile from "./ItemMenuMobile/ItemMenuMobile";

function ListMenuMobile() {
  return (
    <div className="list-menu-mobile">
      <ul>
        <li>Trang chủ</li>
        <li className="product-menu-mob">
          Sản phẩm
          <button
            className="btn-plus"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#menu-lv2"
          >
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-minus"></i>
          </button>
          <ItemMenuMobile />
        </li>
        <li className="news-mob">
          Blog
          <button
            className="btn-plus"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#news"
          >
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-minus"></i>
          </button>
          <ul className="collapse" id="news">
            <li
              style={{
                borderBottom: "0",
                paddingRight: "0",
                paddingBottom: "0",
              }}
            >
              Tin tức
            </li>
          </ul>
        </li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
      </ul>
    </div>
  );
}

export default ListMenuMobile;
