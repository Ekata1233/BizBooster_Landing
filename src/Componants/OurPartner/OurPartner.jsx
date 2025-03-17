import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import investment from '../../assets/investnment11.png';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function OurPartner() {
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState(null);
    const navigate=useNavigate()

    useEffect(() => {
        // Fetch data from the API
        fetch('https://biz-booster-landingpage-backend.vercel.app/api/item/get')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData); // Log the API response
                if (responseData.data && responseData.data.length > 0) {
                    setData(responseData.data[0]); // Access the first item in the array
                } else {
                    console.error('Invalid API response:', responseData);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!data) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    return (
        <div className="bg-white">
            <Container>
                <Row className="py-5">
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <motion.img
                            src={data.image}
                            fluid
                            className="w-100 h-100 invest-img"
                            alt="Investment"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h1 className="text-start blue fw-semibold mb-5">
                                {data.heading}
                                {/* <p className="mx-5 px-5 mt-3">&</p>
                                Earn up to 50,000 / month */}
                            </h1>
                            {data.features && data.features.map((text, index) => (
                                <p key={index} className="text text-secondary">
                                    <MdOutlineKeyboardDoubleArrowRight /> {text}
                                </p>
                            ))}
                            <Button className="btn-border bg-white text-dark rounded rounded-pill px-5 mt-5 py-2"
                            onClick={() => navigate("/becomeourpartner#contact-form")}
                            >
                                Apply Now
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurPartner;