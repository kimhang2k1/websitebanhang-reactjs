import Footer from "../../component/ComponentShared/Footer/Footer";
import Header from "../../component/ComponentShared/Header/Header";
import ProductDetail from "../../component/ProductDetail/ProductDetail";
import ProductSimilar from "../../component/ProductDetail/ProductSimilar/ProductSimilar";
import "./product_detail.css";
import "./productdetail_responsive.css";
function PageProductDetail() {
  return (
    <div className="scroll-fixed">
      <Header />
      <ProductDetail />
      <ProductSimilar />
      <Footer />
    </div>
  );
}

export default PageProductDetail;
