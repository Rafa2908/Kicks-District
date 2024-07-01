import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    image: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
    },
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container card">
      <h1>Add Product to Inventory</h1>
      <form className="card-body">
        <div className="mb-3 form-floating">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="description">Product Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Product Description:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="brand">Product Brand:</label>
          <input
            type="text"
            name="brand"
            placeholder="Product Brand:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Price:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="image1">Image 1:</label>
          <input
            type="text"
            name="image1"
            placeholder="Image 1:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="image2">Image 2:</label>
          <input
            type="text"
            name="image2"
            placeholder="Image 2:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="image3">Image 3:</label>
          <input
            type="text"
            name="image3"
            placeholder="Image 3:"
            onChange={updateForm}
          />
        </div>
        <div className="mb-3 form-floating">
          <label htmlFor="image4">Image 4:</label>
          <input
            type="text"
            name="image4"
            placeholder="Image 4:"
            onChange={updateForm}
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
