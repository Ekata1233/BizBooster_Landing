import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../OurMession/OurMession.css'; // Importing the CSS file
import mession from '../../assets/our-mission.jpg'
import Testimonial from '../Testimonial/Testimonial';
function OurMession() {
    return (
        <div className="our-mession-section">
            <div className='our-mession-div'>
                <Container>
                    <Row className='text-white mb-5'>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                            <h2 className='fw-bold mb-4'>Our Mission</h2>
                            <p className='text'>At BizBooster, we’re not just about transactions; we’re here to transform. Picture us as your committed financial partner, dedicated to boosting your business. Whether you’re a seasoned entrepreneur or a newbie, BizBooster is your tailored path to elevate your success.

                                Our mission? Empower your business by linking you with top-tier brands, unlocking unbeatable profitability. In today’s fast-paced market, collaboration is everything, and that’s where BizBooster excels. We unite leading businesses, creating a thriving space where connections flourish, and profits soar.</p>
                            <h5 className=' fw-bold'>Step into our world. Every partnership with BizBooster propels you closer to bigger earnings and unparalleled growth.</h5>
                        </Col>
                        <Col>
                          <div className='mt-4'>
                          <img src={mession} className='img-fluid'/>
                          </div>
                        </Col>
                    </Row>
                </Container>
                <Testimonial/>
            </div>

        </div>
    );
}

export default OurMession;
