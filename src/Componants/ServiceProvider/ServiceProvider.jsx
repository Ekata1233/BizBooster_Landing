import React, { useState } from 'react';
import Hero from "../../assets/service-provider.jpg";
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../ServiceProvider/ServiceProvider.css';

function ServiceProvider() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            console.log('File uploaded:', file.name);
        } else {
            console.log('No file selected');
        }
    };

    const inputVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div>
            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <h1 className="text-white fw-bold text-start">Services Provider...</h1>
                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-background'></div>
                <div className='contact-overlay'>
                    <Container className='py-5'>
                        <h1 className='text-center fw-bold'>Connect with Our Service Team</h1>
                        <Form className='py-5' onSubmit={handleSubmit}>
                            <Row>
                                {['First Name', 'Middle Name', 'Last Name'].map((label, idx) => (
                                    <Col xs={12} sm={6} md={12} lg={4} xl={4} xxl={4} className='mb-4' key={idx}>
                                        <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                            <Form.Group controlId={`input-${label.replace(' ', '').toLowerCase()}`}>
                                                <Form.Label className='text'>{label}</Form.Label>
                                                <Form.Control type="text" placeholder={`Enter ${label.toLowerCase()}`} />
                                            </Form.Group>
                                        </motion.div>
                                    </Col>
                                ))}
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Phone No.</Form.Label>
                                            <Form.Control type="text" placeholder="Enter phone number" />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Address</Form.Label>
                                            <Form.Control type="text" placeholder="Enter address" />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Modules</Form.Label>
                                            <Form.Select>
                                                <option>Select Modules</option>
                                                <option value="1">Onboarding</option>
                                                <option value="2">Business</option>
                                                <option value="3">Branding/Marketing</option>
                                                <option value="4">Legal Services</option>
                                                <option value="5">Home Services</option>
                                                <option value="6">IT Services</option>
                                                <option value="7">Education</option>
                                                <option value="8">Finance Services</option>
                                                <option value="9">Franchise</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label>Upload File</Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={handleFileChange}
                                                accept=".jpg,.jpeg,.png,.pdf"
                                            />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                            </Row>
                            <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                <Form.Group>
                                    <Form.Label className='text'>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </motion.div>
                            <Button type="submit" className='w-100 mt-5 py-2 text-white fw-bold' style={{ backgroundColor: "#00509D" }}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ServiceProvider;