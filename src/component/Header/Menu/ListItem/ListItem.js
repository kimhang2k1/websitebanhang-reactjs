import Item from "./Item/Item";

function ListItem() {
  return (
    <div className="menu-bar">
      <ul className="sub-menu w-full">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
}

export default ListItem;
