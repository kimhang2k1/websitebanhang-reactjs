import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderTop from "./HeaderTop/HeaderTop";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Header() {
  return (
    <div>
      <HeaderTop />
      <div className="header w-full py-3 bg-white">
        <div className="nav-header w-4/5 m-auto flex items-center justify-between">
          <div className="icon-menu hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
          <Logo />
          <Menu />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
}

export default Header;
