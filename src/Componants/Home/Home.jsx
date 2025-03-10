import Header from "../Header/Header";
import Hero from "../../assets/hero-bg.jpg";
import Container from "react-bootstrap/esm/Container";
import "../Home/Home.css";
import OurPartner from "../OurPartner/OurPartner";
import Count from "../Count/Count";
import Partner from "../Partner/Partner";
import AboutOurServices from "../AboutOurServices/AboutOurServices";
import Benifits from "../Benifits/Benifits";
import StepsEarning from "../StepsEarning/StepsEarning";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <div className="bg-white">
      <Container fluid className="position-relative p-0">
        {/* Header positioned absolutely on top */}
        <div className="position-absolute top-0 start-0 w-100 z-3">
          <Header />
        </div>

        {/* Background Image with Animation */}
        <div className="position-relative hero-container">
          <img
            src={Hero}
            className="animated-hero"
            alt="Hero"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow"></div>
        </div>
        <OurPartner/>
        <Count/>
    {/* <OurPartner/> */}
    {/* <Partner/> */}
    <Partner/>
    <AboutOurServices/>
    <Benifits/>
    <StepsEarning/>
    <Testimonial/>
      </Container>
     
    </div>
  );
}

export default Home;
