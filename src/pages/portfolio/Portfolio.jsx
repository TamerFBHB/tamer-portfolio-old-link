import React from "react";
import "./Portfolio.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DataPortfolio from "./Data-Portfolio";
import Module from "./Module";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {  Autoplay } from 'swiper/modules';


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
              <Swiper
                breakpoints={{
                  300: {
                    width: 300,
                    slidesPerView: 1,                     
                    spaceBetween :30
                  },
                  768: {
                    width: 768,
                    slidesPerView: 3,
                    spaceBetween :20
                  },
                  1200: {
                    width: 1200,
                    slidesPerView: 4,
                    spaceBetween : 10
                  },
                }}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter : true,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}   
                loop={true}            
                className="mySwiper"
              >
                {DataPortfolio.map((e) => {
                  return (

                    <SwiperSlide>
                      <div className="webSite">
                        <NavLink className="image" to={e.url} target="_blank" >
                          <img src={e.image} alt="" />
                          <i class="bi bi-eye-fill"></i>
                        </NavLink>

                        <div className="buttons" >
                          <NavLink className="btn" to={e.url} target="_blank" >
                            Live Preview
                          </NavLink>
                          <NavLink className="btn" onClick={() => setShow(e.show)}>
                            Details
                          </NavLink>
                        </div>

                      </div>

                    </SwiperSlide>
                  )
                })}

              </Swiper>

            </div>

          </Container>
        </div>
      </div >


    </div >
  );
};

export default Portfolio;
