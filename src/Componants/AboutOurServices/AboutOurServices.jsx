import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import servicesImage from "../../assets/4.-BFSI-Services-1270x755.jpg";
import { motion, useInView } from "framer-motion";
import "../AboutOurServices/AboutOurServices.css";
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";

function AboutOurServices() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  const [services, setServices] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobileTablet = screenWidth <= 1024;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://landingpagebackend-nine.vercel.app/api/servicepage/get"
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleCardClick = (id) => {
    if (isMobileTablet) {
      if (flipped[id]) {
        navigate(`/moduledescription/${id}`);
      } else {
        setFlipped((prev) => ({ ...prev, [id]: true }));
      }
    } else {
      navigate(`/moduledescription/${id}`);
    }
  };

  return (
    <div className="bg-white" id="about-services" style={{backgroundColor:''}}>
      <SEO title="About Our Services" description="This is the About Our Services Page." />
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5 " style={{color:'blue'}}>About Our Services</h2>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={6} ref={ref}>
              <Row>
                {services.map((service, index) => (
                  <Col key={service._id} xs={12} sm={6} md={6} lg={4} className="mb-4">
                    {isMobileTablet ? (
                      <motion.div
                        className="card-motion-wrapper"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="horizontal-card card-colored"
                          onClick={() => handleCardClick(service._id)}
                        >
                          <div className="horizontal-card-image">
                            <img src={service.serviceImage} alt={service.servicetitle} />
                          </div>
                          <div className="horizontal-card-content">
                            <p className="horizontal-card-title">{service.servicetitle}</p>
                            <p className="horizontal-card-desc">
                              {service.titleDescArray?.[0]?.description.slice(0, 120)}...
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div
                        className={`flip-card ${flipped[service._id] ? "flipped" : ""} card-colored`}
                        onClick={() => handleCardClick(service._id)}
                      >
                        <div className="flip-inner">
                          <div className="flip-front">
                            <img
                              src={service.serviceImage}
                              className="flip-img"
                              alt={service.servicetitle}
                            />
                            <p className="flip-title">{service.servicetitle}</p>
                          </div>
                          <div className="flip-back">
                            <p className="flip-title">{service.servicetitle}</p>
                            <p className="flip-desc">
                              {service.titleDescArray?.[0]?.description.slice(0, 120)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Col>
                ))}
              </Row>
            </Col>

            <Col xs={12} md={12} lg={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={servicesImage}
                  alt="Services"
                  className="img-fluid my-2 right-service-img"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutOurServices;
