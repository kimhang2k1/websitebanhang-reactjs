import News from "../../component/Home/News/News";
import Footer from "../../component/ComponentShared/Footer/Footer";
import Header from "../../component/ComponentShared/Header/Header";
import HomeBanner from "../../component/Home/HomeBanner/HomeBanner";
import TwoBanner from "../../component/Home/TwoBanner/TwoBanner";
import TabProduct from "../../component/Home/TabProduct/TabProduct";
import OneBanner from "../../component/Home/OneBanner/OneBanner";
import BestSeller from "../../component/Home/BestSeller/BestSeller";
import BannerSale from "../../component/Home/BannerSale/BannerSale";
import ProductNew from "../../component/Home/ProductNew/ProductNew";
import "./Home.css";
import "./responsive.css";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <TwoBanner />
      <TabProduct />
      <OneBanner />
      <BestSeller />
      <BannerSale />
      <ProductNew />
      <News />
      <Footer />
    </>
  );
}

export default Home;
