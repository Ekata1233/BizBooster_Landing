import React, { useState, useEffect } from 'react';
import '../ContactUs/ContactUs.css';
import { Button, Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import { FaLocationDot, FaLocationArrow } from "react-icons/fa6";
import { MdCall } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import SEO from '../SEO';

function ContactUs() {
    const [formData, setFormData] = useState({
        FirstName: "", LastName: "", EmailAddress: "", PhoneNo: "", Services: "", Message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [heroImage, setHeroImage] = useState('');
    const [imageLoading, setImageLoading] = useState(true);

    // Fetch hero image from backend
    useEffect(() => {
       const fetchBanner = async () => {
      try {
        const response = await axios.get('https://landing-page-backend-alpha.vercel.app/api/banner/get/Contactus');
        if (response.data && response.data.length > 0) {
          setHeroImage(response.data[0].imageUrl);
        }
      } catch (error) {
        console.error('Error fetching gallery banner:', error);
      } finally {
        setImageLoading(false);
      }
    };

    fetchBanner();
  }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
                setFormData({ FirstName: "", LastName: "", EmailAddress: "", PhoneNo: "", Services: "", Message: "" });
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            setError("Failed to submit the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <SEO title="Contact Us" description="This is Contact Us Page." />
            <div className="position-relative">
                {imageLoading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '400px', background: '#eee' }}>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <img src={heroImage} className="w-100" alt="Hero" style={{ height: "400px", objectFit: "cover" }} />
                )}
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center"></div>
            </div>

            <div className='contact-container'>
                <div className='contact-background'></div>
                <div className='contact-overlay'>
                    <Container className='py-5'>
                        <Row className="align-items-center mb-5 pt-5">
                            <Col lg={6}>
                                <h1 className="fw-bold">Get in touch for any kind of help and information</h1>
                            </Col>
                            <Col lg={6}>
                                <p className="text">We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.</p>
                            </Col>
                        </Row>

                        <Row>
                            {/* Contact Info */}
                            {/* <Col lg={6}>
                                <ContactInfo />
                            </Col> */}

                            {/* Contact Form */}
                            <Col lg={12}>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6} className="mb-4">
                                            <Form.Group controlId="firstName">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="FirstName"
                                                    value={formData.FirstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="LastName"
                                                    value={formData.LastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <Form.Group controlId="email">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="EmailAddress"
                                                    value={formData.EmailAddress}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} className="mb-4">
                                            <Form.Group controlId="phone">
                                                <Form.Label>Phone No.</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="PhoneNo"
                                                    value={formData.PhoneNo}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="services" className="mb-4">
                                        <Form.Label>Services</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Services"
                                            value={formData.Services}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="message" className="mb-4">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="Message"
                                            value={formData.Message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        className='w-100 text-white fw-bold'
                                        style={{ backgroundColor: "#00509D" }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Spinner size="sm" animation="border" /> : "Submit"}
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

// Contact Info Component
const ContactInfo = () => (
    <>
        <ContactRow icon={<FaLocationDot className='fs-3' />} title="Our head office address:" content="3rd Floor, C307, Amanora Chamber, Mall, Amanora Park Town, Hadapsar, Pune, Maharashtra 411002" />
        <ContactRow icon={<FaLocationArrow className='fs-3' />} title="Our Presence:" content="Hadapsar, Pune, Maharashtra" />
        <ContactRow icon={<MdCall className='fs-3' />} title="Call for help:" content="+91 93095 17500" />
        <ContactRow icon={<IoMdMail className='fs-3' />} title="Mail us for information:" content="info@bizbooster.com" />
    </>
);

const ContactRow = ({ icon, title, content }) => (
    <div className="custom-margin d-flex align-items-start gap-3 mb-3">
        <span className='p-4' style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}>
            {icon}
        </span>
        <span>
            <h4 className='fw-bold'>{title}</h4>
            <p>{content}</p>
        </span>
    </div>
);

export default ContactUs;
