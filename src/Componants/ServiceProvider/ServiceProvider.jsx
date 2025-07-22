import React, { useEffect, useState } from 'react';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../ServiceProvider/ServiceProvider.css';
import SEO from '../SEO';
import axios from 'axios';

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(`https://landingpagebackend-nine.vercel.app/api/banner/get/Serviceprovider`);
        if (res.data && res.data.length > 0) {
          setBannerImage(res.data[0].imageUrl);
        }
      } catch (err) {
        console.error('Failed to load banner:', err);
      } finally {
        setBannerLoading(false);
      }
    };

    fetchBanner();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.module.trim()) newErrors.module = 'Module is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) data.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://biz-booster-landingpage-backend.vercel.app/api/service/submit-service', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Submission failed');

      const result = await response.json();
      alert('Form submitted successfully!');
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
      <SEO title="Service Provider" description="This is Service Provider Page." />

      <div className="position-relative">
        {bannerLoading ? (
          <div
            style={{ height: '400px', backgroundColor: '#ddd' }}
            className="d-flex justify-content-center align-items-center"
          >
            Loading banner...
          </div>
        ) : bannerImage ? (
          <img
            src={bannerImage}
            className="w-100"
            alt="Service Provider Banner"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{ height: '400px', backgroundColor: '#ccc' }}
            className="d-flex justify-content-center align-items-center"
          >
            No banner found
          </div>
        )}

        <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
          {/* Optional heading */}
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-background"></div>
        <div className="contact-overlay">
          <Container className="py-5">
            <h1 className="text-center fw-bold">Connect with Our Service Team</h1>
            <p className="text text-center py-4">
              Have a question or need support? Our expert service team is ready to assist you...
            </p>
            <Form className="py-5" onSubmit={handleSubmit}>
              <Row>
                {['firstName', 'middleName', 'lastName'].map((field, idx) => (
                  <Col key={idx} lg={4} className="mb-4">
                    <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                      <Form.Group controlId={`input-${field}`}>
                        <Form.Label className="text">{field.replace(/([A-Z])/g, ' $1')}</Form.Label>
                        <Form.Control
                          type="text"
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          isInvalid={!!errors[field]}
                          placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                        />
                        <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  </Col>
                ))}
                <Col lg={6} className="mb-4">
                  <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                    <Form.Group>
                      <Form.Label className="text">Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="name@example.com"
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                  </motion.div>
                </Col>
                <Col lg={6} className="mb-4">
                  <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                    <Form.Group>
                      <Form.Label className="text">Phone No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        isInvalid={!!errors.phoneNumber}
                        placeholder="Enter phone number"
                      />
                      <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                    </Form.Group>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} className="mb-4">
                  <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                    <Form.Group>
                      <Form.Label className="text">Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        isInvalid={!!errors.address}
                        placeholder="Enter address"
                      />
                      <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                    </Form.Group>
                  </motion.div>
                </Col>
                <Col lg={6} className="mb-4">
                  <motion.div initial="hidden" animate="visible" variants={inputVariant}>
                    <Form.Group>
                      <Form.Label className="text">Modules</Form.Label>
                      <Form.Select
                        name="module"
                        value={formData.module}
                        onChange={handleChange}
                        isInvalid={!!errors.module}
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
                      <Form.Control.Feedback type="invalid">{errors.module}</Form.Control.Feedback>
                    </Form.Group>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
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
                  <Form.Label className="text">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
              </motion.div>
              <Button
                type="submit"
                className="w-100 mt-5 py-2 text-white fw-bold"
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
