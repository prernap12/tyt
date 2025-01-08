import axios from "./lib/axios.js";  
import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";

import { Nav, Header } from './logo';
import "./voilation.css";
function Violation() {
    const [violations, setViolations] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
       const cancel =async()=>{const response = await axios.get("http://localhost:5000/api/admin/allrules") 
        console.log(response.data);
        const data=response.data;
        setViolations(data);
        console.log(data.map((e)=>{return e.fine}));
       }
      cancel()
    },[]);
    const cancel=()=>{return(
        navigate("/home")
    )
   
    }
    const cheatRecord=()=>{
        return (
            navigate("/cheatRecord")
        )
    }
    const groupedViolations = violations.reduce((acc, violation) => {
        const { fine } = violation;
        if (!acc[fine]) acc[fine] = [];
        acc[fine].push(violation);
        return acc;
    }, {});

    return (
        <> 
            <Nav />
            <Header />
            <h1>TRAFFIC VIOLATION TRACKER SYSTEM</h1>

            <form>
                <div className="fines">
                    {Object.keys(groupedViolations).map((fine, index) => (
                        <div className="fine" key={index} id={`fine-${fine}`}>
                            <h2>Fine: Rs{fine}</h2>
                            {groupedViolations[fine].map((violation) => (
                                <div key={violation._id}>
                                    <input 
                                        type="checkbox" 
                                        id={`violation-${violation._id}`} 
                                        name="violations" 
                                        value={violation._id} 
                                    />
                                    <label htmlFor={`violation-${violation._id}`}>
                                        {violation.title}
                                    </label><br />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                
                <div className="button-container">
                    <button className="submit" onClick={cheatRecord}>Submit</button>
                    <button className="cancel" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </>
    );
}

    // return (
    //     <> 

    //     <Nav/>
    //     <Header/>
    //     <h1>    TRAFFIC VIOLATION TRACKER SYSTEM    </h1>
    //     <form>
    //         <div className="fines">
    //         <div className="fine"  id="500">
    //     <input type="checkbox" id="h" name="horns" value="0"/>
    //     <label for="h">Driving speed</label><br/>
    //     <input type="checkbox" id="s" name="horns" value="1"/>
    //     <label for="s">Driving speed</label><br/>
    //     <input type="checkbox" id="l" name="horns" value="2"/>
    //     <label for="l">Driving speed</label><br/>
    //     <input type="checkbox" id="x" name="horns" value="3"/>
    //     <label for="x">Driving speed</label><br/>
    //     <input type="checkbox" id="z" name="horns" value="4"/>
    //     <label for="z">Driving speed</label><br/>
    //     <input type="checkbox" id="w" name="horns" value="5"/>
    //     <label for="w">Driving speed </label><br/>
    //     </div>

    //     <div className="fine" id="1000">
    //     <input type="checkbox" id="h" name="horns" value="0"/>
    //     <label for="h">Driving speed</label><br/>
    //     <input type="checkbox" id="s" name="horns" value="1"/>
    //     <label for="s">Driving speed</label><br/>
    //     <input type="checkbox" id="l" name="horns" value="2"/>
    //     <label for="l">Driving speed</label><br/>
    //     <input type="checkbox" id="x" name="horns" value="3"/>
    //     <label for="x">Driving speed</label><br/>
    //     <input type="checkbox" id="z" name="horns" value="4"/>
    //     <label for="z">Driving speed</label><br/>
    //     <input type="checkbox" id="w" name="horns" value="5"/>
    //     <label for="w">Driving speed </label><br/>
    //     </div>

    //     <div  className="fine" id="1500" >
    //     <input type="checkbox" id="h" name="horns" value="0"/>
    //     <label for="h">Driving speed</label><br/>
    //     <input type="checkbox" id="s" name="horns" value="1"/>
    //     <label for="s">Driving speed</label><br/>
    //     <input type="checkbox" id="l" name="horns" value="2"/>
    //     <label for="l">Driving speed</label><br/>
    //     <input type="checkbox" id="x" name="horns" value="3"/>
    //     <label for="x">Driving speed</label><br/>
    //     <input type="checkbox" id="z" name="horns" value="4"/>
    //     <label for="z">Driving speed</label><br/>
    //     <input type="checkbox" id="w" name="horns" value="5"/>
    //     <label for="w">Driving speed </label>
    //     </div>


    //     </div>
    //     <div className="button-container">
    //         <button className="submit" onClick={cheatRecord}>submit</button>
    //         <button className="cancel" onClick={cancel}>cancel</button>
    //     </div>
                
    //          </form>
             
        
    //      </>
    // );  

export default Violation;
