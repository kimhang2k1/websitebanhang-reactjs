import { Link } from "react-router-dom";
import { useData } from "../../../../../context/ContextData";
import ItemMenuMobile from "./ItemMenuMobile/ItemMenuMobile";

function ListMenuMobile() {
  const { category } = useData();
  return (
    <div className="list-menu-mobile">
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li className="product-menu-mob">
          <Link to="/product">Sản Phẩm</Link>
          <button
            className="btn-plus"
            aria-expanded="false"
            data-toggle="collapse"
            data-target="#menu-lv2"
          >
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-minus"></i>
          </button>
          <ul className="collapse" id="menu-lv2">
            {category.map((c, index) => {
              return <ItemMenuMobile key={index} c={c} />;
            })}
          </ul>
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
