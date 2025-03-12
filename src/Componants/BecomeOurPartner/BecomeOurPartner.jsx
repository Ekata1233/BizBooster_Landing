import React from 'react'
import Hero from "../../assets/become-our-partner.jpg";
import BecomePartnerContact from './BecomePartnerConatct/BecomePartnerContact'
import { Col, Container, Row } from 'react-bootstrap';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import image1 from '../../assets/amico.png'
import image2 from '../../assets/cuate.png'
import image3 from '../../assets/premium.png'
import { motion } from "framer-motion";
import NationWide from '../NationWide/NationWide';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
function BecomeOurPartner() {
    return (
        <div>
            <div className="position-relative">
                <motion.img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <h1 className="text-white fw-bold text-start">Become Our Partner...</h1>

                </div>
            </div>
            <div className='py-5 my-5'>
                <Container className='mb-5 pb-5'>
                    <motion.h2 className='fw-bold blue'  initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Disclaimer</motion.h2>
                    <motion.p className='fw-bold text'  initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Elevate Your Business with Our Premier Fintech B2B Platform</motion.p>
                    <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Unlock a new era of excellence with our cutting-edge B2B platform tailored for the fintech landscape. As the exclusive partner of over 200 renowned brands, we provide unmatched access to premium products and services across India. Our innovative business model ensures seamless transactions and offers advance payouts, empowering partners to accelerate their growth effortlessly.

                        With a PAN India operational network, we bridge businesses with limitless opportunities, driving success beyond geographical boundaries. Step into the future of B2B partnerships—where innovation, trust, and efficiency converge. Partner with us and redefine what's possible.</motion.p>
                </Container>
                <Container>
                    <Row className='my-5 py-5'>
                        <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                            <motion.h3 className='fw-bold blue' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>BizBooster Growth Partner (GP)</motion.h3>
                            <motion.p className=' text ' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><span className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Earnings Potential:</span> ₹30,000 - ₹50,000/month</motion.p>
                            <motion.p className=' text ' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><span className='fw-bold text'>Requirements </span> ₹99,999</motion.p>
                            <motion.p className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Benefits: </motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />Commission: 5% to 15% per successful lead</motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral</motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />Business Onboarding Bonus: Up to ₹10,000 per business/service</motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />Access to pre-designed outreach & promotion tools</motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />Support within 3-6 hours</motion.p>
                            <motion.p className=' text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='blue fs-2 me-2' />5X Return Guarantee</motion.p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
                            <motion.img src={image1} className='w-100 img-fluid '  initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}/>
                        </Col>
                    </Row>


                </Container>
                <div className='my-5  text-white py-5' style={{ backgroundColor: " #00509D" }}>
                    <Container>
                        <Row>
                        
                            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center'>
                            
                                <motion.img src={image2} className='w-100 img-fluid ' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp} />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                                <motion.h3 className='fw-bold text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Super Growth Partner (SGP)</motion.h3>
                                <motion.p className=' text ' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><span className='fw-bold text'>Earnings Potential:</span> ₹50,000 - ₹70,000/month</motion.p>
                                <motion.p className=' text ' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><span className='fw-bold text'>Requirements </span>  Appoint 10 GPs to become a Super Growth Partner (SGP)</motion.p>
                                <motion.p className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Benefits: </motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Commission: 5% to 15% per successful lead</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Team Revenue Share: 5% to 10% from the team’s performance</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Business Onboarding Bonus: Up to ₹10,000 per business/service</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Access to pre-designed outreach & promotion tools</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />Support within 3-6 hours</motion.p>
                                <motion.p className=' text text-white' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}><IoCheckmarkDoneCircle className='text-white fs-2 me-2' />5X Return Guarantee</motion.p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                <Row className='my-5 py-5'>
    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
        <motion.h3 className='fw-bold blue' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Premium Growth Partner (PGP)</motion.h3>
        <motion.p className='text'>
            <span className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Earnings Potential:</span> ₹70,000 - ₹1,00,000/month
        </motion.p>
        <motion.p className='text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <span className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Requirements:</span> Appoint 10 SGPs to become a Premium Growth Partner (PGP)
        </motion.p>
        <motion.p className='fw-bold text' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>Benefits:</motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Commission: 5% to 15% per successful lead
        </motion.p>
        motion.<motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Team Revenue Share: 5% to 10% from the team’s performance
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Additional Team Revenue Share: 3% to 7% from GPs onboarded by direct GPs
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />SBusiness Onboarding Bonus: Up to ₹10,000 per business/service
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Access to pre-designed outreach & promotion tools
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Support within 3-6 hours & 5X Return Guarantee
        </motion.p>
        <motion.p className='fw-bold text'>Dedicated Support:</motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />24-hour response time for issue resolution
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Dedicated Relationship Manager
        </motion.p>
        <motion.p className='text text-secondary' initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}>
            <IoCheckmarkDoneCircle className='blue fs-2 me-2' />Exclusive marketing campaigns for brand visibility & lead generation
        </motion.p>
    </Col>

    <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center'>
        <motion.img src={image1} className='w-100 img-fluid' alt='PGP Image'  initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}/>
    </Col>
</Row>

                </Container>
            </div>
           
            <BecomePartnerContact />
        </div>
    )
}

export default BecomeOurPartner