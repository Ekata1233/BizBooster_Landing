// ...your existing imports remain unchanged
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import "../../Contact/Contact.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { motion } from "framer-motion";
import NationWide from "../../NationWide/NationWide";
import { useLocation } from "react-router-dom";
import SEO from "../../SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function BecomePartnerContact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    stateProvince: "",
    pincodeZipcode: "",
    businessModel: "",
    remark: ""
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10–15 digits";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.pincodeZipcode && !/^\d{4,10}$/.test(formData.pincodeZipcode)) {
      newErrors.pincodeZipcode = "Invalid pincode/zipcode";
    }

    if (!formData.businessModel) newErrors.businessModel = "Please select a business model";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "remark") setCharCount(value.length);

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://landingpagebackend-nine.vercel.app/api/earning/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          city: "",
          stateProvince: "",
          pincodeZipcode: "",
          businessModel: "",
          remark: ""
        });
        setCharCount(0);
        setErrors({});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessModels = [
    "Retail", "Distributor Partner", "Franchise Partner", "Service Provider", "Other"
  ];

  return (
    <>
      <div className="contact-container">
        <NationWide />
        <SEO title="Become Our Partner Contact" description="This is Become Our Partner Contact." />
        <div className="contact-background"></div>
        <div className="count-overlay" style={{ backgroundColor: 'rgba(214, 223, 236, 0.69)' }}>
          <Container id="contact-form">
            <motion.h2 className="text-center fw-bold py-5" initial="hidden" whileInView="visible" variants={fadeInUp}>
              Apply Now and Start Earning
            </motion.h2>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={4}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="rounded-3 py-2 my-3 text-black"
                      style={{ border: '1px solid black' }}
                    />
                    {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Control
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="rounded-3 py-2 my-3 text-black"
                  />
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="rounded-3 py-2 my-3 text-black"
                    />
                    {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone/Mobile No"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="rounded-3 py-2 my-4 text-black"
                    />
                    {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-3 py-2 my-4 text-black"
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="rounded-3 py-2 my-4 text-black"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="stateProvince"
                    placeholder="State/Province"
                    value={formData.stateProvince}
                    onChange={handleChange}
                    className="rounded-3 py-2 my-4 text-black"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="pincodeZipcode"
                      placeholder="Pincode/Zipcode"
                      value={formData.pincodeZipcode}
                      onChange={handleChange}
                      className="rounded-3 py-2 my-4 text-black"
                    />
                    {errors.pincodeZipcode && <small className="text-danger">{errors.pincodeZipcode}</small>}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <p className="text-black fw-bold mt-3">Interested In</p>
                <Stack gap={2}>
                  {businessModels.map((model, index) => (
                    <Form.Check
                      key={index}
                      type="radio"
                      id={`radio-${index}`}
                      label={<span style={{ color: 'black' }}>{model}</span>}
                      name="businessModel"
                      checked={formData.businessModel === model}
                      onChange={() =>
                        setFormData(prev => ({
                          ...prev,
                          businessModel: model
                        }))
                      }
                    />
                  ))}
                </Stack>
                {errors.businessModel && <small className="text-danger">{errors.businessModel}</small>}
              </Form.Group>

              <Form.Group>
                <p className="text-black fw-bold my-3">Remarks</p>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="remark"
                  placeholder="Enter remark"
                  maxLength={1000}
                  value={formData.remark}
                  onChange={handleChange}
                  className="rounded-3 text-black"
                />
                <p className="my-2 text-black">{charCount} of 1000 max characters.</p>
              </Form.Group>

              <Button
                type="submit"
                className="rounded-3 px-3 my-lg-5 w-100 fw-bold py-2"
                style={{
                  backgroundColor: "#00509D",
                  border: "2px solid #ffffff",
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0071e3";
                  e.target.style.transform = "scale(1.02)";
                  e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#00509D";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" className="me-2" />
                    Submitting...
                  </>
                ) : "Submit"}
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BecomePartnerContact;
