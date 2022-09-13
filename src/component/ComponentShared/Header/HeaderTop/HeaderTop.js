function HeaderTop() {
  return (
    <>
      <div className="header-top w-full text-white py-2">
        <div className="site-header-top w-4/5 m-auto flex items-center justify-between">
          <div className="hotline">
            <span>Hotline : 1900.636.099</span>
          </div>
          <div className="free-ship text-center">
            <span>Miễn phí ship đơn hàng 500.000đ</span>
          </div>
          <div className="icon-social-network flex justify-end space-x-12">
            <div>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
