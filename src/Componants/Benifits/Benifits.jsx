import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import SEO from '../SEO';

function Benifits() {
    const [benefits, setBenefits] = useState([]);

    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        fetch('https://landingpagebackend-nine.vercel.app/api/benifits/get')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setBenefits(data);
                } else {
                    console.error('Unexpected API response format:', data);
                }
            })
            .catch(error => console.error('Error fetching benefits:', error));
    }, []);

    return (
        <div className='bg-white text-dark w-100 py-5'>
            <SEO title="Benifits" description="This is Benifits Page." />

            <h3 className='fw-bold text-center' style={{ color: '#2164F4' }}>Benefits of</h3>
            <h2 className='fw-bold text-center mb-5'>Becoming a Profinity Partner</h2>

            <Container>
                <Row>
                    {benefits.map((benefit, index) => (
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4' key={index}>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={scrollVariants}
                                transition={{ duration: 1 }}
                                viewport={{ once: false }}
                            >
                                <div className='d-lg-flex shadow p-3'>
                                    <div className="me-4 d-flex justify-content-center">
                                        <Image
                                            src={benefit.imageUrl}
                                            className="img-fluid mx-auto d-block w-sm-50"
                                            alt={benefit.heading}
                                        />
                                    </div>
                                    <div>
                                        <h5 className='fw-bold'>{benefit.heading}</h5>
                                        <p className='text-secondary text'>{benefit.description}</p>
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
