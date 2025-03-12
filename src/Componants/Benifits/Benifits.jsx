import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TbCalendarDollar } from "react-icons/tb";
import { motion } from "framer-motion"; // Import motion
import image1 from '../../assets/dailypayout.png'
import image2 from '../../assets/passiveicon.png'
import image3 from '../../assets/graducation award.png'
import image4 from '../../assets/nationwide.png'
import image5 from '../../assets/managemobile.png'
import image6 from '../../assets/evergreenopportunities.png'
import image7 from '../../assets/boostsales.png'
import image8 from '../../assets/relaiblesupport.png'

function Benifits() {
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    
    return (
        <div className='bg-white text-dark  w-100 py-5 '>
            <h3 className='fw-bold blue text-center'>Benefits of</h3>
            <h2 className='fw-bold text-center mb-5'>Becoming a Profinity Partner</h2>

            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                                <div className='me-4'>
                                    <img src={image1} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Daily Payouts</h5>
                                    <p className='text-secondary text'>Get paid instantly every day without any delays, waiting, or interruptions, ensuring a seamless and hassle-free payment experience.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image2} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Passive Income</h5>
                                    <p className='text-secondary text'>Get Earn effortlessly with steady and reliable income, giving you financial stability and peace of mind while enjoying the freedom to focus on what truly matters.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image3} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Guaranteed Rewards</h5>
                                    <p className='text-secondary text'>Collect daily reward points for continuous value,
                                        ensuring consistent benefits and greater savings over time with ease.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image4} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Nationwide Operations</h5>
                                    <p className='text-secondary text'>Grow your business across India effortlessly, anytime and from anywhere,
                                        while reaching more customers and unlocking new opportunities.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image5} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Manage on Mobile</h5>
                                    <p className='text-secondary text'>Be part of the expanding financial and banking industry for long-term success,
                                        while unlocking endless growth opportunities and career advancements.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image6} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Evergreen Opportunities</h5>
                                    <p className='text-secondary text'>Step into the thriving financial and banking sector for enduring success,
                                        while building a stable and rewarding career for the future.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image7} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Boost Sales Effortlessly</h5>
                                    <p className='text-secondary text'>Receive daily reward points for continuous value,
                                        ensuring ongoing benefits and greater savings over time,
                                        while enjoying exclusive perks .</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4'>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className='d-flex shadow p-3'>
                            <div className='me-4'>
                                    <img src={image8} className='img-fluid '/>
                                </div>
                                <div>
                                    <h5 className='fw-bold'>Reliable Support</h5>
                                    <p className='text-secondary text'>Receive assistance anytime from our committed support team,
                                    ensuring quick solutions and a seamless experience.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benifits