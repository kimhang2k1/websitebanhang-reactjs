import Footer from "../../component/ComponentShared/Footer/Footer";
import Header from "../../component/ComponentShared/Header/Header";
import Payment from "../../component/Payment/Payment";
import "./Checkout.css";
import "./Checkout_responsive.css";

function PageCheckout() {
  return (
    <div className="scroll-fixed">
      <Header />
      <Payment />
      <Footer />
    </div>
  );
}
export default PageCheckout;
