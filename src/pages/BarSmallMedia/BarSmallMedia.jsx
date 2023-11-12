import React from "react";
import "./BarSmallMedia.css";
import { NavLink } from "react-router-dom";

const BarSmallMedia = ({
  stateClose,
  stateColor,
  moveHome,
  moveAbout,
  moveEducation,
  movePortfolio,
  moveContact,
}) => {
  return (
    <div className={(stateClose ===0) ? "close  BarSmallMedia" : "open  BarSmallMedia"} >
      <div className="header">
        <h1>T</h1>
      </div>

      <div className="links">
      <ul>
                <li>
                  <NavLink className={stateColor ===0 ? "activeLink " : "noActiveLink"} onClick={moveHome}>
                    Home
                    <i class="bi bi-house-fill"  ></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink  className={stateColor ===1 ? "activeLink " : "noActiveLink"} onClick={moveAbout}>
                    About
                    <i class="bi bi-person-fill"></i>
                    </NavLink>
                  
                </li>
              
                <li>
                  <NavLink  className={stateColor ===2 ? "activeLink " : "noActiveLink"} onClick={moveEducation}>
                    Education
                    <i class="bi bi-journals"></i>
                    </NavLink>
                </li>
                <li>
                  <NavLink  className={stateColor ===3 ? "activeLink " : "noActiveLink"} onClick={movePortfolio}>
                    portfolio
                    <i class="bi bi-folder-fill"></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink className={`me ${stateColor ===4 ? "activeLink" : "noActiveLink"}`} onClick={moveContact}>
                    Contact me
                    <i class="bi bi-at"></i>
                    </NavLink>
                  
                </li>
            
              </ul>
      </div>
    </div>
  );
};

export default BarSmallMedia;
