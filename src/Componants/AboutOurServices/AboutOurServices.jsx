import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import srives from "../../assets/4.-BFSI-Services-1270x755.jpg";
import { motion, useInView } from "framer-motion";
import '../AboutOurServices/AboutOurServices.css';
import { useNavigate } from "react-router-dom";

function AboutOurServices() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  useEffect(() => {
    // Fetch icons from the API
    const fetchIcons = async () => {
      try {
        const response = await fetch(
          "https://biz-booster-landingpage-backend.vercel.app/api/images/get"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Log API response

        // Filter the response to only include items where category === "icons"
        const filteredIcons = data.find((item) => item.category === "icons");
        console.log("Filtered Icons:", filteredIcons); // Debugging: Log filtered icons

        if (filteredIcons && filteredIcons.images) {
          setIcons(filteredIcons.images); // Set only the images array from the filtered item
        } else {
          setError("No icons found in the response.");
        }
      } catch (error) {
        console.error("Error fetching icons:", error);
        setError("Failed to load icons. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white" id="about-services">
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">About Our Services</h2>
          <Row className="align-items-center">
            {/* Left Column - Services List (Animate from Left) */}
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} ref={ref}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : error ? (
                  <Alert variant="danger" className="text-center">
                    {error}
                  </Alert>
                ) : icons.length === 0 ? (
                  <Alert variant="warning" className="text-center">
                    No icons found.
                  </Alert>
                ) : (
                  <Row>
                    {icons.slice(0, 9).map((iconUrl, index) => (
                      <Col key={index} xs={6} sm={6} md={4} lg={4} xl={4} xx={4}>
                        <div
                          className="hover-card position-relative rounded rounded-4 mb-2"
                          onClick={() => navigate("/moduledescription")}
                        >
                          <motion.div
                            whileHover={{ scale: 1 }}
                            className="background-overlay"
                          />
                          <img
                            src={iconUrl}
                            className="img-fluid position-relative"
                            alt={`Service Icon ${index + 1}`}
                            style={{ zIndex: 2 }}
                            onError={(e) => {
                              e.target.src = "path/to/fallback-image.png"; // Fallback image if the URL is invalid
                            }}
                          />
                          <p
                            className="text-center position-relative"
                            style={{ fontWeight: "600", zIndex: 2 }}
                          >
                            {/* Service {index + 1} Fallback title */}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </motion.div>
            </Col>

            {/* Right Column - Image (Animate from Right) */}
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} ref={ref}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={srives} alt="Services" className="img-fluid my-2" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutOurServices;




