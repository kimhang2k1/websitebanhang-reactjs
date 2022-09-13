import { Link } from "react-router-dom";

function ItemMenuMobile({ c }) {
  return (
    <li>
      <Link to={`/product/${c}`}>{c}</Link>
    </li>
  );
}

export default ItemMenuMobile;
