import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import Hero from "./Components/Hero"; 
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Roadmap from "./Components/Roadmap";
import Echosystem from "./Components/Echosystem";
import Utility from "./Components/Utility"; 
import Mission from "./Components/Mission"; 
import vid from "./Images/heromedia.mp4";

function App() {
  return (
    <>
      <div id="Home" className="bghero py-0">
        <video
          // style={{ width: "500px", height: "500px" }}
          className="background-video "
          src={vid}
          autoPlay
          muted
          loop
          playsinline
        />
        <NavbarTop />
        <Hero />
      </div> 
      <Mission />
      <Echosystem /> 
      <Utility /> 
      <Roadmap />  

      <Footer />
    </>
  );
}

export default App;