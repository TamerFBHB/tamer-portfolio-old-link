import "./About.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const About = ({ about, moveAbout }) => {
  return (
    <>
      <div ref={about} className="about" onClick={moveAbout}>

        <div className="merg">

          <h2>About</h2>

          <div className="details">
            <Container>
              <ul>
                <li>
                  Name : <span> Tamer Fouad Boshara</span>
                </li>
                <li>
                  Email : <span>tamer.fbhb.wd@gmail.com</span>
                </li>
                <li>
                  Phone : <span>(+2)-0127-7080-2197</span>
                </li>

              </ul>
              <div className="profile">
                <h4>Professional Profile</h4>
                <p>
                  I gained high skills in <span> 𝗙𝗿𝗼𝗻𝘁 𝗘𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 </span>{" "}
                  that allows me to do attractive designs and provide high
                  quality and wonderful projects, and it works smoothly.
                  <br />
                  As a front-end developer, I have extensive knowledge of
                  <span> HTML, CSS, Bootstrap, JavaScript, React </span> and
                  other related technologies. I always make sure my code is
                  clean, well organized, and optimized for performance.
                </p>
                <Link to="../../component/Download/Tamer Fouad_CV.pdf"
                  target="_blank" download className="download">
                  Download CV
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
