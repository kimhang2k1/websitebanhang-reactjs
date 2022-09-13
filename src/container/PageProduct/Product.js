import BreadCrumb from "../../component/ComponentShared/BreadCrumb/BreadCrumb";
import Footer from "../../component/ComponentShared/Footer/Footer";
import Header from "../../component/ComponentShared/Header/Header";
import AllProduct from "../../component/Product/AllProduct/AllProduct";
import BannerProduct from "../../component/Product/BannerProduct/BannerProduct";
import "./product.css";
import "./product_responsive.css";
function Product() {
  return (
    <div className="scroll-fixed">
      <Header />
      <BreadCrumb content="Tất cả sản phẩm" />
      <BannerProduct />
      <div id="product">
        <div className="nav-product">
          <AllProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
