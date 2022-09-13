import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useData } from "../../context/ContextData";

function Payment() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all", criteriaMode: "all" });
  const [showNotice, setShowNotice] = useState(false);
  const [errorCity, setErrorCity] = useState(null);
  const {
    numberPhone,
    email,
    fullname,
    address,
    city,
    errorPhone,
    error,
    district,
    village,
    getAddress,
    getFullName,
    handleChange,
    handleChangePhone,
    errorFullName,
    getCurrentCity,
    getCurrentDistrict,
    getCurrentVillage,
    disabledDistrict,
    disabledVillage,
    showFeeShipping,
    setPayment,
    payment,
    citySelected,
    districtSelected,
    villageSelected,
    cart,
    setCart,
  } = useData();

  const showContentBox = () => {
    setShowNotice(true);
  };
  const totalProduct = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const paymentOrder = () => {
    let cloneCart = [...cart];
    let clonePayment = [...payment];
    const ID = 1;
    if (villageSelected === "") {
      return;
    }
    setPayment([
      {
        id: ID + 1,
        ...clonePayment,
        fullname: fullname,
        phone: numberPhone,
        email: email,
        address: address,
        city: citySelected,
        district: districtSelected,
        village: villageSelected,
        ...cloneCart,
      },
    ]);
    setCart([]);
    window.location.assign("/");
  };

  return (
    <div id="payment_product">
      <div className="payment">
        <div className="container_payment">
          <form onSubmit={handleSubmit(paymentOrder)}>
            <div className="information_customer_order">
              <div className="delivery_information">
                <h3>Thông tin nhận hàng</h3>
                <div className="infor_customer">
                  <div className="input_fullname_customer">
                    <input
                      type="text"
                      placeholder="Họ tên"
                      {...register("fullname", {
                        required: "Vui lòng nhập họ tên",
                        minLength: {
                          value: 5,
                          message: "Vui lòng nhập đầy đủ họ và tên",
                        },
                      })}
                      value={fullname}
                      onChange={(e) => getFullName(e)}
                    />

                    {fullname !== "" ? (
                      <div className="error_message">{errorFullName}</div>
                    ) : (
                      <ErrorMessage
                        errors={errors}
                        name="fullname"
                        render={({ messages }) => {
                          return messages
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <div className="error_message" key={type}>
                                    {message}
                                  </div>
                                )
                              )
                            : null;
                        }}
                      />
                    )}
                  </div>
                  <div className="input_phone_customer">
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      {...register("phone", {
                        required: "Số điện thoại không được để trống",
                      })}
                      value={numberPhone}
                      onChange={(e) => handleChangePhone(e)}
                    />
                    {numberPhone === "" ? (
                      <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={({ messages }) => {
                          return messages
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <div className="error_message" key={type}>
                                    {message}
                                  </div>
                                )
                              )
                            : null;
                        }}
                      />
                    ) : (
                      <div className="error_message">{errorPhone}</div>
                    )}
                  </div>

                  <div className="input_email_customer">
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email không được để trống",
                      })}
                      value={email}
                      onChange={(e) => handleChange(e)}
                    />
                    {email === "" ? (
                      <ErrorMessage
                        name="email"
                        errors={errors}
                        render={({ messages }) => {
                          return messages
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <div className="error_message" key={type}>
                                    {message}
                                  </div>
                                )
                              )
                            : null;
                        }}
                      />
                    ) : (
                      <div className="error_message">{error}</div>
                    )}
                  </div>
                  <div className="input_apartment_customer">
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      {...register("address", {
                        required: "Địa chỉ không được để trống",
                      })}
                      value={address}
                      onChange={(e) => getAddress(e)}
                    />
                  </div>
                  <ErrorMessage
                    name="address"
                    errors={errors}
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <div className="error_message" key={type}>
                              {message}
                            </div>
                          ))
                        : null;
                    }}
                  />
                  <div className="filter_city">
                    <select onChange={(e) => getCurrentCity(e)}>
                      <option value="" hidden>
                        Tỉnh/Thành phố
                      </option>
                      {city.map((c, index) => {
                        return (
                          <option key={index} value={c.code}>
                            {c.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="filter_district">
                    <select
                      onChange={(e) => getCurrentDistrict(e)}
                      disabled={disabledDistrict}
                    >
                      <option value="" hidden>
                        Quận/Huyện
                      </option>
                      {district.map((d, index) => {
                        return (
                          <option key={index} value={d.code}>
                            {d.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="filter_village">
                    <select
                      disabled={disabledVillage}
                      onChange={(e) => getCurrentVillage(e)}
                    >
                      <option value="" hidden>
                        Phường/Xã
                      </option>
                      {village.map((v, index) => {
                        return (
                          <option key={index} value={v.code}>
                            {v.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="payment_and_shipping">
                <div className="money_shipping">
                  <p>Vận chuyển</p>
                  {showFeeShipping ? (
                    <div className="payment_method">
                      <div className="input_radio_payment">
                        <div className="input__radio">
                          <input type="radio" checked />
                        </div>
                        <div className="cod_payment">
                          <span> Giao hàng tận nơi</span>
                        </div>
                      </div>

                      <div>
                        <span>40.000đ</span>
                      </div>
                    </div>
                  ) : (
                    <div className="box_alert">
                      <span>Vui lòng chọn địa chỉ nhận hàng</span>
                    </div>
                  )}
                </div>
                <div className="money_shipping">
                  <p>Thanh toán</p>
                  <div className="payment_method">
                    <div className="input_radio_payment">
                      <div className="input__radio">
                        <input type="radio" onChange={showContentBox} />
                      </div>
                      <div className="cod_payment">
                        <span> Thanh toán khi giao hàng (COD)</span>
                      </div>
                    </div>

                    <div>
                      <i className="fa-solid fa-money-bill"></i>
                    </div>
                  </div>
                  {showNotice ? (
                    <div className="content_payment_ismethod">
                      <span>Bạn chỉ phải thanh toán khi nhận hàng</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="container_list_order">
              <h3>Đơn hàng (2 sản phẩm)</h3>
              <div className="list_product_order">
                {cart.map((c, index) => {
                  return (
                    <div className="item_product_order" key={index}>
                      <div className="infor_order">
                        <div className="image_product_order">
                          <img src={c.image} alt="" />
                          <span>{c.quantity}</span>
                        </div>
                        <div className="name_product_order">
                          <p>{c.title}</p>
                        </div>
                      </div>
                      <div className="price_product_order">
                        <span>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(c.price * 23000)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="total_line_table">
                <div className="provisional_product">
                  <span>Tạm tính</span>
                  <span>
                    {" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(totalProduct * 23000)}
                  </span>
                </div>
                <div className="shipping_fee">
                  <span>Phí vận chuyển</span>
                  <span>40.000đ</span>
                </div>
              </div>
              <div className="total_summary">
                <span>Tổng tiền</span>
                <span className="price_total_order">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalProduct * 23000 + 40000)}
                </span>
              </div>
              <div className="footer_line_order">
                <div className="return_to_cart">
                  <p>
                    <i className="fa-solid fa-angle-left"></i> &nbsp; Quay về
                    giỏ hàng
                  </p>
                </div>
                <div className="btn_checkout">
                  <button type="submit">Đặt hàng</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Payment;
