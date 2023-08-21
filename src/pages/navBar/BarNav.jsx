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
                  <NavLink id='homeLink' onClick={moveHome}>
                    Home
                    <i className="bi bi-house-fill"  ></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink id='aboutLink' onClick={moveAbout}>
                    About
                    <i class="bi bi-person-fill"></i>
                  </NavLink>
                  
                </li>
              
                <li>
                  <NavLink id='educationLink' onClick={moveEducation}>
                    Education
                    <i class="bi bi-journals"></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink id='portfolioLink' onClick={movePortfolio}>
                    portfolio
                    <i class="bi bi-folder-fill"></i>
                    </NavLink>
                  
                </li>
                <li>
                  <NavLink id='contactLink' onClick={moveContact}>
                    Contact me
                    <i class="bi bi-at"></i>
                    </NavLink>                 
                </li>
            
              </ul>
            </div>            
        </div>
    );
}

export default BarNav;

