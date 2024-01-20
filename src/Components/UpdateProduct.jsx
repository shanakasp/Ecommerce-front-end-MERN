import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Nav";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const updateData = async (e) => {
    e.preventDefault();
    console.warn(name, price, category, company);

    try {
      const result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: "PUT", // Use 'PUT' instead of 'Put'
        body: JSON.stringify({ name, price, category, company }),
        headers: {
          "Content-Type": "application/json", // Use 'application/json' instead of 'Application/json'
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      } else {
        navigate("/");
      }

      const data = await result.json(); // Corrected the typo here
      console.warn(data);
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []); // Added empty dependency array to ensure useEffect runs only once

  const getProductDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${params.id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.warn(result);

      // Update state with product details
      setName(result.name);
      setPrice(result.price);
      setCategory(result.category);
      setCompany(result.company);
    } catch (error) {
      console.error("Error fetching product details:", error.message);
      // Handle error in the frontend (e.g., display an error message)
      setError(true);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-start pt-5">
        <div className="w-50 bg-light rounded p-3">
          <form onSubmit={updateData}>
            <h2>Update product</h2>
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
              Update
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
