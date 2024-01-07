import "./Home.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import tamerPhoto from "../../images/tamer.jpg";
import { Container } from "react-bootstrap";
import { Textillate } from "textillate-react";

const Home = ({ moveHome, moveContact, home }) => {
  return (
    <>
      <div ref={home} className="home" onClick={moveHome}>
        
        <div className="merg">
          <Container>
            <div className="tag-wrap ">
              <img src={tamerPhoto} alt="" className="tamerPhoto" />
            </div>
            
            <div className="name">
              <h1>Tamer Fouad</h1>

              <div className="FrontEnd">
                <p>
                  <Textillate
                    option={{
                      in: {
                        effect: "fadeInDownBig",
                        delay: 20,
                        delayScale: 3,
                      },
                      out: {
                        effect: "bounceOut",
                        sequence: true,
                        delay: 20,
                        delayScale: 3,
                        reverse: true,
                      },

                      type: "char",
                      loop: true,
                    }}
                  >
                    Front End Developer
                  </Textillate>
                </p>
              </div>

              <div className="social">
                <NavLink
                  to="https://www.linkedin.com/in/tamer-fouad-830b1027b/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin"></i>
                </NavLink>
                <NavLink
                  to="https://www.facebook.com/profile.php?id=100093255500258"
                  target="_blank"
                >
                  <i class="bi bi-facebook"></i>
                </NavLink>
                <NavLink to="https://github.com/TamerFBHB" target="_blank">
                  <i class="bi bi-github"></i>
                </NavLink>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
