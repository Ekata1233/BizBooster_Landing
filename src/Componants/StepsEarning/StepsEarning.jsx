import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import videoFile from '../../assets/vecteezy_man-scrolling-on-social-media-and-giving-love-react-to-posts_8249817.mp4';

const StepsEarning = () => {
  const steps = [
    { id: 1, title: "Download the App"},
    { id: 2, title: "Complete your KYC" },
    { id: 3, title: "Start your Earning" },
    
  ];

  return (
    <Container className="flex flex-col items-center py-10">
        <h1 className="text-center fw-bold blue">
        Start your Step towards Earning
        </h1>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <motion.div 
            className="relative flex flex-col items-center w-full max-w-4xl overflow-y-auto max-h-[80vh]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="flex flex-col items-center text-center p-6 bg-[#00509D] text-black rounded-2xl shadow-lg w-64 mb-6 relative"
              >
                <h1 className="text-3xl font-bold blue">{step.id}</h1>
                <h5 className="text-lg fw-bold mt-2 text-black">{step.title}</h5>
                <p className="text-sm mt-1 text-black">{step.description}</p>
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.5 }}
                    className="absolute bottom-[-40px]"
                  >
                    <FaArrowDown className="text-black text-3xl" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Col>
        <Col  xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <video width="100%" controls>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default StepsEarning;
