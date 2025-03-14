import React from "react";
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
            {["First Name", "Middle Name", "Last Name"].map((placeholder, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control type="text" placeholder={placeholder} className="rounded-0 py-2 mt-3" />
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
                <Form.Control type="text" placeholder="Phone/Mobile No" className="rounded-0 py-2" />
              </motion.div>
            </Col>
          </Row>

          <Row className="my-4">
            {["City", "State/Province", "Pincode/Zipcode"].map((placeholder, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control type="text" placeholder={placeholder} className="rounded-0 py-2" />
                  <p className="my-2 text-white">0 of 50 max characters.</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Form>
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
                    <Form.Check type="radio" id={`radio-${index}`} label={label} name="exampleRadio" />
                  </motion.div>
                ))}
              </Stack>
            </Row>
          </Form>

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
            <Form>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Enter remark" className="rounded-0" />
                </Form.Group>
                <p className="my-2 text-white">0 of 1000 max characters.</p>
              </motion.div>
            </Form>
          </Row>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Button  className="rounded-3 px-3 my-lg-5 w-100 fw-bold py-2  text-white">
              Submit
            </Button>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
