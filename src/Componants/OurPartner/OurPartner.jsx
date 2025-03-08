import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import investment from '../../assets/investnment11.png'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from "framer-motion";
function OurPartner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {  // Adjust scroll threshold if needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='bg-white'>
              <Container>
            <Row className=" py-5">
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <motion.img
                        src={investment}
                        fluid
                        className="w-100 h-100 invest-img"
                        alt="Investment"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-start blue fw-semibold mb-5">
                            Become our Partner

                           <p className='mx-5 px-5 mt-3'>&</p>
                            Earn up to 50,000 / month
                        </h1>
                        {[
                            "200+ Brand Partnerships within 5 minutes",
                            "5000+ Earning opportunity",
                            "Earn from Day 1",
                            "24/7 Earning",
                            "Zero Investment",
                        ].map((text, index) => (
                            <p key={index} className="text text-secondary">
                                <MdOutlineKeyboardDoubleArrowRight /> {text}
                            </p>
                        ))}
                        <Button className="btn-border bg-white text-dark rounded rounded-pill px-5 mt-5 py-2">
                            Apply Now
                        </Button>
                    </motion.div>
                </Col>
            </Row>
        </Container>

        </div>
      
    )
}

export default OurPartner