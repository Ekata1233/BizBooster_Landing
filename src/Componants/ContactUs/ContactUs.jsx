import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import { Button, Col, Container, Row, Spinner, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import SEO from '../SEO';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", services: "", message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [heroImage, setHeroImage] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get('https://landingpagebackend-nine.vercel.app/api/banner/get/Contactus');
        if (res.data?.length > 0) {
          setHeroImage(res.data[0].imageUrl);
        }
      } catch (err) {
        console.error('Error fetching hero image:', err);
      } finally {
        setImageLoading(false);
      }
    };
    fetchBanner();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Transform keys for backend
    const formattedPayload = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      EmailAddress: formData.email,
      PhoneNo: formData.phone,
      Services: formData.services,
      Message: formData.message
    };

    try {
      const res = await axios.post('https://landingpagebackend-nine.vercel.app/api/contact/create', formattedPayload);

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", services: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Error:", err);
      console.log("Error response:", err.response?.data);
      setError(err.response?.data?.message || "Failed to submit. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO title="Contact Us" description="Contact page for inquiries" />

      {/* Hero Section */}
      <div className="position-relative">
        {imageLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '400px', background: '#eee' }}>
            <Spinner animation="border" />
          </div>
        ) : (
          <img src={heroImage} alt="Contact Banner" className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
        )}
        <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center" />
      </div>

      {/* Contact Form */}
      <div className='contact-container'>
        <div className='contact-background' />
        <div className='contact-overlay'>
          <Container className='py-5'>
            <Row className="mb-5 pt-5">
              <Col lg={6}>
                <h1 className="fw-bold">Get in touch for any kind of help and information</h1>
              </Col>
              <Col lg={6}>
                <p>We're happy to discuss your needs. Fill out the form or reach out directly.</p>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              <Row>
                {[
                  { label: "First Name", name: "firstName" },
                  { label: "Last Name", name: "lastName" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phone" }
                ].map(({ label, name, type = "text" }) => (
                  <Col lg={6} className="mb-4" key={name}>
                    <Form.Group controlId={name}>
                      <Form.Label>{label}</Form.Label>
                      <Form.Control
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>

              <Form.Group controlId="services" className="mb-4">
                <Form.Label>Service</Form.Label>
                <Form.Control
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className='w-100 fw-bold text-white' style={{ backgroundColor: "#00509D" }} disabled={isLoading}>
                {isLoading ? <Spinner size="sm" animation="border" /> : "Submit"}
              </Button>

              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              {success && <Alert variant="success" className="mt-3">Form submitted successfully!</Alert>}
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
