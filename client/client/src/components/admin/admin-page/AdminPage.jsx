import { useState, useEffect } from "react";
import "./AdminPage.css";
import { getAllSneakers } from "../../../service/client.server";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllSneakers()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-5">Welcome, Admin</h1>
      <div className="d-flex justify-content-evenly align-items-center">
        <h2 className="text-center mt-5">Inventory</h2>
        <Link
          className="btn btn-sm btn-outline-primary mt-5"
          to={"/new-inventory"}
        >
          Add Product to Inventory
        </Link>
      </div>
      <table className="table mt-5 mb-5 table-striped">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id} className="text-center">
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>${product.price}.00</td>
                <td className="d-flex justify-content-center align-items-center gap-2">
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
