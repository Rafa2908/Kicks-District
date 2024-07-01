import "./Navbar.css";
import Abovenav from "../abovenav/Abovenav";
import Belownav from "../belownav/Belownav";
import Promo from "../promo/Promo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Abovenav />
      <nav className="d-flex justify-content-between align-items-center p-4 bg-dark">
        <div className="left-section">
          <h1 className="text-light">Logo Here</h1>
        </div>
        <div className="middle-section">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="right-section">
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          <Link to={"/user"}>
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping">
              <span>1</span>
            </i>
          </Link>
        </div>
      </nav>
      <Belownav />
      <Promo />
    </>
  );
};

export default NavBar;
