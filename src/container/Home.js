import BannerSale from "../component/BannerSale/BannerSale";
import BestSeller from "../component/BestSeller/BestSeller";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import HomeBanner from "../component/HomeBanner/HomeBanner";
import News from "../component/News/News";
import OneBanner from "../component/OneBanner/OneBanner";
import ProductNew from "../component/ProductNew/ProductNew";
import TabProduct from "../component/TabProduct/TabProduct";
import TwoBanner from "../component/TwoBanner/TwoBanner";

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
