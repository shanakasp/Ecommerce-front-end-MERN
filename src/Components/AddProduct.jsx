import React, { useState } from "react";
import NavBar from "../Nav";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  // Corrected the collectData function
  const collectData = (e) => {
    e.preventDefault();
    console.warn(name, price, category, company);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-start pt-5">
        <div className="w-50 bg-light rounded p-3">
          <form onSubmit={collectData}>
            <h2>Register</h2>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Price</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
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
