import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import aboutMobile from '../../assets/App-1fdh.png'

function WelcomeBizBooster() {
  return (
    <div className='my-5 py-lg-5'>
      <h1 className='fw-bold text-center'>Welcome To Profinity</h1>
      <h5 className='blue fw-bold text-center'>Every Step Towards Earning</h5>
      <Container>
        <Row className='mt-5 py-5'>
          <Col>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Our Friendly Bond:</span> Becoming a partner with Profinity means forging a deep friendship. We don't just offer financial services; we provide a treasure trove of expertise to enrich your journey.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Journey of Investments:</span> With us, it's not just an investment; it's a voyage. Walking alongside you, we act as your guide at every step, ensuring support in every investment.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Promise of Expertise:</span> We promise to provide you with expertise in the field of investment, making it come alive for every partner.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Opportunity to Be Companions:</span> Partnering with Profinity is the beginning of a new journey. Here, we initiate a new relationship where everything is for you.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Ease in Investing:</span> With Profinity, investing becomes effortless. You receive informed advice and the door to new opportunities and growth opens up.
              </div>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <img src={aboutMobile} className='img-fluid' alt='About Profinity'/>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Your Business, Our Concern:</span> Your business is our business. By becoming a partner, you gain a strong and special ally to help grow your business.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Comprehensive Support:</span> Our commitment is to stand by you, whatever it takes. You receive complete support and necessary guidance at every step.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>New Innovations, New Directions:</span> Becoming a partner means becoming a supporter of new innovations. We show you new directions that will further develop your investments.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Field of Development:</span> We not only offer financial advice but also assist in developing your business. Partnering with us brings the real joy of being a partner.
              </div>
              <div className='text py-2 text-secondary'>
                <span className='fw-bold text text-black'>Keep Growing with Profinity:</span> Partnering with Profinity is an experience, a journey. Let's move your step towards earning.
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WelcomeBizBooster
