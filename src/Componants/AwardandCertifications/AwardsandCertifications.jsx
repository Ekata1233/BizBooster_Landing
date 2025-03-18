import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../AwardandCertifications/AwardsandCertifications.css';

const animationProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

function AwardsandCertifications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://biz-booster-landingpage-backend.vercel.app/api/images/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the API response
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filterImagesByCategory = (category) => {
    const categoryData = data.find(item => item.category === category);
    return categoryData ? categoryData.images : [];
  };

  const awards = filterImagesByCategory('award');
  const certificates = filterImagesByCategory('certification');
  const openingCeremony = filterImagesByCategory('ceremony');
  const event2023 = filterImagesByCategory('event1');
  const event2024 = filterImagesByCategory('event2');

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5">Error: {error}</div>;
  }

  return (
    <div className='awards-container'>
      <div className='awards-background'></div>
      <div className='awards-overlay'>
        {/* Awards Section */}
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Awards</motion.h1>
            {awards.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img
                  {...animationProps}
                  src={imageUrl}
                  alt={`Award ${index + 1}`}
                  loading="lazy"
                  className="award-img"
                />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Certifications Section */}
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Certifications</motion.h1>
            {certificates.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img
                  {...animationProps}
                  src={imageUrl}
                  alt={`Certificate ${index + 1}`}
                  loading="lazy"
                  className="award-img"
                />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Opening Ceremony Section */}
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Opening Ceremony</motion.h1>
            {openingCeremony.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img
                  {...animationProps}
                  src={imageUrl}
                  alt={`Ceremony ${index + 1}`}
                  loading="lazy"
                  className="award-img"
                />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Event of 2023 Section */}
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Event of 2023</motion.h1>
            {event2023.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img
                  {...animationProps}
                  src={imageUrl}
                  alt={`Event 2023 ${index + 1}`}
                  loading="lazy"
                  className="award-img"
                />
              </Col>
            ))}
          </Row>
        </Container>

        {/* Event of 2024 Section */}
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Event of 2024</motion.h1>
            {event2024.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img
                  {...animationProps}
                  src={imageUrl}
                  alt={`Event 2024 ${index + 1}`}
                  loading="lazy"
                  className="award-img"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AwardsandCertifications;