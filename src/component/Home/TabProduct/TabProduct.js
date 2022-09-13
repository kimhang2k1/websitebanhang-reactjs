import ProductTrend from "./ProductTrend/ProductTrend";
import TitleCategoryProduct from "./TittleCategoryProduct/TittleCategoryProduct";
import TitleProduct from "./TittleProduct/TittleProduct";

function TabProduct() {
  return (
    <div className="list-product">
      <div className="nav-list-product">
        <TitleProduct title="SẢN PHẨM CHÚNG TÔI" />
        <TitleCategoryProduct />
        <ProductTrend />
      </div>
    </div>
  );
}

export default TabProduct;
