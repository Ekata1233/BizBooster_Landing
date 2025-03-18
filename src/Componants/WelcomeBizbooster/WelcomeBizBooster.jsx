import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

function WelcomeBizBooster() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://biz-booster-landingpage-backend.vercel.app/api/content/get')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(apiData => {
        console.log('API Response:', apiData); // Log the response
        // Access the first element of the array
        setData(apiData[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData({ error: 'Failed to load data. Please try again later.' });
      });
  }, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Display error message if API fails
  if (data?.error) {
    return <div>{data.error}</div>;
  }

  // Display loading state while data is being fetched
  if (!data || !data.content) {
    return <div>Loading...</div>;
  }

  return (
    <div className='my-5 py-lg-5'>
      <Container>
        <h1 className='fw-bold text-center double-underline'>{data.Heading}</h1>
        <h5 className='blue fw-bold text-center mt-4'>{data.Subheading}</h5>
        <Row className='mt-5 py-5'>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {data.content.slice(0, 5).map((item) => (
                <div key={item._id} className='text py-2 text-secondary'>
                  <span className='fw-bold text text-black'>{item.title}:</span> {item.description}
                </div>
              ))}
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <img src={data.image} className='img-fluid my-5 my-lg-0' alt='About Profinity' />
            </motion.div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {data.content.slice(5).map((item) => (
                <div key={item._id} className='text py-2 text-secondary'>
                  <span className='fw-bold text text-black'>{item.title}:</span> {item.description}
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomeBizBooster;