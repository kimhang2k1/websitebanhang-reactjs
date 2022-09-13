import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useData } from "../../../context/ContextData";

function InformationCustomer() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all", criteriaMode: "all" });
  const [showNotice, setShowNotice] = useState(false);  
 
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
    disabledDistrict,
    disabledVillage,
    showFeeShipping,
  } = useData();

  const showContentBox = () => {
    setShowNotice(true);
  };

  return (
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

            {fullname === "" ? (
              <div className="error_message">{errorFullName}</div>
            ) : (
              <ErrorMessage
                errors={errors}
                name="fullname"
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
                    ? Object.entries(messages).map(([type, message]) => (
                        <div className="error_message" key={type}>
                          {message}
                        </div>
                      ))
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
                    ? Object.entries(messages).map(([type, message]) => (
                        <div className="error_message" key={type}>
                          {message}
                        </div>
                      ))
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
            <select
              name="city"
              ref={register("city", {
                required: "Vui lòng chọn địa chỉ nhận hàng",
              })}
              onChange={(e) => getCurrentCity(e)}
            >
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
            <select disabled={disabledVillage}>
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
              <span>
                <input type="radio" checked /> &nbsp; Giao hàng tận nơi
              </span>
              <span>40.000đ</span>
            </div>
          ) : (
            <div className="box_alert">
              {errors.city && <span>{errors.city.message}</span>}
            </div>
          )}
        </div>
        <div className="money_shipping">
          <p>Thanh toán</p>
          <div className="payment_method">
            <span>
              <input type="radio" onChange={showContentBox} /> &nbsp; Thanh toán
              khi giao hàng (COD)
            </span>
            <span>
              <i className="fa-solid fa-money-bill"></i>
            </span>
          </div>
          {showNotice ? (
            <div className="content_payment_ismethod">
              <span>Bạn chỉ phải thanh toán khi nhận hàng</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default InformationCustomer;
