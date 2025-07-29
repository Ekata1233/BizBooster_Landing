import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SEO from '../SEO';

function Benifits() {
  const [benefits, setBenefits] = useState([]);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    fetch('https://landingpagebackend-nine.vercel.app/api/benifits/get')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBenefits(data);
        } else {
          console.error('Unexpected API response format:', data);
        }
      })
      .catch((error) => console.error('Error fetching benefits:', error));
  }, []);

  return (
    <div className="bg-white text-dark w-100 py-5">
      <SEO title="Benifits" description="This is Benifits Page." />

      <h3 className="fw-bold text-center" style={{ color: '#2164F4' }}>
        Benefits of
      </h3>
      <h2 className="fw-bold text-center mb-5">Becoming a Profinity Partner</h2>

      <Container>
        <Row className="justify-content-center">
          {benefits.map((benefit, index) => (
            <Col
              key={index}
              xs={12}
              sm={10}
              md={6}
              lg={6}   // 2 cards per row on laptops (≥992px)
              xl={4}   // 3 cards per row on desktops (≥1200px)
              xxl={4}
              className="mb-4 d-flex"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.05 }}
                variants={scrollVariants}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="w-100"
              >
                <div
                  className="d-flex shadow p-3 rounded-4 h-100 align-items-center"
                  style={{
                    minHeight: '180px',
                    background: 'linear-gradient(135deg, #f9fcff, #e3efff)',
                    border: '1px solid #dbe9ff',
                    gap: '20px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={benefit.imageUrl}
                      alt={benefit.heading}
                      className="img-fluid"
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                      }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-2" style={{ color: '#2164F4' }}>
                      {benefit.heading}
                    </h6>
                    <p className="text-secondary mb-0 small">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Benifits;
