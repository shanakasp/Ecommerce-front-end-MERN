import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import LogOut from "./Components/LogOut";
import Login from "./Components/Login";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";
import UpdateProduct from "./Components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<LogOut />} />

          <Routes path="/signup" element={<SignUp />} />
          <Routes path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
