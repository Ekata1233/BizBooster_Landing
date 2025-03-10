import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Partner from "../Partner/Partner";
import '../Count/count.css'
import { motion } from "framer-motion"; // Import motion
function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration (2 seconds)
    const incrementTime = 50; // Update every 50ms
    const steps = duration / incrementTime;
    const stepSize = endValue / steps;

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return <h1>{count}+</h1>;
}

function Count() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="count-container">
      {/* Fixed Background */}
      <div className="count-background"></div>

      {/* Overlay Content */}
      <div className="count-overlay">
        <Container>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <h2 className="text-center text-white fw-bold mb-5">Behind Your Successful Carrers</h2>
        </motion.div>
          <div className="count-text">
            <Row>
              <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
              <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                <div className="blue-bg-transpernt text-center p-lg-5">
                 
                  <Counter endValue={20} />
                  <p className="text">Employee</p>
                  <p className="text">15+ Years of Strong Trust: Your Unwavering Trust in Market Excellence</p>
                </div>
                </motion.div>
                
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
              <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                <div className="blue-bg-transpernt text-center p-lg-5">
                 
                  <Counter endValue={2} />
                  <p className="text">Years of Trust</p>
                  <p className="text">15+ Years of Strong Trust: Your Unwavering Trust in Market Excellence</p>
                </div>
                </motion.div>
                
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
              <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                <div className="blue-bg-transpernt text-center p-lg-5">
                  <Counter endValue={15} />
                  <p className="text">Elite Top Brands</p>
                  <p className="text">15+ Years of Strong Trust: Your Unwavering Trust in Market Excellence</p>
                </div>
                </motion.div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
              <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                <div className="blue-bg-transpernt text-center p-lg-5">
                  <Counter endValue={30} />
                  <p className="text">Happy Partner</p>
                  <p className="text">15+ Years of Strong Trust: Your Unwavering Trust in Market Excellence</p>
                </div>
                </motion.div>
              </Col>
            </Row>
          
          </div>
          
        </Container>
        
      </div>
     
    </div>
  );
}

export default Count;
