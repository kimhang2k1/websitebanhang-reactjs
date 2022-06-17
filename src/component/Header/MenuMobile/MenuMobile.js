import DrawerHeader from "./DrawerHeader/DrawerHeader";

import ListMenuMobile from "./ListMenuMobile/ListMenuMobile";

function MenuMobile() {
  const closeMenu = () => {
    var menuMobile = document.getElementsByClassName("menu-mobile")[0];
    var fullscreen = document.getElementsByClassName("full-screen-opacity")[0];
    menuMobile.classList.toggle("active");
    menuMobile.style.display = "none";
    fullscreen.style.display = "none";
  };
  return (
    <div className="full-screen-opacity">
      <div className="menu-mobile">
        <DrawerHeader />
        <ListMenuMobile />
        <div className="close-menu">
          <span>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </span>
        </div>
      </div>
    </div>
  );
}
export default MenuMobile;
