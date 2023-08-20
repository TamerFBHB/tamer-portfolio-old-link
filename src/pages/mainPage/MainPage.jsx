import "./MainPage.css";
import { useRef } from "react";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Portfolio from "../portfolio/Portfolio";
import BarNav from "../navBar/BarNav";
import Home from "../Home/Home";
import BarSmallMedia from "../BarSmallMedia/BarSmallMedia";

const MainPage = () => {
  //**** */ move nav bar in small media *****
  const navbar =()=>{
    document.getElementById("BarSmallMedia").style.transform="translatex(0)"
  }
  const navbarClose =()=>{
    document.getElementById("BarSmallMedia").style.transform="translatex(-100px)"
  }
  //**** end move nav bar in small media *****
  // ***** active link *****
  const linkWhite = ()=>{
    var allLinks = document.querySelectorAll(".links>ul>li>a");
    allLinks.forEach((e)=>{
      e.style.color="white";
    })
  }
   // ***** end active link *****
  const moveHome = () => {
    Vhome.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    linkWhite();
    document.getElementById("s-homeLink").style.color="yellow";
    document.getElementById("homeLink").style.color="yellow";
    navbarClose()
  };
  const moveAbout = () => {
    VAbout.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    linkWhite();
    document.getElementById("s-aboutLink").style.color="yellow";
    document.getElementById("aboutLink").style.color="yellow";
    navbarClose()
  };

  const moveEducation = () => {
    Veducation.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    linkWhite();
    document.getElementById("s-educationLink").style.color="yellow";
    document.getElementById("educationLink").style.color="yellow";
    navbarClose()
  };
  const movePortfolio = () => {
    Vportfolio.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    linkWhite();
    document.getElementById("s-portfolioLink").style.color="yellow";
    document.getElementById("portfolioLink").style.color="yellow";
    navbarClose()
  };
  const moveContact = () => {
    Vcontact.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    linkWhite();
    document.getElementById("s-contactLink").style.color="yellow";
    document.getElementById("contactLink").style.color="yellow";
    navbarClose()
  };

  const Vhome = useRef();
  const VAbout = useRef();
  const Veducation = useRef();
  const Vcontact = useRef();
  const Vportfolio = useRef();
  return (
    <>
      <div className="main">
        <div className="mergMain">

          <i className="bi bi-list" id="menu" onClick={navbar}></i>

          <BarNav
            moveHome={moveHome}
            moveAbout={moveAbout}
            moveEducation={moveEducation}
            movePortfolio={movePortfolio}
            moveContact={moveContact}
          />

          <BarSmallMedia
            moveHome={moveHome}
            moveAbout={moveAbout}
            moveEducation={moveEducation}
            movePortfolio={movePortfolio}
            moveContact={moveContact}
          />

          <Home home={Vhome} moveHome={moveHome} moveContact={moveContact} />

          <About about={VAbout} moveAbout={moveAbout} />

          <Education education={Veducation} moveEducation={moveEducation} />

          <Portfolio portfolio={Vportfolio} movePortfolio={movePortfolio} />

          <Contact contact={Vcontact} moveContact={moveContact} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
