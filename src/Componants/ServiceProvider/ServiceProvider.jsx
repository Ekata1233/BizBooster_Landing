import React, { useState } from 'react';
import Hero from "../../assets/service-provider.jpg";
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../ServiceProvider/ServiceProvider.css';

function ServiceProvider() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        module: '',
        message: '',
        file: null,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('middleName', formData.middleName);
        data.append('lastName', formData.lastName);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('email', formData.email);
        data.append('address', formData.address);
        data.append('module', formData.module);
        data.append('message', formData.message);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            const response = await fetch('https://biz-booster-landingpage-backend.vercel.app/api/service/submit-service', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Form submitted successfully!');

            // Reset the form after successful submission
            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                address: '',
                module: '',
                message: '',
                file: null,
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit form.');
        } finally {
            setLoading(false);
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
                                {['firstName', 'middleName', 'lastName'].map((field, idx) => (
                                    <Col xs={12} sm={6} md={12} lg={4} xl={4} xxl={4} className='mb-4' key={idx}>
                                        <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                            <Form.Group controlId={`input-${field}`}>
                                                <Form.Label className='text'>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name={field}
                                                    placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                                    value={formData[field]}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </motion.div>
                                    </Col>
                                ))}
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Phone No.</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Enter phone number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                placeholder="Enter address"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className='mb-4'>
                                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                                        <Form.Group>
                                            <Form.Label className='text'>Modules</Form.Label>
                                            <Form.Select
                                                name="module"
                                                value={formData.module}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Modules</option>
                                                <option value="Onboarding">Onboarding</option>
                                                <option value="Business">Business</option>
                                                <option value="Branding/Marketing">Branding/Marketing</option>
                                                <option value="Legal Services">Legal Services</option>
                                                <option value="Home Services">Home Services</option>
                                                <option value="IT Services">IT Services</option>
                                                <option value="Education">Education</option>
                                                <option value="Finance Services">Finance Services</option>
                                                <option value="Franchise">Franchise</option>
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
                                                name="file"
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
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </motion.div>
                            <Button
                                type="submit"
                                className='w-100 mt-5 py-2 text-white fw-bold'
                                style={{ backgroundColor: "#00509D" }}
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ServiceProvider;