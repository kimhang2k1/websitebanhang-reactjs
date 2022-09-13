import { useData } from "../../../../../context/ContextData";
import Item from "./Item/Item";

function ListItem({ menuBar }) {
  const { category } = useData();
  return (
    <div className={menuBar}>
      <ul className="sub-menu w-full">
        <div className="category">
          <ul>
            {category.map((item, index) => {
              return <Item key={index} item={item} />;
            })}
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default ListItem;
