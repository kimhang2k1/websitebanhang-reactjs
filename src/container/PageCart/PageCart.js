import Cart from "../../component/Cart/Cart";
import BreadCrumb from "../../component/ComponentShared/BreadCrumb/BreadCrumb";
import Footer from "../../component/ComponentShared/Footer/Footer";
import Header from "../../component/ComponentShared/Header/Header";
import "./cart.css";
import "./cart_responsive.css";
function PageCart() {
  return (
    <>
      <Header />
      <BreadCrumb content="Giỏ hàng của bạn" />
      <Cart />
      <Footer />
    </>
  );
}
export default PageCart;
