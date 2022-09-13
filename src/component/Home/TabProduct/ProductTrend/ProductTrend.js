import { Link } from "react-router-dom";
import { useData } from "../../../../context/ContextData";

function ProductTrend() {
  const { product, btnAddToCart } = useData();
  const products = product.slice(0, 10);

  return (
    <div className="collection-product">
      <div className="list-all-product">
        {products.map((item) => {
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
        })}
      </div>
    </div>
  );
}

export default ProductTrend;
