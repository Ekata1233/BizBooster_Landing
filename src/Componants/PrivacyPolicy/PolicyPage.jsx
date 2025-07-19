import React, { useEffect, useState } from 'react';
import Hero from "../../assets/business-success-1.png";
import { Container, Spinner } from 'react-bootstrap';
import { motion } from "framer-motion";
import SEO from '../SEO';

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function PolicyPage() {
  const [policyData, setPolicyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://biz-booster.vercel.app/api/privacypolicy/get')
      .then((res) => res.json())
      .then((data) => {
        setPolicyData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching privacy policy:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <div>
      <SEO title="Privacy Policy" description="This is Privacy Policy Page." />

      {/* Hero Image */}
      <div className="position-relative">
        <img
          src={Hero}
          className="w-100"
          alt="Hero"
          style={{ height: "200px" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center" />
      </div>

      {/* Content */}
      <Container>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={scrollVariants}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="blue fw-bold text-center py-5"
        >
          Privacy Policy
        </motion.h1>

        {policyData?.sections?.map((section, index) => (
          <motion.div
            key={index}
            className="mb-5"
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <motion.p className="fw-bold text">{section.title}</motion.p>
            <motion.p className="text text-secondary">{section.description}</motion.p>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}

export default PolicyPage;
