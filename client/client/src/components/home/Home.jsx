import banner from "../../assets/banner/product-banner-display.png";
import Banner from "../banner/Banner";
import Brands from "../brands/Brands";
import Sneaker from "../sneakers/Sneaker";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="d-flex justify-content-center align-items-center flex-column banner-text gap-5">
          <h2>PREMIUM QUALITY FOR THE BEST PRICE</h2>
          <button className="shop-btn">Show Now</button>
        </div>
        <img src={banner} alt="banner" className="banner-image" />
      </div>
      <Banner />
      <Sneaker />
      <Brands />
    </>
  );
};

export default Home;
