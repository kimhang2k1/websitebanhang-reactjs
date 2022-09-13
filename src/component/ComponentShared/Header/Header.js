import { useEffect, useState } from "react";
import HeaderRight from "../Header/HeaderRight/HeaderRight";
import HeaderTop from "../Header/HeaderTop/HeaderTop";
import Logo from "../Header/Logo/Logo";
import Menu from "../Header/Menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

function Header() {
  const openMenu = () => {
    var menuMobile = document.getElementsByClassName("menu-mobile")[0];
    var fullscreen = document.getElementsByClassName("full-screen-opacity")[0];

    menuMobile.style.display = "block";
    fullscreen.style.display = "block";
  };
  // window.onscroll = () => {
  //   var header = document.getElementsByClassName("header")[0];
  //   var menu = document.getElementsByClassName("menu-bar")[0];
  //   var news = document.getElementsByClassName("list-news")[0];
  //   var sticky = header.offsetTop;
  //   var sticky2 = menu.offsetTop;
  //   var sticky3 = news.offsetTop;
  //   if (
  //     window.pageYOffset > sticky &&
  //     window.pageYOffset > sticky2 &&
  //     window.pageYOffset > sticky3
  //   ) {
  //     header.classList.add("sticky");
  //     menu.classList.add("menu-bar-cl");
  //     news.classList.add("list-news-cl");
  //   } else {
  //     header.classList.remove("sticky");
  //     menu.classList.remove("menu-bar-cl");
  //     news.classList.remove("list-news-cl");
  //   }
  // };
  const [sticky, setSticky] = useState("");
  const [stickyMenu, setStickyMenu] = useState("");
  const [stickyMenuNews, setStickyMenuNews] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    window.addEventListener("scroll", isStickyMenu);
    window.addEventListener("scroll", isStickyMenuNews);
    return () => {
      window.removeEventListener("scroll", isStickyMenu);
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("scroll", isStickyMenuNews);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "sticky" : "";
    setSticky(stickyClass);
  };
  const isStickyMenu = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "menu-bar-cl" : "";
    setStickyMenu(stickyClass);
  };
  const isStickyMenuNews = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "list-news-cl" : "";
    setStickyMenuNews(stickyClass);
  };
  const classes = `header w-full py-3 bg-white ${sticky}`;
  const menuBar = `menu-bar ${stickyMenu}`;
  const menuNews = `list-news ${stickyMenuNews}`;
  return (
    <div>
      <HeaderTop />
      <div className={classes}>
        <div className="nav-header w-4/5 m-auto flex items-center justify-between">
          <div className="icon-menu">
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
          </div>
          <Logo />
          <Menu menuBar={menuBar} menuNews={menuNews} />
          <HeaderRight />
        </div>
      </div>
      <MenuMobile />
    </div>
  );
}

export default Header;
