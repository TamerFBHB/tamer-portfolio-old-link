import React from "react";
import "./Portfolio.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DataPortfolio from "./Data-Portfolio";
import Module from "./Module";

const Portfolio = ({ show, setShow, portfolio, movePortfolio }) => {
  return (
    <div ref={portfolio} className="porto" onClick={movePortfolio}>
      <div className="merg">
        <div className="headerTTT">
          <h2>Portfolio</h2>
        </div>

        <div className="details">

          <Module setShow={setShow} show={show} />

          <Container>
            <h5>
              In this section, I will show some of the projects that I redesigned,
              through which I show my abilities:
            </h5>

            <div className="web">
              {DataPortfolio.map((e) => {
                return (
                  <div className="webSite">

                    <NavLink className="image" to={e.url} target="_blank" >
                      <img src={e.image} alt="" />
                      <i class="bi bi-eye-fill"></i>
                    </NavLink>

                    <div className="buttons">
                      <NavLink className="btn" to={e.url} target="_blank" >
                        Live Preview
                      </NavLink>
                      <NavLink className="btn" onClick={() => setShow(e.show)}>
                        Details
                      </NavLink>
                    </div>

                  </div>
                )
              })}
            </div>

          </Container>
        </div>
      </div >


    </div >
  );
};

export default Portfolio;
