import ListItem from "./ListItem/ListItem";

function Menu() {
  return (
    <div className="nav-menu">
      <ul className="menu m-auto flex justify-between">
        <li className="active" tab-index="0">
          Trang chủ
        </li>
        <li className="has-submenu">
          Sản phẩm &nbsp;
          <i
            className="fa-solid fa-chevron-down"
            style={{ fontSize: "13px" }}
          ></i>
          <ListItem />
        </li>
        <li className="has-listnew" tab-index="0">
          Blog &nbsp;
          <i
            className="fa-solid fa-chevron-down"
            style={{ fontSize: "13px" }}
          ></i>
          <div className="list-news">
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
