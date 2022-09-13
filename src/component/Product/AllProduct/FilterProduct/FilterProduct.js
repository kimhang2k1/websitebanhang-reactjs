import { useData } from "../../../../context/ContextData";

function FilterProduct() {
  const { sortPrice } = useData();

  return (
    <div className="filter-product">
      <div className="sort-by-product">
        <div className="filter-by-price">
          <span>Sắp xếp theo :</span>
          <select onChange={sortPrice}>
            <option value="asc">Từ thấp đến cao</option>
            <option value="desc">Từ cao đến thấp</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
