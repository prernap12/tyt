import React, { useState } from "react";
import axios from "./lib/axios.js"; // Import axios
import { Nav, Header } from "./logo";

import "./project.css";

function Baja() {
  // State to store the license number and the search result
  const [licenseNumber, setLicenseNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null); // Clear any previous error
    setSearchResult(null); // Clear any previous result

    try {
      const response = await axios.get(
        `http://localhost:5000/searchRecords/search/${licenseNumber}`
      );
      setSearchResult(response.data); 
      console.log(response);// Update result state with API response
    } catch (err) { 
      console.log(err);
      
      setError("Failed to fetch data. Please try again."); // Handle errors
    }
  };

  return (
    <>
      <Nav />
      <Header />

      <div className="center">
        <p>TRAFFIC VIOLATION TRACKER SYSTEM</p>
        <img
          src="./TVT_logo-removebg-preview.png"
          alt="TVT Logo"
          className="image"
        />
      </div>

      <div className="box-main">

        <div className="box">
          <div className="form-div">
          <form className="license-search-form" onSubmit={handleSearch}>
            <h3 className="h3-label">Smart-Card License Search</h3>
            <div className="input-div">
              <label htmlFor="license-number" className="label-name">
                License Number
              </label>
              <br />
              <input
                type="text"
                id="license-number"
                name="license-number"
                placeholder="Enter License Number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)} // Update state
              />
            </div>
            <button type="submit" className="btn">
              Search License
            </button>
          </form>
          </div>
          {/* Display search results */}
          {searchResult && (
            <div className="result-card">
              <div className="profile-section">
                <img
                  src={searchResult.image}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="personal-info">
                  <p><strong>Id:</strong> {searchResult._id}</p>
                  <p><strong>Name:</strong> {searchResult.name}</p>
                  <p><strong>Sex:</strong> {searchResult.sex}</p>
                  <p><strong>Age:</strong> {searchResult.age}</p>
                  <p><strong>DOB:</strong> {searchResult.dob}</p>
                  <p><strong>Address:</strong> {searchResult.address}</p>
                </div>
              </div>
              <div className="license-info">
                <h4>Violation Records:</h4>
                <ul>
                  {searchResult.violationRecords.map((record, index) => (
                    <li key={index}>
                      <strong>Title:</strong> {record.title || "N/A"} <br />
                      <strong>Fine:</strong> {record.fine || "N/A"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Display error messages */}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
}

export default Baja;
