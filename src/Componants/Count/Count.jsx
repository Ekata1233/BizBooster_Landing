import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import '../Count/count.css';
import SEO from "../SEO";

// Counter animation
function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 6000;
    const incrementTime = 50;
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
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    fetch("https://biz-booster-landingpage-backend.vercel.app/api/box/get")
      .then((res) => res.json())
      .then((res) => {
        const dataArray = res.data || [];
        const validData = dataArray.filter(
          (item) =>
            item &&
            item.count !== undefined &&
            item.title &&
            item.description
        );
        const sortedData = validData.sort((a, b) => a.boxNo - b.boxNo);
        setBoxData(sortedData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="count-container">
      <SEO title="Counter" description="This is Counter Page." />

      <div className="count-background" />

      {/* Sticky Title */}
      <h2 className="count-title-sticky">Behind Your Successful Careers</h2>

      {/* Content Overlay */}
      <div className="count-overlay">
        <Container className="py-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <Row className="g-3 justify-content-center">
              {boxData.map((box, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={3}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scrollVariants}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                  >
                    <div className="custom-responsive-div text-center">
                      <Counter endValue={parseInt((box.count || "0").replace("+", ""))} />
                      <p className="fw-bold text">{box.title || "N/A"}</p>
                      <p className="text">{box.description || "N/A"}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default Count;
