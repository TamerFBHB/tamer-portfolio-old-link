import "./MainPage.css";
import { useEffect, useRef, useState } from "react";
import About from "../about/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Portfolio from "../portfolio/Portfolio";
import BarNav from "../navBar/BarNav";
import Home from "../Home/Home";
import BarSmallMedia from "../BarSmallMedia/BarSmallMedia";
import { RingLoader } from "react-spinners";


const MainPage = () => {
  //****  move to close or open nav bar in small media ***** 
  const [stateClose, setstateClose] = useState()

  //show module
  const [show, setShow] = useState()


  // ***** color yellow link *****
  const [stateColor, sestateColor] = useState(0)

  // ***** scrollIntoView for pages *****
  const moveHome = () => {
    Vhome.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    sestateColor(0)
    setstateClose(0)
    setShow(0)

  };
  const moveAbout = () => {
    VAbout.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    sestateColor(1)
    setstateClose(0)
    setShow(0)
  };

  const moveEducation = () => {
    Veducation.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    sestateColor(2)
    setstateClose(0)
    setShow(0)
  };
  const movePortfolio = () => {
    Vportfolio.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    sestateColor(3)
    setstateClose(0)
  };
  const moveContact = () => {
    Vcontact.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
    sestateColor(4)
    setstateClose(0)
    setShow(0)
  };

  const Vhome = useRef();
  const VAbout = useRef();
  const Veducation = useRef();
  const Vcontact = useRef();
  const Vportfolio = useRef();
  // ***** to create loader *****
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="loader">
        {loading ? (
          <RingLoader
            color={"#113F67"} loading={loading} size={100} />
        ) : (

          <div className="main">
            <div className="mergMain">
              <i className="bi bi-list" id="menu" onClick={() => setstateClose("open")}></i>

              <BarNav
                stateColor={stateColor}
                moveHome={moveHome}
                moveAbout={moveAbout}
                moveEducation={moveEducation}
                movePortfolio={movePortfolio}
                moveContact={moveContact}
              />

              <BarSmallMedia
                stateClose={stateClose}
                stateColor={stateColor}
                moveHome={moveHome}
                moveAbout={moveAbout}
                moveEducation={moveEducation}
                movePortfolio={movePortfolio}
                moveContact={moveContact}
              />

              <Home home={Vhome} moveHome={moveHome} moveContact={moveContact} />

              <About about={VAbout} moveAbout={moveAbout} />

              <Education education={Veducation} moveEducation={moveEducation} />

              <Portfolio  show={show} setShow={setShow} portfolio={Vportfolio} movePortfolio={movePortfolio} />

              <Contact contact={Vcontact} moveContact={moveContact} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
