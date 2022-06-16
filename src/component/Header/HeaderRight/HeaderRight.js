import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";

function HeaderRight() {
  return (
    <div className="header-right flex justify-end space-x-4">
      <Search />
      <Account />
      <Cart />
    </div>
  );
}

export default HeaderRight;
