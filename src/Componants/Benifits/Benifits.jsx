import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

function Benifits() {
    const [benefits, setBenefits] = useState([]); // Initialize as an empty array
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        // Fetch data from the API
        fetch('https://biz-booster-landingpage-backend.vercel.app/api/item/get')
            .then(response => response.json())
            .then(data => {
                // Check if the response contains an array
                if (Array.isArray(data)) {
                    setBenefits(data); // Directly set the array
                } else if (data.data && Array.isArray(data.data)) {
                    setBenefits(data.data); // Extract the array from the response
                } else {
                    console.error('Unexpected API response format:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Function to get benefit by category
    const getBenefitByCategory = (category) => {
        return benefits.find(benefit => benefit.category === category);
    };

    return (
        <div className='bg-white text-dark w-100 py-5'>
            <h3 className='fw-bold blue text-center'>Benefits of</h3>
            <h2 className='fw-bold text-center mb-5'>Becoming a Profinity Partner</h2>

            <Container>
                <Row>
                    {['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'].map((category, index) => {
                        const benefit = getBenefitByCategory(category);
                        if (!benefit) return null; // Skip if no data for the category

                        return (
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='my-4' key={index}>
                                <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                                    <div className='d-flex shadow p-3'>
                                        <div className='me-4'>
                                            <img src={benefit.image} className='img-fluid' alt={benefit.heading} />
                                        </div>
                                        <div>
                                            <h5 className='fw-bold'>{benefit.heading}</h5>
                                            <p className='text-secondary text'>{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Benifits;