function BreadCrumb({ content }) {
  return (
    <>
      <div className="bread-crumb">
        <div className="nav-bread-crumb">
          <ul>
            <li>
              Trang chủ <span>&nbsp;/&nbsp;</span>
            </li>
            <li>{content} </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
