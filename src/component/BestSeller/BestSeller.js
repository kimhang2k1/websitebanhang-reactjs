import ItemProductTrend from "../TabProduct/ProductTrend/ItemProductTrend/ItemProductTrend";
import TitleProduct from "../TabProduct/TittleProduct/TittleProduct";

function BestSeller() {
  return (
    <div className="list-product">
      <div className="nav-list-product">
        <TitleProduct title="BEST SELLER" />
        <div className="collection-product-trend">
          <div className="list-product-trend">
            <ItemProductTrend />
            <ItemProductTrend />
            <ItemProductTrend />
            <ItemProductTrend />
            <ItemProductTrend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
