import { createContext, useContext, useEffect, useState } from "react";

export const AddressContext = createContext();
export const useContextAddress = () => useContext(AddressContext);
function ContextAddress({ children }) {
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [village, setVillage] = useState([]);
  const [citySelected, setCitySelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");
  const [villageSelected, setVillageSelected] = useState("");
  const [disabledDistrict, setDisabledDistrict] = useState(true);
  const [disabledVillage, setDisabledVillage] = useState(true);
  const [showFeeShipping, setShowFeeShipping] = useState(false);

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
    setShowFeeShipping(true);
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
  };

  return (
    <AddressContext.Provider
      value={{
        city,
        getCurrentCity,
        district,
        getCurrentDistrict,
        village,
        disabledDistrict,
        disabledVillage,
        showFeeShipping,
        villageSelected,
        getCurrentVillage,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
export default ContextAddress;
