import React from "react";
import "./BarSmallMedia.css";
import { NavLink } from "react-router-dom";

const BarSmallMedia = ({
  navbarClose,
  moveHome,
  moveAbout,
  moveExperience,
  moveEducation,
  movePortfolio,
  moveContact,
}) => {
  return (
    <div className="BarSmallMedia" id="BarSmallMedia">
      <div className="header">
        <h1>T</h1>
      </div>

      <div className="links">
      <ul>
                <li>
                  <NavLink id='s-homeLink' onClick={moveHome}>
                    Home
                    <i class="bi bi-house-fill"  ></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink id='s-aboutLink' onClick={moveAbout}>
                    About
                    <i class="bi bi-person-fill"></i>
                    </NavLink>
                  
                </li>
              
                <li>
                  <NavLink id='s-educationLink' onClick={moveEducation}>
                    Education
                    <i class="bi bi-journals"></i>
                    </NavLink>
                </li>
                <li>
                  <NavLink id='s-portfolioLink' onClick={movePortfolio}>
                    portfolio
                    <i class="bi bi-folder-fill"></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink id='s-contactLink' onClick={moveContact}>
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
