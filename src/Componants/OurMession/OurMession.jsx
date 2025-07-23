import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../OurMession/OurMession.css'; // Importing the CSS file
import Testimonial from '../Testimonial/Testimonial';
import { motion } from 'framer-motion';
import SEO from '../SEO';

function OurMession() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    setLoading(true);
    fetch('https://landingpagebackend-nine.vercel.app/api/item/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(apiData => {
        console.log('API Response:', apiData); // Log the response
        
        // Make sure we're setting an array, even if the API doesn't return one
        if (Array.isArray(apiData)) {
          setData(apiData);
        } else if (apiData && typeof apiData === 'object') {
          // If it's an object but not an array, try to extract data property
          // or convert to array if needed
          const dataArray = apiData.data || [apiData];
          setData(Array.isArray(dataArray) ? dataArray : []);
        } else {
          // Fallback to empty array
          setData([]);
          setError('Unexpected data format from API');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData([]); // Set data to an empty array in case of error
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Filter data based on category - only if data is an array
  const missionData = Array.isArray(data) ? data.find(item => item?.category === 'our mission') : null;
  const visionData = Array.isArray(data) ? data.find(item => item?.category === 'our vision') : null;

  // Display loading state while data is being fetched
  if (loading) {
    return <div className="our-mession-section">Loading...</div>;
  }

  // Display error state if there was an error
  if (error) {
    return <div className="our-mession-section">Error loading data: {error}</div>;
  }

  return (
    <div className="our-mession-section">
      <SEO title=" Our Mession & Our Vision " description="This is Our Misson & Our Vision Page." />
      <div className='our-mession-div'>
        <Container>
          {/* Our Mission Section */}
          <Row className='text-white mb-5 py-5'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='fw-bold mb-4'
              >
                {missionData?.heading || 'Our Mission'}
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <p className='text'>{missionData?.description || 'Mission description not available'}</p>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='mt-4'
              >
                {missionData?.image ? (
                  <img src={missionData.image} className='img-fluid' alt='Our Mission' />
                ) : (
                  <div className="placeholder-image">Mission Image Not Available</div>
                )}
              </motion.div>
            </Col>
          </Row>

          {/* Our Vision Section */}
          <Row className='text-white mb-lg-5 py-5'>
            <Col>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='mt-lg-4'
              >
                {visionData?.image ? (
                  <img src={visionData.image} className='img-fluid' alt='Our Vision' />
                ) : (
                  <div className="placeholder-image">Vision Image Not Available</div>
                )}
              </motion.div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='fw-bold mb-4 text-end'
              >
                {visionData?.heading || 'Our Vision'}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={scrollVariants}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='text text-end'
              >
                {visionData?.description || 'Vision description not available'}
              </motion.p>
            </Col>
          </Row>
        </Container>
        <Testimonial />
      </div>
    </div>
  );
}

export default OurMession;