import React, { useState } from 'react';
import Hero from "../../assets/istockphoto-1311934969-612x612.jpg";
import '../ContactUs/ContactUs.css';
import { Button, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // For making API requests
import { FaLocationArrow } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import SEO from '../SEO';

function ContactUs() {
    // State for form inputs
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        PhoneNo: "",
        Services: "",
        Message: ""
    });

    // State for loading and error handling
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(
                'https://biz-booster-landingpage-backend.vercel.app/api/contact/submit',
                formData
            );

            if (response.status === 201) {
                setSuccess(true);
                // Reset form fields
                setFormData({
                    FirstName: "",
                    LastName: "",
                    EmailAddress: "",
                    PhoneNo: "",
                    Services: "",
                    Message: ""
                });
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }
        } catch (error) {
            setError("Failed to submit the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
                   <SEO title=" COntact Us " description="This is Contact Us Page." />

            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    {/* <h1 className="text-white fw-bold text-start">Contact Us...</h1> */}
                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-background'></div>
                <div className='contact-overlay'>
                    <Container className='py-5'>
                        <Row className="align-items-center mb-5 pt-5">
                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <h1 className="fw-bold">Get in touch for any kind of help and information</h1>
                            </Col>
                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <p className="text">
                                    We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationDot className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Our head office address:</h4>
                                        <p>3rd Floor, C307, Amanora Chamber, Mall, Amanora Park Town, Hadapsar, Pune, Maharashtra 411002</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationArrow  className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Our Presence:</h4>
                                        <p>Hadapsar, Pune, Maharashtra</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <MdCall className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Call for help:</h4>
                                        <p>+91 93095 17500</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <IoMdMail className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Mail us for information:</h4>
                                        <p>info@bizbooster.com</p>
                                    </span>
                                </div>
                            </Col> */}

                            <Col >
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className="mb-4">
                                            <Form.Group controlId="firstName">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="FirstName"
                                                    placeholder="Enter first name"
                                                    value={formData.FirstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className="mb-4">
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="LastName"
                                                    placeholder="Enter last name"
                                                    value={formData.LastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className="mb-4">
                                            <Form.Group controlId="email">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="EmailAddress"
                                                    placeholder="name@example.com"
                                                    value={formData.EmailAddress}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} className="mb-4">
                                            <Form.Group controlId="phone">
                                                <Form.Label>Phone No.</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="PhoneNo"
                                                    placeholder="Enter phone no."
                                                    value={formData.PhoneNo}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-4">
                                        <Form.Group controlId="services">
                                            <Form.Label>Services</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Services"
                                                placeholder="Enter services"
                                                value={formData.Services}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Form.Group controlId="message" className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="Message"
                                            placeholder="Enter your message"
                                            value={formData.Message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        className='w-100 text-white fw-bold border-none'
                                        style={{ backgroundColor: "#00509D" }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            "Submit"
                                        )}
                                    </Button>
                                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                                    {success && <Alert variant="success" className="mt-3">Form submitted successfully!</Alert>}
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;