import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Count/count.css";
import SEO from "../SEO";

// Counter animation component
function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 30;
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

  return <h1 className="counter-value">{count}+</h1>;
}

function Count() {
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
  fetch("https://landingpagebackend-nine.vercel.app/api/counts/get")
    .then((res) => res.json())
    .then((dataArray) => {
      console.log("Fetched array:", dataArray);
      const sortedData = dataArray.sort((a, b) => parseInt(a.boxNo) - parseInt(b.boxNo));
      setBoxData(sortedData);
    })
    .catch((err) => console.error("Error fetching count data:", err));
}, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="count-container">
      <SEO title="Counter" description="This is Counter Page." />
      <div className="count-background" />

      <h2 className="count-title-sticky">Behind Your Successful Careers</h2>

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
              {/* {boxData.length === 0 && (
                <p style={{ color: "red", textAlign: "center" }}>
                  No data found from API.
                </p>
              )} */}

              {boxData.map((box, index) => {
                console.log("Rendering box:", box);
                return (
                  <Col key={index} xs={12} sm={6} md={6} lg={3}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={scrollVariants}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      <div className="custom-responsive-div text-center">
                        <Counter
                          endValue={parseInt(
                            (box.count || "0").replace("+", "")
                          )}
                        />
                        <p className="counter-title">{box.title || "No Title"}</p>
                        <p className="counter-description">{box.description || "No Description"}</p>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default Count;
