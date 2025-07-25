import React, { useEffect, useState } from 'react';
import BecomePartnerContact from './BecomePartnerConatct/BecomePartnerContact';
import { Col, Container, Row } from 'react-bootstrap';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from 'axios';

import SEO from '../SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function BecomeOurPartner() {
  const [data, setData] = useState([]);
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(`https://landingpagebackend-nine.vercel.app/api/banner/page/Becomeourpartner`);
        if (response.data && response.data.length > 0) {
          setHeroImage(response.data[0].imageUrl);
        }
      } catch (error) {
        console.error('Error fetching gallery banner:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  
    fetch('https://landingpagebackend-nine.vercel.app/api/item/get')
      .then((response) => response.json())
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('API response is not in the expected format:', response);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Extract data for each category
  const disclaimerData = data.find((item) => item.category === 'disclaimer') || {};
  const gpData = data.find((item) => item.category === 'fetchtrue-growth-partner') || {};
  const sgpData = data.find((item) => item.category === 'super-growth-partner') || {};
  const pgpData = data.find((item) => item.category === 'premium-growth-partner') || {};

  return (
    <div>
      <div className="position-relative">
        <SEO title="Become Our Partner" description="This is Become Our Partner Page." />
        <motion.img
          src={heroImage} // fallback image if not found
          className="w-100"
          alt="Hero"
          style={{ height: "400px", objectFit: "cover" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
        </div>
      </div>

      <div className='py-5 my-5'>
        {/* Disclaimer Section */}
        <Container className='mb-5 pb-5'>
          <motion.h2 className='fw-bold blue' initial="hidden" whileInView="visible" variants={fadeInUp}>
            {disclaimerData?.heading || 'Disclaimer'}
          </motion.h2>
          <motion.p className='fw-bold text' initial="hidden" whileInView="visible" variants={fadeInUp}>
            {disclaimerData?.subheading || 'Elevate Your Business with Our Premier Fintech B2B Platform'}
          </motion.p>
          <motion.p className='text text-secondary' initial="hidden" whileInView="visible" variants={fadeInUp}>
            {disclaimerData?.description || 'Unlock a new era of excellence with our cutting-edge B2B platform tailored for the fintech landscape...'}
          </motion.p>
        </Container>

        {/* GP Section */}
        <Container>
          <Row className='my-5 py-5'>
            <Col lg={7}>
              <motion.h3 className='fw-bold blue' initial="hidden" whileInView="visible" variants={fadeInUp}>
                {gpData?.heading || 'BizBooster Growth Partner (GP)'}
              </motion.h3>
              <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                <span className='fw-bold text'>Earnings Potential:</span> {gpData?.earning || '₹30,000 - ₹50,000/month'}
              </motion.p>
              <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                <span className='fw-bold text'>Requirements:</span> {gpData?.requirements || '₹99,999'}
              </motion.p>
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" variants={fadeInUp}>Benefits:</motion.p>
              {gpData?.features?.map((feature, i) => (
                <motion.p className='text text-secondary' key={i} initial="hidden" whileInView="visible" variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
            </Col>
            <Col lg={5} className='d-flex align-items-center'>
              <motion.img src={gpData?.image} className='w-100 img-fluid' alt="GP" initial="hidden" whileInView="visible" variants={fadeInUp} />
            </Col>
          </Row>
        </Container>

        {/* SGP Section */}
        <div className='my-5 py-5 text-white' style={{ backgroundColor: "#00509D" }}>
          <Container>
            <Row>
              <Col lg={5} className='d-flex align-items-center'>
                <motion.img src={sgpData?.image} className='w-100 img-fluid' alt="SGP" initial="hidden" whileInView="visible" variants={fadeInUp} />
              </Col>
              <Col lg={7}>
                <motion.h3 className='fw-bold text-white' initial="hidden" whileInView="visible" variants={fadeInUp}>
                  {sgpData?.heading || 'Super Growth Partner (SGP)'}
                </motion.h3>
                <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                  <span className='fw-bold text'>Earnings Potential:</span> {sgpData?.earning || '₹50,000 - ₹70,000/month'}
                </motion.p>
                <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                  <span className='fw-bold text'>Requirements:</span> {sgpData?.requirements || 'Appoint 10 GPs to become a SGP'}
                </motion.p>
                <motion.p className='fw-bold text' initial="hidden" whileInView="visible" variants={fadeInUp}>Benefits:</motion.p>
                {sgpData?.features?.map((feature, i) => (
                  <motion.p className='text text-white' key={i} initial="hidden" whileInView="visible" variants={fadeInUp}>
                    <IoCheckmarkDoneCircle className='text-white fs-2 me-2' />{feature}
                  </motion.p>
                ))}
              </Col>
            </Row>
          </Container>
        </div>

        {/* PGP Section */}
        <Container>
          <Row className='my-5 py-5'>
            <Col lg={7}>
              <motion.h3 className='fw-bold blue' initial="hidden" whileInView="visible" variants={fadeInUp}>
                {pgpData?.heading || 'Premium Growth Partner (PGP)'}
              </motion.h3>
              <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                <span className='fw-bold text'>Earnings Potential:</span> {pgpData?.earning || '₹70,000 - ₹1,00,000/month'}
              </motion.p>
              <motion.p className='text' initial="hidden" whileInView="visible" variants={fadeInUp}>
                <span className='fw-bold text'>Requirements:</span> {pgpData?.requirements || 'Appoint 10 SGPs to become a PGP'}
              </motion.p>
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" variants={fadeInUp}>Benefits:</motion.p>
              {pgpData?.features?.map((feature, i) => (
                <motion.p className='text text-secondary' key={i} initial="hidden" whileInView="visible" variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
              <motion.p className='fw-bold text' initial="hidden" whileInView="visible" variants={fadeInUp}>Dedicated Support:</motion.p>
              {pgpData?.feature2?.map((feature, i) => (
                <motion.p className='text text-secondary' key={i} initial="hidden" whileInView="visible" variants={fadeInUp}>
                  <IoCheckmarkDoneCircle className='blue fs-2 me-2' />{feature}
                </motion.p>
              ))}
            </Col>
            <Col lg={5} className='d-flex align-items-center'>
              <motion.img src={pgpData?.image} className='w-100 img-fluid' alt="PGP" initial="hidden" whileInView="visible" variants={fadeInUp} />
            </Col>
          </Row>
        </Container>
      </div>

      <BecomePartnerContact />
    </div>
  );
}

export default BecomeOurPartner;
