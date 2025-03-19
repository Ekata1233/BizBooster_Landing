import React, { useEffect, useState } from 'react';
import Hero from "../../assets/become-our-partner.jpg";
import BecomePartnerContact from './BecomePartnerConatct/BecomePartnerContact';
import { Col, Container, Row } from 'react-bootstrap';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import SEO from '../SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function BecomeOurPartner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://biz-booster-landingpage-backend.vercel.app/api/item/get')
      .then((response) => response.json())
      .then((response) => {
        console.log('API Response:', response); // Log the API response
        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('API response is not in the expected format:', response);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  // Filter data based on category
  const disclaimerData = data.filter((item) => item.category === 'disclaimer')[0];
  const gpData = data.filter((item) => item.category === 'gp')[0];
  const sgpData = data.filter((item) => item.category === 'sgp')[0];
  const pgpData = data.filter((item) => item.category === 'pgp')[0];

  return (
    <div>
      <div className="position-relative">
      <SEO title=" Become Our Partner " description="This is Become Our Partner Page." />
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
          <motion.h2 className='fw-bold blue' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
            {disclaimerData?.heading || 'Disclaimer'}
          </motion.h2>
          <motion.p className='fw-bold text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
            {disclaimerData?.subheading || 'Elevate Your Business with Our Premier Fintech B2B Platform'}
          </motion.p>
          <motion.p className='text text-secondary' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
            {disclaimerData?.description || 'Unlock a new era of excellence with our cutting-edge B2B platform tailored for the fintech landscape...'}
          </motion.p>
        </Container>

        {/* BizBooster Growth Partner (GP) Section */}
        <Container>
          <Row className='my-5 py-5'>
            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
              <motion.h3 className='fw-bold blue' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                {gpData?.heading || 'BizBooster Growth Partner (GP)'}
              </motion.h3>
              <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                <span className='fw-bold text'>Earnings Potential:</span> {gpData?.earning || '₹30,000 - ₹50,000/month'}
              </motion.p>
              <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                <span className='fw-bold text'>Requirements:</span> {gpData?.requirements || '₹99,999'}
              </motion.p>
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                Benefits:
              </motion.p>
              {gpData?.features?.map((feature, index) => (
                <motion.p className='text text-secondary' key={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center'>
              <motion.img src={gpData?.image} className='w-100 img-fluid' alt="GP Image" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp} />
            </Col>
          </Row>
        </Container>

        {/* Super Growth Partner (SGP) Section */}
        <div className='my-5 text-white py-5' style={{ backgroundColor: "#00509D" }}>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center'>
                <motion.img src={sgpData?.image} className='w-100 img-fluid' alt="SGP Image" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp} />
              </Col>
              <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                <motion.h3 className='fw-bold text-white' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  {sgpData?.heading || 'Super Growth Partner (SGP)'}
                </motion.h3>
                <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  <span className='fw-bold text'>Earnings Potential:</span> {sgpData?.earning || '₹50,000 - ₹70,000/month'}
                </motion.p>
                <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  <span className='fw-bold text'>Requirements:</span> {sgpData?.requirements || 'Appoint 10 GPs to become a Super Growth Partner (SGP)'}
                </motion.p>
                <motion.p className='fw-bold text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  Benefits:
                </motion.p>
                {sgpData?.features?.map((feature, index) => (
                  <motion.p className='text text-white' key={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                    <IoCheckmarkDoneCircle className='text-white fs-2 me-2' />{feature}
                  </motion.p>
                ))}
              </Col>
            </Row>
          </Container>
        </div>

        {/* Premium Growth Partner (PGP) Section */}
        <Container>
          <Row className='my-5 py-5'>
            <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
              <motion.h3 className='fw-bold blue' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                {pgpData?.heading || 'Premium Growth Partner (PGP)'}
              </motion.h3>
              <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                <span className='fw-bold text'>Earnings Potential:</span> {pgpData?.earning || '₹70,000 - ₹1,00,000/month'}
              </motion.p>
              <motion.p className='text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                <span className='fw-bold text'>Requirements:</span> {pgpData?.requirements || 'Appoint 10 SGPs to become a Premium Growth Partner (PGP)'}
              </motion.p>
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                Benefits:
              </motion.p>
              {pgpData?.features?.map((feature, index) => (
                <motion.p className='text text-secondary' key={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                Dedicated Support:
              </motion.p>
              {pgpData?.feature2?.map((feature, index) => (
                <motion.p className='text text-secondary' key={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} className='d-flex align-items-center'>
              <motion.img src={pgpData?.image} className='w-100 img-fluid' alt="PGP Image" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={fadeInUp} />
            </Col>
          </Row>
        </Container>
      </div>
      <BecomePartnerContact />
    </div>
  );
}

export default BecomeOurPartner;