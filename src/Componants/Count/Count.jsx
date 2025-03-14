import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Partner from "../Partner/Partner";
import { motion } from "framer-motion"; // Import motion
import '../Count/count.css'

// Counter Component
function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // Animation duration (2 seconds)
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

// Count Component
function Count() {
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://biz-booster-landingpage-backend.vercel.app/api/box/get")
      .then((response) => response.json())
      .then((response) => {
        console.log("API Response:", response); // Log the API response for debugging

        // Extract the `data` array from the response
        const dataArray = response.data;

        // Validate and filter out invalid entries
        const validData = dataArray.filter(
          (item) =>
            item && item.count !== undefined && item.title && item.description
        );

        // Sort the data based on boxNo to ensure correct mapping
        const sortedData = validData.sort((a, b) => a.boxNo - b.boxNo);
        setBoxData(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
        <Container className="py-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-center text-white fw-bold mb-5">
              Behind Your Successful Careers
            </h2>
          </motion.div>

          <div className="count-text py-3">
            <Row>
              {boxData.map((box, index) => (
                <Col key={index} xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scrollVariants}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}

                  >
                    <div className="blue-bg-transpernt text-center py-sm-2   custom-responsive-div">
                      <Counter
                        endValue={parseInt((box.count || "0").replace("+", ""))}
                      />
                      <p className="text">{box.title || "N/A"}</p>
                      <p className="text">{box.description || "N/A"}</p>
                    </div>

                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
//code ends

export default Count;