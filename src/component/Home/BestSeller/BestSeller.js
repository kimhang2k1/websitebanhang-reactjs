import { useData } from "../../../context/ContextData";
import ItemProductTrend from "../TabProduct/ProductTrend/ItemProductTrend/ItemProductTrend";
import TitleProduct from "../TabProduct/TittleProduct/TittleProduct";

function BestSeller() {
  const { product } = useData();

  const products = product.slice(0, 5);
  return (
    <div className="list-product">
      <div className="nav-list-product">
        <TitleProduct title="BEST SELLER" />
        <div className="collection-product">
          <div className="list-all-product">
            {products.map((item, index) => {
              return <ItemProductTrend key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
