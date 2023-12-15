import React from "react";
import "./Education.css";
import { Container } from "react-bootstrap";
import html from "../../images/html.png";
import css from "../../images/css.png";
import Javascript from "../../images/java.png";
import react from "../../images/react.png";
import Bootstrap from "../../images/Bootstrap.png";
import tailwind from "../../images/tailwind.png"
import sass from "../../images/sass.png"

const courses = [
  {
    course: "Html5",
    logo: html,
  },
  {
    course: "Css3",
    logo: css,
  },
  {
    course: "Javascript",
    logo: Javascript,
  },
  {
    course: "React",
    logo: react,
  },
  {
    course: "Bootstrap",
    logo: Bootstrap,
  },
  {
    course:"Tailwind",
    logo: tailwind,
  },
  {
    course:"Sass",
    logo: sass,
  }
];
const Education = ({ education, moveEducation }) => {
  return (
    <div ref={education} className="education" onClick={moveEducation}>
      <div className="merg">
        <div className="headerTTT">
          <h2>Education</h2>
        </div>

        <div className="details">
          <Container>
            <h4>Bachelor in Commerce, Ein Shams university, Cairo, Egypt.</h4>
            <div className="targit">
              <h5>
                To achieve my goal of changing my field of work to programming
                "Front End Developer", I studied a group of courses :
              </h5>
            </div>
            <div className="edu">
              <div className="cards ">
                {courses.map((item) => {
                  return (
                    <div className="card">
                      <div className="Box ">
                        <img src={item.logo} alt="" className="logo" />
                        <h6>{item.course}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <br />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Education;
