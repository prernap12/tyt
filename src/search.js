import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./lib/axios.js";  // Import axios
const Cheat=async()=>{
    const response= await axios.get("http://localhost/searchRecords/search", {

        
            licenseNumber,
        
        
    });

    console.log(response.data);

    return response.data;
}
