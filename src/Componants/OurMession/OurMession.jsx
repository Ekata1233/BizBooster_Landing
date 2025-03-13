import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../OurMession/OurMession.css'; // Importing the CSS file
import mession from '../../assets/our-mission.jpg'
import vision from '../../assets/ourmission.jpg'
import Testimonial from '../Testimonial/Testimonial';
import { motion } from "framer-motion";
function OurMession() {
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    return (
        <div className="our-mession-section">
            <div className='our-mession-div'>
                <Container>
                    <Row className='text-white mb-5 py-5'>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='fw-bold mb-4'>Our Mission</motion.h2>
                           <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                           >
                           <p className='text'>At BizBooster, we’re not just about transactions; we’re here to transform. Picture us as your committed financial partner, dedicated to boosting your business. Whether you’re a seasoned entrepreneur or a newbie, BizBooster is your tailored path to elevate your success.

Our mission? Empower your business by linking you with top-tier brands, unlocking unbeatable profitability. In today’s fast-paced market, collaboration is everything, and that’s where BizBooster excels. We unite leading businesses, creating a thriving space where connections flourish, and profits soar.</p>
                           </motion.div>
                            <motion.h5
                             initial="hidden"
                             whileInView="visible"
                             variants={scrollVariants}
                             transition={{ duration: 1 }}
                             viewport={{ once: false }}
                            className=' fw-bold'>Step into our world. Every partnership with BizBooster propels you closer to bigger earnings and unparalleled growth.</motion.h5>
                        </Col>
                        <Col>
                          <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          variants={scrollVariants}
                          transition={{ duration: 1 }}
                          viewport={{ once: false }}
                          className='mt-4'>
                          <img src={mession} className='img-fluid'/>
                          </motion.div>
                        </Col>
                    </Row>
                    <Row className='text-white mb-lg-5 py-5'>
                    <Col>
                          <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          variants={scrollVariants}
                          transition={{ duration: 1 }}
                          viewport={{ once: false }}
                          className='mt-lg-4'>
                          <img src={vision} className='img-fluid'/>
                          </motion.div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='fw-bold mb-4 text-end'>Our Vision</motion.h2>
                            <motion.p 
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                            className='text text-end'>We strive to be the catalyst for business success, connecting entrepreneurs with top-tier brands and opportunities.
                            We envision a dynamic ecosystem where collaboration fuels innovation and sustainable progress.
                            By staying ahead of market trends, we ensure our partners thrive in a competitive landscape.
                            We are dedicated to building lasting relationships founded on trust, ambition, and shared goals.
                            Every partnership with BizBooster is a step towards greater achievements and financial success.
                            We aim to transform business journeys, unlocking new avenues for expansion and growth.
                            Together, we shape a future where businesses excel, partnerships flourish, and profits soar.</motion.p>
                            <motion.h5
                            initial="hidden"
                            whileInView="visible"
                            variants={scrollVariants}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                             className=' fw-bold text-end'>Our vision is to empower businesses by creating strong, strategic partnerships that drive growth and profitability</motion.h5>
                        </Col>
                       
                    </Row>
                </Container>
                <Testimonial/>
            </div>

        </div>
    );
}

export default OurMession;
