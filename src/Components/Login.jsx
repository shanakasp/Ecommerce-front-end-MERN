import axios from "axios"; // Don't forget to import axios
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Nav";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Show loading state or disable the submit button
      setLoading(true);

      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log(result);

      // Save user information to local storage
      localStorage.setItem("user", JSON.stringify({ email, password }));

      // Redirect to the home page
      navigate("/");
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      setError("Login failed. Please try again."); // Set error state
    } finally {
      // Reset loading state or enable the submit button
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-start pt-5">
        <div className="w-50 bg-light rounded p-3 ">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <button
              type="submit"
              className="btn w-50 bg-success mx-auto d-block text-white"
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>{" "}
          </form>
          {error && <div className="text-danger mt-2">{error}</div>}{" "}
          {/* Display error message if exists */}
        </div>
      </div>
    </div>
  );
}

export default Login;
