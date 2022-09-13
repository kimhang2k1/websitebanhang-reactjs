import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <li>
      <Link to={`/product/${item}`}>{item}</Link>
    </li>
  );
}

export default Item;
