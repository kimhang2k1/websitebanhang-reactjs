import ListItem from "./ListItem/ListItem";
import { Link } from "react-router-dom";

function Menu({ menuBar, menuNews }) {
  return (
    <div className="nav-menu">
      <ul className="menu m-auto flex justify-between">
        <Link to="/">
          <li className="active" tab-index="0">
            Trang chủ
          </li>
        </Link>

        <Link to="/product">
          <li className="has-submenu">
            Sản phẩm &nbsp;
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "13px" }}
            ></i>
            <ListItem menuBar={menuBar} />
          </li>
        </Link>
        <li className="has-listnew" tab-index="0">
          Blog &nbsp;
          <i
            className="fa-solid fa-chevron-down"
            style={{ fontSize: "13px" }}
          ></i>
          <div className={menuNews}>
            <ul className="news">
              <li>Tin tức</li>
            </ul>
          </div>
        </li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
      </ul>
    </div>
  );
}

export default Menu;
