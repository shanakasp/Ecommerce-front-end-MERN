import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Nav";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault();

    try {
      // Show loading state or disable the submit button
      setLoading(true);

      const result = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      console.log(result);

      // Save user information to local storage
      localStorage.setItem("user", JSON.stringify({ name, email, password }));

      // Redirect to the home page
      navigate("/");
    } catch (error) {
      // Handle registration error
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again."); // Set error state
    } finally {
      // Reset loading state or enable the submit button
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-center">
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button
              type="submit"
              className="btn w-50 bg-success mx-auto d-block text-white"
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Registering..." : "Register"}
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
