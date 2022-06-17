import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderTop from "./HeaderTop/HeaderTop";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

function Header() {
  const openMenu = () => {
    var menuMobile = document.getElementsByClassName("menu-mobile")[0];
    var fullscreen = document.getElementsByClassName("full-screen-opacity")[0];

    menuMobile.style.display = "block";
    fullscreen.style.display = "block";
  };

  return (
    <div>
      <HeaderTop />
      <div className="header w-full py-3 bg-white">
        <div className="nav-header w-4/5 m-auto flex items-center justify-between">
          <div className="icon-menu">
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
          </div>
          <Logo />
          <Menu />
          <HeaderRight />
        </div>
      </div>
      <MenuMobile />
    </div>
  );
}

export default Header;
