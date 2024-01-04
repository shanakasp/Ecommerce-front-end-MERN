import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Your Logo or Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {auth ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/add">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/update">
                    Update Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/logout"
                    onClick={() => logout()}
                  >
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <ul>
                  <div className="nav-right d-flex justify-content-end">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/signup">
                        Sign-Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/login">
                        Login
                      </Link>
                    </li>
                  </div>
                </ul>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
