import React, { useState } from "react";
import NavBar from "../Nav";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false); // Corrected initialization

  const collectData = async (e) => {
    e.preventDefault();
    if (!name || !price || !company || !category) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);

    const userId = JSON.parse(localStorage.getItem("user")).userId;
    console.warn(userId);

    try {
      let result = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      result = await result.json();
      console.warn(result);
    } catch (error) {
      console.error("Error:", error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-start pt-5">
        <div className="w-50 bg-light rounded p-3">
          <form onSubmit={collectData}>
            <h2>Add product</h2>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {error && !name && (
              <span className="invalid-input">Enter Valid Name</span>
            )}
            <div className="mb-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                placeholder="Enter product price"
                name="price"
                id="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {error && !price && (
              <span className="invalid-input">Enter Valid Price</span>
            )}
            <div className="mb-2">
              <label htmlFor="password">Category</label>
              <input
                type="text"
                placeholder="Enter Category"
                name="Category"
                id="Category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            {error && !category && (
              <span className="invalid-input">Enter Valid Category</span>
            )}
            <div className="mb-2">
              <label htmlFor="password">Company</label>
              <input
                type="text"
                placeholder="Enter Company"
                name="Company"
                id="Company"
                className="form-control"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            {error && !company && (
              <span className="invalid-input">Enter Valid Company</span>
            )}
            <button
              type="submit"
              className="btn w-50 bg-success mx-auto d-block text-white"
            >
              Add
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
