import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/ContainerHome/Home";
import PageCart from "./container/PageCart/PageCart";
import PageCheckout from "./container/PageCheckout/PageCheckout";

import Product from "./container/PageProduct/Product";
import PageProductDetail from "./container/PageProductDetail/PageProductDetail";
import ContextAddress from "./context/ContextAddress";

import ContextData from "./context/ContextData";

function App() {
  return (
    <ContextData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/product/category=:category&id=:id"
            element={<PageProductDetail />}
          />
          <Route path="/cart" element={<PageCart />} />
          <Route
            path="/checkout"
            element={
              <ContextAddress>
                <PageCheckout />
              </ContextAddress>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextData>
  );
}

export default App;
