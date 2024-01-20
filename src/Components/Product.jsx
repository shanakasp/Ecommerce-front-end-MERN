import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Nav";
import "./ProductList.css"; // Import your CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      console.warn(id);
      const result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      });
      const data = await result.json();
      if (data) {
        alert("Deleted Successfully");
        getProducts(); // Refresh the product list after deletion
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const getProducts = async () => {
    try {
      const result = await fetch("http://localhost:5000/products");
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.warn(products);
  const searchHandle = async (event) => {
    let key = event.target.value;
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="product-list-container">
        <h2>Product List</h2>
        <input
          type=""
          className="search-product-box"
          placeholder="Search Product"
          onChange={searchHandle}
        />
        {products.length > 0 ? (
          <table className="table table-bordered product-table">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Product price</th>
                <th>Product category</th>
                <th>Product company</th>
                <th>Product listed by</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.company}</td>
                  <td>{product.userId}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                    <Link to={"/update/" + product._id}>
                      <button className="btn m-2 btn-success">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
