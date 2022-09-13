import { Link } from "react-router-dom";
import { useData } from "../../../../../context/ContextData";

function ItemProductTrend({ item }) {
  const { btnAddToCart } = useData();
  return (
    <div className="column-product" key={item.id}>
      <div className="item-product">
        <div className="img-product">
          <Link to={`/product/category=${item.category}&id=${item.id}`}>
            <img src={item.image} width={"260"} alt="bắp" />
          </Link>
          <div className="icon-buy-product">
            <div className="btn-add-cart">
              <button onClick={() => btnAddToCart(item, 1)}>
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
            <div className="btn-preview-product">
              <button>
                <i className="fa fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="name-product">
          <Link to={`/product/category=${item.category}&id=${item.id}`}>
            <span>{item.title}</span>
          </Link>
        </div>
        <div className="price-product">
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(item.price * 23000)}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ItemProductTrend;
