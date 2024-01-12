import React, { useEffect, useState } from "react";
import NavBar from "../Nav";
import "./ProductList.css"; // Import your CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

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

  return (
    <div>
      <NavBar />
      <div className="product-list-container">
        <h2>Product List</h2>
        {products.length > 0 ? (
          <table className="product-table">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Product price</th>
                <th>Product category</th>
                <th>Product company</th>
                <th>Product listed by</th>
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
