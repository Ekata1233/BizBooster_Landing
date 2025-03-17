import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Contact/Contact.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    stateProvince: "",
    pincodeZipcode: "",
    businessModel: "",
    remark: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://biz-booster-landingpage-backend.vercel.app/api/business/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-background"></div>
      <div className="count-overlay ">
        <Container className="py-5">
          <motion.h2
            className="text-center text-white fw-bold py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
          >
            Know About Business Model
          </motion.h2>

          <Row className="my-2">
            {["firstName", "middleName", "lastName"].map((name, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control
                    type="text"
                    name={name}
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    className="rounded-0 py-2 mt-3"
                    value={formData[name]}
                    onChange={handleChange}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row className="my-4">
            <Col xs={12} sm={8} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone/Mobile No"
                  className="rounded-0 py-2"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </motion.div>
            </Col>
          </Row>

          <Row className="my-4">
            {["city", "stateProvince", "pincodeZipcode"].map((name, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control
                    type="text"
                    name={name}
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    className="rounded-0 py-2"
                    value={formData[name]}
                    onChange={handleChange}
                  />
                  <p className="my-2 text-white">0 of 50 max characters.</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Form onSubmit={handleSubmit}>
            <Row className="d-flex flex-column flex-md-row align-items-start text-white">
              <motion.p
                className="text-white fw-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                Business Model
              </motion.p>
              <Stack direction="horizontal" gap={3} className="flex-wrap">
                {["Premium Partner", "Distributor Partner", "Franchise"].map((label, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInUp}
                  >
                    <Form.Check
                      type="radio"
                      id={`radio-${index}`}
                      label={label}
                      name="businessModel"
                      value={label}
                      checked={formData.businessModel === label}
                      onChange={handleChange}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Row>

            <Row>
              <motion.p
                className="text-white fw-bold my-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                Remarks
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="remark"
                    placeholder="Enter remark"
                    className="rounded-0"
                    value={formData.remark}
                    onChange={handleChange}
                  />
                </Form.Group>
                <p className="my-2 text-white">0 of 1000 max characters.</p>
              </motion.div>
            </Row>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              <Button type="submit" className="rounded-3 px-3 my-lg-5 w-100 fw-bold py-2 text-white" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </motion.div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;