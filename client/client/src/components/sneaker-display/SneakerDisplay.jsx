import { useEffect, useState } from "react";
import image from "../../assets/banner/futura-sb.jfif";
import "./SneakerDisplay.css";
import { getSneakerById } from "../../service/client.server";
import { useParams } from "react-router-dom";

const SneakerDisplay = () => {
  const { id } = useParams();

  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    getSneakerById(id)
      .then((res) => setSneaker(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="d-flex justify-content-between gap-5">
      <main>
        <img src={image} alt="main" className="main" />
        <div className="d-flex justify-content-center align-items-center sneaker-pics">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </main>
      <aside className="aside-sneakers">
        <h3>Jordan 1 Off-White "UNC" University Blue</h3>
        <p>$1,750.00</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit
          sed sapiente placeat at, quae maiores tempora quisquam, doloribus ex
          labore minus! Quidem, ab ipsam aspernatur labore consectetur similique
          in.
        </p>
        <div className="reviews">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>(60) reviews</p>
        </div>
        <div className="checkout">
          <form className="d-flex justify-content-lg-start align-items-center">
            <div className="size-select d-flex flex-column gap-1">
              <label htmlFor="size">Size:</label>
              <select name="size" className="size-select">
                <option value="US WM=7, MN=5, EU=37.5, UK=4.5">
                  US WM=7, MN=5, EU=37.5, UK=4.5
                </option>
                <option value="US WM=7.5, MN=5.5, EU=38, UK=5">
                  US WM=7.5, MN=5.5, EU=38, UK=5
                </option>
                <option value="US WM=8, MN=6, EU=38.5, UK=5.5">
                  US WM=8, MN=6, EU=38.5, UK=5.5
                </option>
                <option value="US WM=8.5, MN=6.5, EU=39, UK=6">
                  US WM=8.5, MN=6.5, EU=39, UK=6
                </option>
                <option value="US WM=9, MN=7, EU=40, UK=6.5">
                  US WM=9, MN=7, EU=40, UK=6.5
                </option>
                <option value="US WM=9.5, MN=7.5, EU=40.5, UK=7">
                  US WM=9.5, MN=7.5, EU=40.5, UK=7
                </option>
                <option value="US WM=10, MN=8, EU=41, UK=7.5">
                  US WM=10, MN=8, EU=41, UK=7.5
                </option>
                <option value="US WM=10.5, MN=8.5, EU=42, UK=8">
                  US WM=10.5, MN=8.5, EU=42, UK=8
                </option>
                <option value="US WM=11, MN=9, EU=42.5, UK=8.5">
                  US WM=11, MN=9, EU=42.5, UK=8.5
                </option>
                <option value="US WM=11.5, MN=9.5, EU=43, UK=9">
                  US WM=11.5, MN=9.5, EU=43, UK=9
                </option>
                <option value="US WM=12, MN=10, EU=44, UK=9.5">
                  US WM=12, MN=10, EU=44, UK=9.5
                </option>
                <option value="US WM=12.5, MN=10.5, EU=44.5, UK=10">
                  US WM=12.5, MN=10.5, EU=44.5, UK=10
                </option>
                <option value="US WM=13, MN=11, EU=45, UK=10.5">
                  US WM=13, MN=11, EU=45, UK=10.5
                </option>
                <option value="US WM=13.5, MN=11.5, EU=46, UK=11">
                  US WM=13.5, MN=11.5, EU=46, UK=11
                </option>
                <option value="US WM=14, MN=12, EU=46.5, UK=11.5">
                  US WM=14, MN=12, EU=46.5, UK=11.5
                </option>
              </select>
            </div>
            <select
              name="item-quantity"
              id="item-quantity"
              className="qty-select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>

          <div className="mt-4">
            <button className="btn btn-outline-primary">Checkout</button>
          </div>
        </div>
        <div className="disclaimers">
          <p>
            <i className="fa-solid fa-check"></i>15 days easy returns
          </p>
          <p>
            <i className="fa-solid fa-check"></i>100% Authentic Sneakers
          </p>
          <p>
            <i className="fa-solid fa-check"></i>Fast Customer Service Response
          </p>
          <p>
            <i className="fa-solid fa-check"></i>All pictures were taken by
            Kicks District's Team
          </p>
          <p>
            <i className="fa-solid fa-check"></i>100% Customer Satisfaction
            Guaranteed
          </p>
        </div>
      </aside>
    </div>
  );
};

export default SneakerDisplay;
