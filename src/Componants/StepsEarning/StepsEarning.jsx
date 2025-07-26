import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import "./StepsEarning.css";

const steps = [
  { id: 1, title: "Download the App" },
  { id: 2, title: "Complete your KYC" },
  { id: 3, title: "Get Started" },
];

const StepsEarning = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const { ref: buttonRef, inView: showButtons } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // ✅ Fetch Social Links
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const res = await fetch("https://landingpagebackend-nine.vercel.app/api/footer/get");
        const data = await res.json();
        if (Array.isArray(data.socialLinks)) {
          setSocialLinks(data.socialLinks);
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  // ✅ Fetch Preview Images from other backend
  useEffect(() => {
    const fetchPreviewImages = async () => {
      try {
        const res = await fetch("https://landingpagebackend-nine.vercel.app/api/item/get");
        const data = await res.json();
        if (Array.isArray(data.data)) {
          const filtered = data.data.filter(
            (item) => item.category === "preview" || item.category === "animation"
          );
          setPreviewImages(filtered);
        }
      } catch (error) {
        console.error("Error fetching preview images:", error);
      }
    };

    fetchPreviewImages();
  }, []);

  const playLink = socialLinks.find((l) => l.type === "playstore");
  const appLink = socialLinks.find((l) => l.type === "appstore");

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="infographic-container">
      <div className="overlay"></div>

      <Particles
        className="particles-bg"
        init={particlesInit}
        options={{
          background: { color: { value: "#0a0f2c" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00cfff" },
            links: { enable: true, color: "#00cfff", distance: 150 },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
            number: { value: 80 },
          },
        }}
      />

      <div className="top-bar"></div>
      <h2 className="title mb-5">Start Your Journey to Earn</h2>

      <Container>
        <Row className="align-items-center steps-row">
          <Col md={6} className="left-column">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="step-block" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className={`step-number ${i === 0 ? "hex" : "circle"}`}>{step.id}</div>
                  <div className="step-card">{step.title}</div>
                </div>
                {i !== steps.length - 1 && <div className="vertical-arrow" />}
              </React.Fragment>
            ))}
          </Col>

          <Col md={6} className="right-column">
            {previewImages.length > 0 && (
              <img
                src={previewImages[0].image}
                alt="App Preview"
                className="image-animated"
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={`final-buttons ${showButtons ? "show" : ""}`} ref={buttonRef}>
              {playLink && (
                <a href={playLink.link} target="_blank" rel="noreferrer" className="store-link bounce-in">
                  <img src={playLink.image} alt="Google Play" />
                </a>
              )}
              {appLink && (
                <a href={appLink.link} target="_blank" rel="noreferrer" className="store-link bounce-in">
                  <img src={appLink.image} alt="App Store" />
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepsEarning;
