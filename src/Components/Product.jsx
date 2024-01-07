import React, { useEffect, useState } from "react";
import NavBar from "../Nav";

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
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.category} -{" "}
            {product.company} - UserId: {product.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
