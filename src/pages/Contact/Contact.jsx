import "./Contact.css";
import ContactForm from "../../component/ContactForm/ContactForm";
import whatsApp from "../../images/whatsApp.png";
import telegram from "../../images/telegram.png";
import gmail from "../../images/gmail.jpg";
import facebook from "../../images/facebook.png";
import linkin from "../../images/linkin.png";
import github from "../../images/github.png";
import { Container, NavLink } from "react-bootstrap";

const Contact = ({ contact, moveContact }) => {
  return (
    <div ref={contact} className="contact" onClick={moveContact}>
      <div className="merg">
        <div className="headerTTT">
          <div className="BoxShadow">
            <div className="TT" />
          </div>
          <h2>Contact</h2>
        </div>
        <div className="details">
          <Container>
            <div className="MainContect">
              {/* ***** contact Form ***** */}
              <div className="contactForm">
                <ContactForm />
              </div>

              <div className="number">
                <div className="middle">
                  <h3>
                    I'am also on social network : <span>just Click</span>
                  </h3>

                  <div className="call  ">
                    <div className="phoneNum ">
                      <h4>(+20)1270-8021-97</h4>
                    </div>

                    <div className="links ">
                      <a
                        href="tel:+201270802197"
                        target="blank"
                        className="phone"
                      >
                        <div className="mobile">
                          <i class="bi bi-telephone-fill"></i>
                        </div>
                      </a>

                      <a
                        href="http://wa.me/+201270802197"
                        target="blank"
                        className="phone"
                      >
                        <div className="mobile">
                          <img src={whatsApp} alt="" className="image" />
                        </div>
                      </a>

                      <a
                        href="http://telegram.me/ContentTeamBot"
                        target="blank"
                        className="phone"
                      >
                        <div className="mobile">
                          <img src={telegram} alt="" className="image" />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="linkSocial ">
                    <NavLink
                      href="https://www.linkedin.com/in/tamer-fouad-830b1027b/"
                      target="_blank"
                      className="phone"
                    >
                      <div className="mobile">
                        <img src={linkin} alt="" className="image" />
                      </div>
                    </NavLink>
                    <NavLink
                      href="https://www.facebook.com/profile.php?id=100093255500258"
                      target="_blank"
                      className="phone"
                    >
                      <div className="mobile">
                        <img src={facebook} alt="" className="image" />
                      </div>
                    </NavLink>
                    <NavLink
                      href="https://github.com/TamerFBHB"
                      target="_blank "
                      className="phone"
                    >
                      <div className="mobile">
                        <img src={github} alt="" className="image" />
                      </div>
                    </NavLink>

                    <a
                      href="mailto:tamer.fbhb.wd@gmail.com"
                      target="blank"
                      className="phone"
                    >
                      <div className="mobile">
                        <img src={gmail} alt="" className="image" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="LogoT">
                  <h1>T</h1>
                </div>

              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;

