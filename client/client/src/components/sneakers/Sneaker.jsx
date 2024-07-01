import React, { useEffect, useState } from "react";
import "./Sneaker.css";
import jordanOF from "../../assets/jordan-1-off-white-unc.webp";
import { getAllSneakers } from "../../service/client.server";
import { Link } from "react-router-dom";

const Sneaker = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    getAllSneakers()
      .then((res) => setSneakers(res))
      .catch((error) => console.log(error));
  }, []);

  const displayBanner = sneakers.slice(0, 10);

  return (
    <>
      <h2 className="sneaker-title">Feature Products</h2>
      <div className="sneaker-container">
        {displayBanner.map((sneaker) => {
          return (
            <div key={sneaker._id} className="sneaker-card card ">
              <div className="sneaker-card-body card-body">
                <Link to={`/sneaker/${sneaker._id}`} className="sneaker-link">
                  <img src={jordanOF} alt="" className="card-image" />
                  <h4 className="text-center mb-4">{sneaker.name}</h4>
                </Link>
                <div className="reviews">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <b>${sneaker.price}.00</b>
              </div>
              <button className="btn btn-outline-primary">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sneaker;
