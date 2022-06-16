import ProductTrend from "../TabProduct/ProductTrend/ProductTrend";
import TitleProduct from "../TabProduct/TittleProduct/TittleProduct";

function ProductNew() {
  return (
    <div className="list-product">
      <div className="nav-list-product">
        <TitleProduct title="SẢN PHẨM MỚI" />
        <ProductTrend />
      </div>
    </div>
  );
}

export default ProductNew;
