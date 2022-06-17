import ItemChildren from "./ItemChildren/ItemChildren";

function ItemMenuMobile() {
  return (
    <ul className="collapse" id="menu-lv2">
      <li>
        Trái cây
        <button
          className="btn-plus-cl"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#fruitone"
        >
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-minus"></i>
        </button>
        <ItemChildren number="one" />
      </li>
      <li>
        Rau củ
        <button
          className="btn-plus-cl"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#fruittwo"
        >
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-minus"></i>
        </button>
        <ItemChildren number="two" />
      </li>
      <li>
        Thịt
        <button
          className="btn-plus-cl"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#fruitthree"
        >
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-minus"></i>
        </button>
        <ItemChildren number="three" />
      </li>
      <li style={{ borderBottom: "0", paddingBottom: "0" }}>
        Thực phẩm khô
        <button
          className="btn-plus-cl"
          aria-expanded="false"
          data-toggle="collapse"
          data-target="#fruitfour"
        >
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-minus"></i>
        </button>
        <ItemChildren number="four" />
      </li>
    </ul>
  );
}

export default ItemMenuMobile;
