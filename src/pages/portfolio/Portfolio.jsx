import React from "react";
import "./Portfolio.css";
import { Container } from "react-bootstrap";
import foodera from "../../images/foodera.png";
import healthy from "../../images/midical.png";
import impreza from "../../images/impreza.png";
import megano from "../../images/megano.png"
import { NavLink } from "react-router-dom";

const Portfolio = ({ portfolio, movePortfolio }) => {
  return (
    <div ref={portfolio} className="porto" onClick={movePortfolio}>
      <div className="merg">
        <div className="headerTTT">
          <h2>Portfolio</h2>
        </div>
        <div className="details">
          <Container>
            <h5>
              In this section, I will show some of the projects that I designed,
              through which I show my abilities:
            </h5>

            <h4 className="first">
              this projects design with React.
            </h4>
            <div className="foodera">
              <NavLink
                className="image"
                to="https://foodera-code.web.app/"
                target="_blank"
              >
                <img src={foodera} alt="" />
                <i class="bi bi-eye-fill"></i>
              </NavLink>

              <NavLink
                className="btn"
                to="https://foodera-code.web.app/"
                target="_blank"
              >
                Live Preview
              </NavLink>
            </div>

            <div className="foodera">
              <NavLink
                className="image"
                to="https://healthcare-7b900.web.app/"
                target="_blank"
              >
                <img src={healthy} alt="" />
                <i class="bi bi-eye-fill"></i>
              </NavLink>

              <NavLink
                className="btn"
                to="https://healthcare-7b900.web.app/"
                target="_blank"
              >
                Live Preview
              </NavLink>
              
            </div>

            <div className="foodera">
              <NavLink
                className="image"
                to="https://impreza-project.web.app/"
                target="_blank"
              >
                <img src={impreza} alt="" />
                <i class="bi bi-eye-fill"></i>
              </NavLink>

              <NavLink
                className="btn"
                to="https://impreza-project.web.app/"
                target="_blank"
              >
                Live Preview
              </NavLink>
              
            </div>
            <div className="foodera">
              <NavLink
                className="image"
                to="https://megaone-96310.web.app/"
                target="_blank"
              >
                <img src={megano} alt="" />
                <i class="bi bi-eye-fill"></i>
              </NavLink>

              <NavLink
                className="btn"
                to="https://megaone-96310.web.app/"
                target="_blank"
              >
                Live Preview
              </NavLink>
              
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
