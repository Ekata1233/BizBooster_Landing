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
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "remark") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://landingpagebackend-nine.vercel.app/api/earning/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessModels = [
    "Retail",
    "Distributor Partner",
    "Franchise Partner",
    "Service Provider",
    "Other"
  ];

  return (
    <>
      <div className="contact-container">
        <NationWide />
        <SEO title="Become Our Partner Contact" description="This is Become Our Partner Contact." />
        <div className="contact-background"></div>
        <div className="count-overlay" style={{ backgroundColor: 'rgba(230, 236, 249, 0.94)' }}>
          <Container id="contact-form">
            <motion.h2
              className="text-center  fw-bold py-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              Apply Now and Start Earning
            </motion.h2>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="rounded-3 py-2 my-3 "
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{border:'1px solid black'}}
                      required
                    />
                  </motion.div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="middleName"
                      placeholder="Middle Name"
                      className="rounded-3 py-2 my-3 "
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </motion.div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="rounded-3 py-2 my-3"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={8} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone/Mobile No"
                      className="rounded-3 py-2 my-4"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className="rounded-3 py-2 my-4"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </motion.div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={8} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="City"
                      className="rounded-3 py-2 my-4"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </motion.div>
                </Col>
                <Col xs={12} sm={8} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="stateProvince"
                      placeholder="State/Province"
                      className="rounded-3 py-2 my-4"
                      value={formData.stateProvince}
                      onChange={handleChange}
                    />
                  </motion.div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={8} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                    <Form.Control
                      type="text"
                      name="pincodeZipcode"
                      placeholder="Pincode/Zipcode"
                      className="rounded-3 py-2 my-4"
                      value={formData.pincodeZipcode}
                      onChange={handleChange}
                    />
                  </motion.div>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <motion.p className="text-black fw-bold mt-3" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                  Interested In
                </motion.p>
                <motion.div  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} className="text-black">
                  <Stack gap={2} className="mt-2 text-black">
                    {businessModels.map((model, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        id={`radio-${index}`}
                        label={<span style={{color:'black'}}>{model}</span>}
                        name="businessModel"
                        checked={formData.businessModel === model}
                        onChange={() =>
                          setFormData(prev => ({
                            ...prev,
                            businessModel: model
                          }))
                        }
                        required
                        className="text-black"
                       
                      />
                    ))}
                  </Stack>
                </motion.div>
              </Form.Group>

              <Row>
                <motion.p className="text-black fw-bold my-3" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                  Remarks
                </motion.p>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter remark"
                      className="rounded-3"
                      name="remark"
                      value={formData.remark}
                      onChange={handleChange}
                      maxLength={1000}
                    />
                  </Form.Group>
                  <p className="my-2 text-black">{charCount} of 1000 max characters.</p>
                </motion.div>
              </Row>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
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
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Submitting...
                    </>
                  ) : "Submit"}
                </Button>
              </motion.div>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BecomePartnerContact;
