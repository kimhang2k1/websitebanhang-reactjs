import { useData } from "../../../context/ContextData";

function CartMobile() {
  const { cart, decrease, increase, deleteCart } = useData();
  return (
    <div className="list-cart">
      {cart.map((c, index) => {
        return (
          <div className="item-cart" key={index}>
            <div className="information_product_cart_mobile">
              <img src={c.image} alt="" />
            </div>
            <div className="row_cart_mobile">
              <div className="infor_cart_mobile">
                <div className="name_cart">
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
                <div className="amount_cart_mobile">
                  <button onClick={() => decrease(c)}> - </button>
                  <input value={c.quantity} />
                  <button onClick={() => increase(c)}> + </button>
                </div>
              </div>
              <div className="action">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteCart(c)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CartMobile;
