function ItemChildren(props) {
  return (
    <div className="collapse" id={`fruit${props.number}`}>
      <p>Dưa lưới</p>
      <p>Dâu tây</p>
      <p>Ổi xanh</p>
      <p style={{ borderBottom: "0" }}>Nho tím không hạt</p>
    </div>
  );
}

export default ItemChildren;
