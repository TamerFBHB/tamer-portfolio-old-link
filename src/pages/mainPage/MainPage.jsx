import Logo from "../../component/LOGO-T/Logo";
import "./MainPage.css";
import Lottie from "lottie-react";
import aboutAnimat from "../../component/letsGo.json"



const MainPage = () => {


  return (
    <>

      <div className="main">

<Logo />
        <h1>This is the old design for my Portfolio, and you can access the new design from this link</h1>
        <a href="https://portfolio-tamer.vercel.app/">https://portfolio-tamer.vercel.app/</a>
        <Lottie animationData={aboutAnimat} style={{ width: 350 }} />;

      </div>
    </>
  );
};

export default MainPage;
