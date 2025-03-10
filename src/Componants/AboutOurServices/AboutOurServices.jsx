import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import srives from "../../assets/4.-BFSI-Services-1270x755.jpg";
import servicesicon1 from "../../assets/onboarding_icon.png";
import servicesicon2 from "../../assets/business_icon.png";
import servicesicon3 from "../../assets/brand_marketing_icon.png";
import servicesicon4 from "../../assets/legal_services_icon.png";
import servicesicon5 from "../../assets/home_service_icon.png";
import servicesicon6 from "../../assets/it _services_icon.png";
import servicesicon7 from "../../assets/education_icon.png";
import servicesicon8 from "../../assets/finance_icon.png";
import servicesicon9 from "../../assets/franchise_icon.png";
import { motion, useInView } from "framer-motion";

function AboutOurServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  return (
    <div className="bg-white" id="about-services">
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">About Our Services</h2>
          <Row className="align-items-center">
            {/* Left Column - Services List (Animate from Left) */}
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} ref={ref}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Row>
                  {[
                    { icon: servicesicon1, title: "Onboarding" },
                    { icon: servicesicon2, title: "Business" },
                    { icon: servicesicon3, title: "Branding/Marketing" },
                    { icon: servicesicon4, title: "Legal Services" },
                    { icon: servicesicon5, title: "Home Services" },
                    { icon: servicesicon6, title: "IT Services" },
                    { icon: servicesicon7, title: "Education" },
                    { icon: servicesicon8, title: "Finance Services" },
                    { icon: servicesicon9, title: "Franchise" },
                  ].map((service, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={4} xl={4} xx={4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="rounded rounded-4 mb-2"
                        style={{ border: "1px solid #D9D9D9" }}
                      >
                        <img src={service.icon} className="img-fluid" alt={service.title} />
                        <p className="text-center" style={{ fontWeight: "600" }}>{service.title}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
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
