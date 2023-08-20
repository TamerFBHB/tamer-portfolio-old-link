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
                  <NavLink id='s-homeLink' onClick={moveHome}>Home</NavLink>
                  <i class="bi bi-house-fill"  ></i>
                </li>
                <li>
                  <NavLink id='s-aboutLink' onClick={moveAbout}>About</NavLink>
                  <i class="bi bi-person-fill"></i>
                </li>
              
                <li>
                  <NavLink id='s-educationLink' onClick={moveEducation}>Education</NavLink>
                  <i class="bi bi-journals"></i>
                </li>
                <li>
                  <NavLink id='s-portfolioLink' onClick={movePortfolio}>portfolio</NavLink>
                  <i class="bi bi-folder-fill"></i>
                </li>
                <li>
                  <NavLink id='s-contactLink' onClick={moveContact}>Contact me</NavLink>
                  <i class="bi bi-at"></i>
                </li>
            
              </ul>
      </div>
    </div>
  );
};

export default BarSmallMedia;
