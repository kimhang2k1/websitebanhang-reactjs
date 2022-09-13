import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ContextData({ children }) {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoriesId, setCategotiesId] = useState("");
  const [sort, setSort] = useState("asc");
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState([]);
  const [fullname, setFullName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [village, setVillage] = useState([]);
  const [citySelected, setCitySelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");
  const [villageSelected, setVillageSelected] = useState("");
  const [disabledDistrict, setDisabledDistrict] = useState(true);
  const [disabledVillage, setDisabledVillage] = useState(true);
  const [showFeeShipping, setShowFeeShipping] = useState(false);
  const [error, setError] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);

  // hiển thị sản phẩm
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  // hiển thị tất cả loại sản phẩm
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      });
  }, []);

  // lấy sản phẩm theo danh mục
  const currentSelected = (e) => {
    setCategotiesId(e.target.value);
  };

  const getProductById = () => {
    if (!categoriesId) {
      return product;
    }
    return product.filter((f) => f.category === categoriesId);
  };

  // sắp xếp theo giá
  const sortPrice = (e) => {
    setSort(e.target.value);
    if (sort === "desc") {
      const products = product.sort((a, b) => a.price - b.price);
      setProduct(products);
    } else if (sort === "asc") {
      const products = product.sort((a, b) => b.price - a.price);
      setProduct(products);
    }
  };

  // thêm sản phẩm vào giỏ hàng
  const addToCart = (product, amount) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + amount }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: amount,
        },
      ]);
    }
    setShow(true);
    document.body.style.overflow = "hidden";
  };

  const btnAddToCart = (product, amount) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + amount }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: amount,
        },
      ]);
    }
  };
  const closeModal = () => {
    setShow(false);
    document.body.style.overflow = "unset";
  };

  // tăng số lượng sản phẩm trong giỏ hàng
  const increase = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );

    setCart(mapped);
  };

  // giảm số lượng sản phẩm trong giỏ hàng
  const decrease = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
          }
        : { ...item }
    );
    setCart(mapped);
  };

  // xóa sản phẩm trong giỏ hàng
  const deleteCart = (item) => {
    let cloneCart = [...cart];
    cloneCart = cloneCart.filter((f) => f.id !== item.id);
    setCart(cloneCart);
  };

  function isValidEmail(email) {
    return /^[_a-z0-9-]+(.[_a-z0-9-]+)*@gmail.com/.test(email);
  }

  function isValidPhone(email) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Địa chỉ email không hợp lệ.Ví dụ : example@gmail.com ");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    if (!isValidPhone(event.target.value)) {
      setErrorPhone("Số điện thoại không hợp lệ");
    } else {
      setErrorPhone(null);
    }

    setNumberPhone(event.target.value);
  };

  //load thành phố
  useEffect(() => {
    fetch("https://api.mysupership.vn/v1/partner/areas/province")
      .then((res) => res.json())
      .then((json) => {
        setCity(json.results);
      });
  }, []);

  // load quận huyện
  const getCurrentCity = (e) => {
    setCitySelected(e.target.value);
    setDisabledDistrict(false);
  };

  useEffect(() => {
    if (!citySelected) {
      return;
    } else {
      fetch(
        `https://api.mysupership.vn/v1/partner/areas/district?province=${citySelected}`
      )
        .then((res) => res.json())
        .then((json) => {
          setDistrict(json.results);
        });
    }
  }, [citySelected]);

  //load phường xã
  const getCurrentDistrict = (e) => {
    setDistrictSelected(e.target.value);
    setDisabledVillage(false);
  };
  useEffect(() => {
    if (!districtSelected) {
      return;
    } else {
      fetch(
        ` https://api.mysupership.vn/v1/partner/areas/commune?district=${districtSelected}`
      )
        .then((res) => res.json())
        .then((json) => {
          setVillage(json.results);
        });
    }
  }, [districtSelected]);

  const getCurrentVillage = (e) => {
    setVillageSelected(e.target.value);
    setShowFeeShipping(true);
  };

  const getFullName = (e) => {
    setFullName(e.target.value);
  };

  const getAddress = (e) => {
    setAddress(e.target.value);
  };

  const getNote = (e) => {
    setNote(e.target.value);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        category,
        setCategory,
        currentSelected,
        getProductById,
        sortPrice,
        addToCart,
        cart,
        closeModal,
        show,
        increase,
        decrease,
        deleteCart,
        btnAddToCart,
        getFullName,
        email,
        setEmail,
        numberPhone,
        setNumberPhone,
        getAddress,
        getNote,
        fullname,
        address,
        note,
        city,
        getCurrentCity,
        district,
        getCurrentDistrict,
        village,
        payment,
        disabledDistrict,
        disabledVillage,
        showFeeShipping,
        citySelected,
        districtSelected,
        villageSelected,
        getCurrentVillage,
        handleChange,
        handleChangePhone,
        error,
        errorPhone,
        setPayment,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ContextData;
export function useData() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
