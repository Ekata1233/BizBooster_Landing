import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Container from "react-bootstrap/esm/Container";
import "../Home/Home.css";

import OurPartner from "../OurPartner/OurPartner";
import Count from "../Count/Count";
import Partner from "../Partner/Partner";
import AboutOurServices from "../AboutOurServices/AboutOurServices";
import Benifits from "../Benifits/Benifits";
import StepsEarning from "../StepsEarning/StepsEarning";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import NationWide from "../NationWide/NationWide";
import SEO from "../SEO";

function Home() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("https://landingpagebackend-nine.vercel.app/api/banner/get/Home"); // Adjust base URL if needed
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div>
      <SEO title="Home" description="This is Home Page." />
      <Container fluid className="position-relative p-0">
        <div className="position-absolute top-0 start-0 w-100 z-3">
          <Header />
        </div>

        {/* Show first banner as hero background */}
        {banners.length > 0 && (
          <div className="position-relative hero-container">
            <img
              src={banners[0].imageUrl}
              className="animated-hero"
              alt="Home Banner"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow"></div>
          </div>
        )}

        <OurPartner />
        <Count />
        <Partner />
        <AboutOurServices />
        <Benifits />
        <NationWide />
        <StepsEarning />
        <Testimonial />
        <Contact />
      </Container>
    </div>
  );
}

export default Home;
