import React, { useEffect, useState, useRef } from "react"; // Added useRef here
import { Col, Container, Row } from "react-bootstrap";
import servicesImage from "../../assets/4.-BFSI-Services-1270x755.jpg";
import { motion, useInView } from "framer-motion";
import '../AboutOurServices/AboutOurServices.css';
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";

function AboutOurServices() {
  const ref = useRef(null); // Now useRef is defined
  const navigate = useNavigate();
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const [services, setServices] = useState([]); // State to store fetched services

  // Fetch services from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://landingpagebackend-nine.vercel.app/api/servicepage/get");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Services:", data.data); // Debugging: Log fetched data
        setServices(data.data); // Set the fetched services to state
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Handle click on a service card
  const handleServiceClick = (id) => {
    navigate(`/moduledescription/${id}`); // Navigate to the module description page with the service ID
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white" id="about-services">
      <SEO title="About Our Services" description="This is the About Our Services Page." />
      <div className="div-bg py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5" >About Our Services</h2>
          <Row className="align-items-center">
            <Col xs={12} md={6} ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Row>
  {services.map((service, index) => (
    <Col key={index} xs={6} md={4}>
      <div
        className="hover-card position-relative rounded rounded-4 mb-2 equal-box"
        onClick={() => handleServiceClick(service._id)}
      >
        <motion.div whileHover={{ scale: 1.1 }} className="background-overlay" />
        <img
          src={service.serviceImage}
          className="img-fluid position-absolute top-0 start-0 object-cover rounded rounded-4"
          alt={service.servicetitle}
          style={{ zIndex: 2, }}
        />
        <p
          className="text-center position-relative"
          style={{ fontWeight: "600", zIndex: 2 }}
        >
          {service.servicetitle}
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