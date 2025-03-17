import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import servicesImage from "../../assets/4.-BFSI-Services-1270x755.jpg";
import { motion, useInView } from "framer-motion";
import '../AboutOurServices/AboutOurServices.css';
import { useNavigate } from "react-router-dom";

// Import service icons
import servicessicon1 from '../../assets/onboarding_icon.png';
import servicessicon2 from "../../assets/business_icon.png";
import servicessicon3 from "../../assets/brand_marketing_icon.png";
import servicessicon4 from "../../assets/legal_services_icon.png";
import servicessicon5 from "../../assets/home_service_icon.png";
import servicessicon6 from "../../assets/it _services_icon.png";
import servicessicon7 from "../../assets/education_icon.png";
import servicessicon8 from "../../assets/finance_icon.png";
import servicessicon9 from "../../assets/franchise_icon.png";

function AboutOurServices() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  const services = [
    { icon: servicessicon1, title: "Onboarding" },
    { icon: servicessicon2, title: "Business" },
    { icon: servicessicon3, title: "Branding/Marketing" },
    { icon: servicessicon4, title: "Legal Services" },
    { icon: servicessicon5, title: "Home Services" },
    { icon: servicessicon6, title: "IT Services" },
    { icon: servicessicon7, title: "Education" },
    { icon: servicessicon8, title: "Finance Services" },
    { icon: servicessicon9, title: "Franchise" },
  ];

  return (
    <div className="bg-white" id="about-services">
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">About Our Services</h2>
          <Row className="align-items-center">
            <Col xs={12} md={6} ref={ref}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Row>
                  {services.map((service, index) => (
                    <Col key={index} xs={6} md={4}>
                      <div className="hover-card position-relative rounded rounded-4 mb-2">
                        <motion.div whileHover={{ scale: 1.1 }} className="background-overlay" />
                        <img
                          src={service.icon}
                          className="img-fluid position-relative"
                          alt={service.title}
                          style={{ zIndex: 2 }}
                        />
                        <p
                          className="text-center position-relative"
                          style={{ fontWeight: "600", zIndex: 2 }}
                        >
                          {service.title}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>

            <Col xs={12} md={6} ref={ref}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={servicesImage} alt="Services" className="img-fluid my-2" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutOurServices;
