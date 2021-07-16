import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Item from "../components/Item";
import ItemCategory from "../components/ItemCategory";
import CustomButton from "../components/Button";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="page">
      <Head>
        <title>Official SpaceX Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/spacex-icon.svg" />
      </Head>
      <Header />
      <div className="wallpaper-div">
        <div className="shop-spacex-title-div">
          <strong className="shop-spacex-title">Shop Spacex</strong>
        </div>
        <Image
          src="/spacex-rocket.png"
          layout="responsive"
          width="1600"
          height="500"
        />
      </div>
      <div className="items-section">
        <p className="items-title">Featured products</p>
        <div className="items">
          <Item
            srcMain="/spacex-card.png"
            title="SPACEX CREW-1 MISSION PATCH"
            price="15.00"
          />
          <Item
            srcMain="/spacex-handbag-1.png"
            srcSecond="/spacex-handbag-2.png"
            title="Spacex duffel"
            price="100.00"
          />
        </div>
      </div>
      <div className="button-section">
        <CustomButton title="View All Featured" color="black" />
      </div>
      <div className="categories-section">
        <ItemCategory srcMain="/womens-shirt.png" title="WOMEN'S" />
        <ItemCategory srcMain="/mens-shirt.png" title="MEN'S" />
        <ItemCategory srcMain="/notepad-nasa.png" title="ACCESSORIES" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
