import { useData } from "../../context/ContextData";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartMobile from "./CartMobile/CartMobile";
import ItemCart from "./ItemCart/ItemCart";
import ProductFavourite from "./ProductFavourite/ProductFavourite";
import TitleCart from "./TitleCart/TitleCart";
import TotalCart from "./TotalCart/TotalCart";

function Cart() {
  const { cart } = useData();
  if (cart.length === 0) {
    return (
      <>
        <CartEmpty />
        <ProductFavourite />
      </>
    );
  }
  return (
    <>
      <div id="container-cart">
        <div className="nav-cart">
          <h3>GIỎ HÀNG CỦA BẠN</h3>
          <div className="list-product-cart">
            <TitleCart />
            <div className="list-cart">
              {cart.map((c, index) => {
                return <ItemCart key={index} c={c} />;
              })}
            </div>
          </div>
          <div className="list-product-cart-mobile">
            <CartMobile />
          </div>
          <TotalCart />
        </div>
      </div>
    </>
  );
}

export default Cart;
