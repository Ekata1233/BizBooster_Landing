import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';
import { motion } from "framer-motion";

function OurPartner() {
  const [data, setData] = useState([]);
  const [partnerData, setPartnerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const navigate = useNavigate();

  // Fetch data on mount
  useEffect(() => {
    fetch('https://landingpagebackend-nine.vercel.app/api/item/get')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(resData => {
        const allData = Array.isArray(resData.data) ? resData.data : [];
        const partnerItem = allData.find(item => item.category?.toLowerCase() === 'our partner');
        setData(allData);
        setPartnerData(partnerItem || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle scroll animation visibility only for desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);

    const handleScroll = () => {
      if (isDesktop) {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error}</div>;
  if (!partnerData) return <div>No Partner Data Found</div>;

  return (
    <div className="bg-white">
      <SEO title="Our Partner" description="This is Our Partner Page." />
      <Container>
        <Row className="py-5">
          <Col lg={6}>
            {/* Remove animation from image */}
            <img
              src={partnerData.image}
              className="w-100 h-100 invest-img"
              alt="Our Partner"
            />
          </Col>
          <Col lg={6}>
            {/* Animate text only on desktop */}
            {isDesktop ? (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h1 className="text-start blue fw-bold mb-5">{partnerData.heading}</h1>
                {partnerData.features?.map((feature, index) => (
                  <p key={index} className="text text-secondary" style={{ fontSize: '20px' }}>
                    <MdOutlineKeyboardDoubleArrowRight /> {feature}
                  </p>
                ))}
                <Button
                  className="btn-border bg-white text-dark rounded rounded-pill px-5 mt-5 py-2"
                  onClick={() => navigate("/becomeourpartner#contact-form")}
                >
                  Apply Now
                </Button>
              </motion.div>
            ) : (
              <div>
                <h1 className="text-start blue fw-semibold mb-5">{partnerData.heading}</h1>
                {partnerData.features?.map((feature, index) => (
                  <p key={index} className="text text-secondary">
                    <MdOutlineKeyboardDoubleArrowRight /> {feature}
                  </p>
                ))}
                <Button
                  className="btn-border bg-white text-dark rounded rounded-pill px-5 mt-5 py-2"
                  onClick={() => navigate("/becomeourpartner#contact-form")}
                >
                  Apply Now
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurPartner;
