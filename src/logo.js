import React from "react";
function Nav( ){
    return( <><div className="logo">
        <img src="./emblem_of_Nepal.png" />
        <p>
          GOVERNMENT OF NEPAL<br/>
          MINISTRY OF HOME AFFAIRS<br/>
          TRAFFIC POLICE DEPARTMENT<br/>
          TRAFFIC VIOLATION TRACKER(TVT)
      </p>
        </div></>)
}
 function Header ( ){
    return( <>
     <div className="navbar">
        <div className="navdiv">
          <ul>
             <li><a href="/home">Home</a></li>
            <li><a href="/voilation">Violation Record</a></li>
            <li><a href="/record">Violator Record</a></li>
            <li><a href="/cheatRecord">Cheat Record</a></li>
            
  
          </ul>
        </div>
      </div>
    
    </>)
 }

export { Nav, Header} ;
