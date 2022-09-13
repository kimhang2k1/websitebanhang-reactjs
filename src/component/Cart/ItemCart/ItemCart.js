import { useData } from "../../../context/ContextData";

function ItemCart({ c }) {
  const { increase, decrease, deleteCart } = useData();

  return (
    <div className="item-cart">
      <div className="information-product-cart">
        <img src={c.image} alt="" />
        <p>{c.title}</p>
      </div>
      <div className="price_cart">
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(c.price * 23000)}
        </span>
      </div>
      <div className="amount_cart">
        <button onClick={() => decrease(c)}> - </button>
        <input value={c.quantity} />
        <button onClick={() => increase(c)}> + </button>
      </div>
      <div className="total_cart">
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(c.price * 23000 * c.quantity)}
        </span>
      </div>
      <div className="action">
        <i className="fa-solid fa-trash" onClick={() => deleteCart(c)}></i>
      </div>
    </div>
  );
}

export default ItemCart;
