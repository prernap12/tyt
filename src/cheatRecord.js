import React from "react";
import { useNavigate } from "react-router-dom";
import "./cheatRecord.css";

function Cheat (){

  const navigate = useNavigate();
    const home=()=>{return(
        navigate("/home")
    )
   
    }

  return(
   
   <> 
    <h1 className="title"> Traffic Violation Tracker</h1>
    



    <div className="btn">
      <button type="submit" onClick={home}>submit</button>
    </div>
    
    
    </>
  );
}
export default Cheat;