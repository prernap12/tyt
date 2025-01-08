import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./lib/axios.js"; // Import axios
import "./login.css";

// Function to make API call to backend
const loginAPI = async (badgeNumber, password) => {
  try {
    console.log("Sending credentials to the backend:", { badgeNumber, password });
    // Ensure the payload is being sent correctly
    const response = await axios.post("http://localhost:5000/user/login", {
      badgeNumber,
      password,
    });

    console.log("Backend response:", response); // Log the entire response

    // Assuming the response contains data with success field and message
    return response.data; // Returning the response data directly
  } catch (error) {
    console.error("Error during login API call:", error);
    return { success: false, message: "Invalid Credentials" };
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    badgeNumber: "", // Badge Number
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.badgeNumber || !formData.password) {
      setError("Badge Number and password are required.");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    // Call the backend API
    const result = await loginAPI(formData.badgeNumber, formData.password);

    console.log("API Result:", result); // Debug the response

    // Check the response for success
console.log("result",result);

    
    if (result.message ==="Login Successful") {
      // Assuming the backend sends a success field
      navigate("/home"); // Redirect to home page
    } else {
      setError(result.message || "Login Failed! Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg">
      <div className="image-logo">
        <h2>Government of Nepal</h2>
        <img src="./emblem_of_Nepal.png" alt="Nepal Emblem" />
        <h2>"Follow Traffic Rules for Safety"</h2>
      </div>
      <div className="login-form">
        <h2>Traffic Personnel Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="badgeNumber">Badge Number</label>
            <input
              type="text"
              id="badgeNumber"
              name="badgeNumber"
              value={formData.badgeNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
