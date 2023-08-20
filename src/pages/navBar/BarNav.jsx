import React from 'react';
import "./BarNav.css"
import { NavLink } from 'react-router-dom';

const BarNav = ({navbarClose , moveHome , moveAbout , moveExperience , moveEducation , movePortfolio , moveContact}) => {
  


  return (
        <div className="bar">

          
            <div className="header">
              <h1 >T</h1>
            </div>
            
          
            <div className="links">    
              <ul>
                <li>
                  <NavLink id='homeLink' onClick={moveHome}>Home</NavLink>
                  <i class="bi bi-house-fill"  ></i>
                </li>
                <li>
                  <NavLink id='aboutLink' onClick={moveAbout}>About</NavLink>
                  <i class="bi bi-person-fill"></i>
                </li>
              
                <li>
                  <NavLink id='educationLink' onClick={moveEducation}>Education</NavLink>
                  <i class="bi bi-journals"></i>
                </li>
                <li>
                  <NavLink id='portfolioLink' onClick={movePortfolio}>portfolio</NavLink>
                  <i class="bi bi-folder-fill"></i>
                </li>
                <li>
                  <NavLink id='contactLink' onClick={moveContact}>Contact me</NavLink>
                  <i class="bi bi-at"></i>
                </li>
            
              </ul>
            </div>            
        </div>
    );
}

export default BarNav;

