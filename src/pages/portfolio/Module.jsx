// import React, { useState } from 'react';
import "./Module.css";
import DataPortfolio from "./Data-Portfolio";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Module = ({ show, setShow }) => {

    // const [show , setShow] = useState()



    return (

        <div>
            {DataPortfolio.map((e) => {
                return (
                    <div className={`module  ${show === 0 ? "disapeare" : " "}
                        ${show === e.show ? "apeare" : "disapeare "}`}
                        onClick={() => setShow(0)}>

                        <div className={`mainModule `}>

                            <IoClose  className='CloseBar'  onClick={() => setShow(0)}/>
            
                            <div className="webDetails">
                                <div className="titleModule"><h3>{e.title}</h3></div>

                                <div className="body">
                                    <div className="photo">
                                        <img src={e.image} alt="" />
                                        <NavLink className="btn" to={e.url} target="_blank" >
                                            Live Preview
                                        </NavLink>
                                    </div>
                                    <div className="detail">
                                        <h3>{e.inform} <b>{e.design}</b></h3>
                                        <h3 className="feature">{e.feature}</h3>
                                        <h3>* Fully Responsive Design</h3>
                                        <h3>* Clean and Beautiful Design</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>

    );
}

export default Module;
