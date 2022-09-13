import { useParams } from "react-router-dom";
import { useData } from "../../context/ContextData";
import PopUp from "../PopUp/PopUp";
import ItemProductDetail from "./ItemProductDetail/ItemProductDetail";
import TabReviewProduct from "./TabReviewProduct/TabReviewProduct";

function ProductDetail() {
  const { id } = useParams();
  const { product, show } = useData();
  const products = product.filter((f) => f.id === Number(id));
  return (
    <>
      <div className="bread-crumb">
        <div className="nav-bread-crumb">
          <ul>
            <li>
              Trang chủ <span>&nbsp;/&nbsp;</span>
            </li>
            <li>
              {products.map((pro) => {
                return pro.title;
              })}
            </li>
          </ul>
        </div>
      </div>
      <div id="product-detail">
        <div className="nav-product-detail">
          {products.map((item, index) => {
            return <ItemProductDetail key={index} item={item} />;
          })}
          <TabReviewProduct products={products} />
        </div>
      </div>
      <PopUp triggle={show} />
    </>
  );
}

export default ProductDetail;
