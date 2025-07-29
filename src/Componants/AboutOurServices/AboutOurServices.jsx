import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import servicesImage from "../../assets/4.-BFSI-Services-1270x755.jpg";
import { motion, useInView } from "framer-motion";
import '../AboutOurServices/AboutOurServices.css';
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";

function AboutOurServices() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const [services, setServices] = useState([]);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://landingpagebackend-nine.vercel.app/api/servicepage/get");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (id) => {
    if (window.innerWidth <= 1024) {
      // On mobile/tablet: Flip on first tap, navigate on second tap
      if (flipped[id]) {
        navigate(`/moduledescription/${id}`);
      } else {
        setFlipped(prev => ({ ...prev, [id]: true }));
      }
    } else {
      // On desktop: Navigate immediately
      navigate(`/moduledescription/${id}`);
    }
  };

  return (
    <div className="bg-white" id="about-services">
      <SEO title="About Our Services" description="This is the About Our Services Page." />
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">About Our Services</h2>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={6} ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Row>
                  {services.map((service, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                      <div
                        className={`flip-card ${flipped[service._id] ? 'flipped' : ''}`}
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
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>

            <Col xs={12} md={12} lg={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={servicesImage} alt="Services" className="img-fluid my-2 right-service-img" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutOurServices;
